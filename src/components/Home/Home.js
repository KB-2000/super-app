import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import Notes from '../Notes/Notes'
import News from '../News/News'
import Weather from '../Weather/Weather'
import Timer from '../Timer/Timer'
import styles from './Home.module.css'


export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.outer}>
          <div className={styles.inner}>
            <div className={styles.container}>
              <ProfileCard />
              <Weather />
            </div>
            <Notes />
          </div>
          <Timer />
        </div>
        <News />
      </div>
    </>
  )
}
