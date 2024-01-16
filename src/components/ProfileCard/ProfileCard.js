import React, { useEffect } from 'react'
import styles from './ProfileCard.module.css'
import bioImage from '../../assets/images/bioImage.png'

export default function () {
  const genre = localStorage.getItem("genre")
  const genreArray = genre.split(",");
  useEffect(()=>{
    console.log(genreArray + " " + typeof genreArray)
  })
  return (

<div className={styles.main}>
    <div className={styles.container}>
        <div className={styles.left_container}>
             <img src={bioImage} alt="profile image" />
        </div>
        <div className={styles.right_container}>
            <div className={styles.bio}>
                <p>{JSON.parse(localStorage.getItem("formData")).name}</p>
                <p>{JSON.parse(localStorage.getItem("formData")).email}</p>
                <h1>{JSON.parse(localStorage.getItem("formData")).userName}</h1>
            </div>
            <div className={styles.genre}>
                {genreArray.map((element,idx) => (
                  <p key={idx}>{element}</p>
                ))}
              
            </div>
        </div>
    </div>
    </div> 
    
  )
}
