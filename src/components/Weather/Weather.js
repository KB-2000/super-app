    import React, { useState, useEffect } from 'react'
    import styles from './Weather.module.css'
    import { getWeatherDetails } from '../../apis/weatherApi'
    import loading from '../../assets/images/loading.gif'

    export default function Weather() {
        const [weather,setWeather] = useState()
        useEffect(() => {
            fetchWeather();
        }, [])
        const fetchWeather = async () => {
            try {
                const response = await getWeatherDetails();
                setWeather({
                    localtime:response.data.location.localtime,
                    weatherStatus:response.data.current.condition.text,
                    pressure:response.data.current.pressure_mb,
                    temp:response.data.current.temp_c,
                    windSpeed:response.data.current.wind_kph,
                    humidity:response.data.current.humidity
        
                })
            } catch (error) {
                console.log("weatehre "+ error)
            }
        
        }

        const date = new Date().toLocaleDateString('en-CA');
        const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
        return (
            <>
             <div className={styles.container}>
                <div className={styles.top}>
                    <span>{`${date}  ${time}`}</span>
                </div>
                {weather ? <div className={styles.bottom}>
                    <div className={styles.wind}>
                        <span style={{fontSize:"3rem"}} class="material-symbols-outlined">
                            thunderstorm
                        </span>
                        <p>{weather.weatherStatus}</p>
                    </div>
                    <p>|</p>
                    <div className={styles.pressure}>
                        <h1>{weather.temp}&deg;C</h1>
                        <p>{weather.pressure} mbar <br />pressure</p>
                    </div>
                    <p>|</p>
                    <div>
                        <div className={styles.up}>
                            <span class="material-symbols-outlined">air</span>
                            <div>
                                <p>{weather.windSpeed}kmp/h</p>
                                <p>wind</p>
                            </div>
                        </div>
                        <div className={styles.down}>
                            <span class="material-symbols-outlined">humidity_mid</span>
                            <div>
                                <p>{weather.humidity}%</p>
                                <p> humidity</p>
                            </div>
                        </div>
                    </div>
                </div> : <img height={"100px"}src={loading} alt="" />}
            </div>
            </>
        )
    }
