    import React, { useState, useEffect } from 'react'
    import styles from './Weather.module.css'
    import { getWeatherDetails } from '../../apis/weatherApi'

    export default function Weather() {
        const [weather,setWeather] = useState({
            localtime:"",
            weatherStatus:"",
            pressure:"",
            temp:"",
            windSpeed:"",
            humidity:""
        })
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
                console.log(error)
            }
        
        }


        return (
            <>
            {weather && <div className={styles.container}>
                <div className={styles.top}>
                    <span>{weather.localtime ? weather.localtime:""}</span>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.wind}>
                        <span style={{fontSize:"3rem"}} class="material-symbols-outlined">
                            thunderstorm
                        </span>
                        <p>{weather.weatherStatus ? weather.weatherStatus : ""}</p>
                    </div>
                    <p>|</p>
                    <div className={styles.pressure}>
                        <h1>{weather.temp ? weather.temp:""}&deg;C</h1>
                        <p>{weather.pressure ? weather.pressure : ""} mbar <br />pressure</p>
                    </div>
                    <p>|</p>
                    <div>
                        <div className={styles.up}>
                            <span class="material-symbols-outlined">air</span>
                            <div>
                                <p>{weather.windSpeed ? weather.windSpeed : ""}kmp/h</p>
                                <p>wind</p>
                            </div>
                        </div>
                        <div className={styles.down}>
                            <span class="material-symbols-outlined">humidity_mid</span>
                            <div>
                                <p>{weather.humidity ? weather.humidity : ""}%</p>
                                <p> humidity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            </>
        )
    }
