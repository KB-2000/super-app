import React, { useRef, useState } from 'react'
import styles from './Timer.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import timerSound from '../../assets/audio/timerSound.mp3'

export default function Timer() {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [key, setKey] = useState(Date.now().toString())
    const start_btn = useRef();
    const timerSoundRef = useRef();

    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        const padZero = (num) => (num < 10 ? `0${num}` : num);

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    };

    const incrementHours = () => {
        setHours((hours) => (hours + 1) % 24)
    }
    const decrementHours = () => {
        if (hours > 0) setHours((hours) => (hours - 1) % 5)
        else setHours(23)
    }

    const incrementMinutes = () => {
        setMinutes((minutes) => (minutes + 1) % 60)
    }
    const decrementMinutes = () => {
        if (minutes > 0) setMinutes((minutes) => (minutes - 1))
        else setMinutes(59)
    }

    const incrementSeconds = () => {
        setSeconds((seconds) => (seconds + 1) % 60)
    }
    const decrementSeconds = () => {
        if (seconds > 0) setSeconds((seconds) => (seconds - 1))
        else setSeconds(59)
    }
    const onButtonClick = () => {
        
        if(start_btn.current.innerText === "Start" ){
            start_btn.current.innerText = "Stop"
            setIsPlaying(true)
        }else{
            start_btn.current.innerText = "Start"
            setIsPlaying(false)
        }
        
             
    }
    const onComplete = ()=> {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        timerSoundRef.current.play();
        const newKey = Date.now.toString()
        setKey(newKey)
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.timer}>
                    <CountdownCircleTimer
                        isPlaying={isPlaying}
                        onComplete={onComplete}
                        duration={hours * 3600 + minutes * 60 + seconds}
                        colors={['#FF6A6A', '#F7B801', '#A30000', '#A30000']}
                        colorsTime={[3600, 1800, 600, 0]}
                        size={170}
                        key={key}
                    >
                        {({ remainingTime }) => (
                            <div>
                                <h1 className={styles.timer}>{formatTime(remainingTime)}</h1>
                            </div>
                        )}
                    </CountdownCircleTimer>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.right_container}>
                    <div>
                        <p>Hours</p>
                        <span onClick={incrementHours} className={`material-symbols-outlined ${isPlaying?styles.disabled:""} `}>arrow_drop_up</span>
                        <p>{hours < 10 ? `0${hours}` : hours}</p>
                        <span onClick={decrementHours} className={`material-symbols-outlined ${isPlaying?styles.disabled:""} `}>arrow_drop_down</span>

                    </div>
                    <p>:</p>
                    <div>
                        <p>Minutes</p>
                        <span onClick={incrementMinutes} className={`material-symbols-outlined ${isPlaying?styles.disabled:""} `}>arrow_drop_up</span>
                        <p>{minutes < 10 ? `0${minutes}` : minutes}</p>
                        <span onClick={decrementMinutes} className={`material-symbols-outlined ${isPlaying?styles.disabled:""} `}>arrow_drop_down</span>

                    </div>
                    <p>:</p>
                    <div>
                        <p>Seconds</p>
                        <span onClick={incrementSeconds} className={`material-symbols-outlined ${isPlaying?styles.disabled:""} `}>arrow_drop_up</span>
                        <p>{seconds < 10 ? `0${seconds}` : seconds}</p>
                        <span onClick={decrementSeconds} className={`material-symbols-outlined ${isPlaying?styles.disabled:""} `}>arrow_drop_down</span>

                    </div>
                </div>
                <button ref={start_btn} onClick={onButtonClick}>Start</button>
                <audio ref={timerSoundRef} src={timerSound}></audio>
            </div>

        </div>
    )
}
