import React from 'react'
import styles from './News.module.css'
import coverImage from '../../assets/images/coverImage.png'

export default function News() {
    return (
        <div 
          style={{background:`url(${coverImage})`}}
        className={styles.container}>
            <h1>Want to climb Mount Everest?</h1>
            <div className={styles.news_detail}>
                <p>In the years since human beings first reached the summit of Mount Everest in 1953, climbing the world’s highest mountain has changed dramatically. Today, hundreds of mountaineers manage the feat each year thanks to improvements in knowledge, technology, and the significant infrastructure provided by commercially guided expeditions that provide a veritable highway up the mountain for those willing to accept both the......</p>
            </div>
        </div>
    )
}
