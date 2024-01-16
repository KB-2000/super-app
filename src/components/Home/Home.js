import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import Notes from '../Notes/Notes'
import News from '../News/News'
import styles from './Home.module.css'


export default function Home() {
  return (
    <>
      <div className={styles.main}>
          <ProfileCard/>
          <Notes/>
          <News/>
      </div>
    </>
  )
}
