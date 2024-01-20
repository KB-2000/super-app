import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import styles from './News.module.css'
import coverImage from '../../assets/images/coverImage.png'
import { getnewsDetails } from '../../apis/newsApi'
import loading from '../../assets/images/loading.gif'


export default function News() {
    const navigate = useNavigate();
    const [news,setNews] = useState();
    useEffect(()=>{
        fetchNews();
    },[])

    const fetchNews = async ()=>{
        const result = await getnewsDetails();
        console.log("news detail "+result) 
        setNews(result)
    }
    return (
    <>
    <div>
        <div 
          style={{background:`url(${coverImage})`}}
          className={styles.container}>
            <h1>{news ? news.title: <img height={"100px"}src={loading} alt="" />}</h1>
            <div className={styles.news_detail}>
                <p>{news ? news.description : <img height={"100px"}src={loading} alt="" />}</p>
                
            </div>
            
         
        </div>
        <button onClick={()=>navigate("/movie")} className={styles.browse}>Browse</button>
        </div>
        </>
    )
}
