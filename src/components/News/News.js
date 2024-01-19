import React, { useEffect, useState } from 'react'
import styles from './News.module.css'
import coverImage from '../../assets/images/coverImage.png'
import { getnewsDetails } from '../../apis/newsApi'


export default function News() {
    const [news,setNews] = useState([]);
    useEffect(()=>{
        fetchNews();
    })
    const fetchNews = async ()=>{
        const result = await getnewsDetails();
        console.log("news detail "+result)
        setNews(result)
    }
    return (
        <div 
          style={{background:`url(${coverImage})`}}
         className={styles.container}>
            <h1>{news.title}</h1>
            <div className={styles.news_detail}>
                <p>{news.description}</p>
            </div>
        </div>
    )
}
