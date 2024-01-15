import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import styles from './MovieGenre.module.css'
import action from "../../assets/images/action.png";
import drama from "../../assets/images/drama.png";
import fantasy from "../../assets/images/fantasy.png";
import fiction from "../../assets/images/fiction.png";
import horror from "../../assets/images/horror.png";
import music from "../../assets/images/music.png";
import romance from "../../assets/images/romance.png";
import thriller from "../../assets/images/thriller.png";
import western from "../../assets/images/western.png";
import BlockCard from "../BlockCard/BlockCard";

export default function MovieGenre() {
    const navigate = useNavigate()
    const [category,setCategory] = useState([])
    const [lengthError,setLengthError] = useState(false);
    const DEFAULT_GENRES = [
        {
            id: "Action",
            color: "#FF5209",
            image: (
                <img
                    style={{ width: "160px", height: "120px" }}
                    src={action}
                    alt="Action genre"
                />
            ),
        },
        {
            id: "Drama",
            color: "#D7A4FF",
            image: <img style={{ width: "160px", height: "120px" }} src={drama} />,
        },
        {
            id: "Fantasy",
            color: " #FF4ADE",
            image: (
                <img style={{ width: "160px", height: "120px" }} src={fantasy} />
            ),
        },
        {
            id: "Fiction",
            color: "#6CD061",
            image: (
                <img style={{ width: "160px", height: "120px" }} src={fiction} />
            ),
        },
        {
            id: "Horror",
            color: "#7358FF",
            image: <img style={{ width: "160px", height: "120px" }} src={horror} />,
        },
        {
            id: "Music",
            color: "#E61E32",
            image: <img style={{ width: "160px", height: "120px" }} src={music} />,
        },
        {
            id: "Romance",
            color: "#11B800",
            image: (
                <img style={{ width: "160px", height: "120px" }} src={romance} />
            ),
        },
        {
            id: "Thriller",
            color: "#84C2FF",
            image: (
                <img style={{ width: "160px", height: "120px" }} src={thriller} />
            ),
        },
        {
            id: "Western",
            color: "#912500",
            image: (
                <img style={{ width: "160px", height: "120px" }} src={western} />
            ),
        },
    ];
    const removeCategory = (value)=>{
        const newCategory = category.filter((category)=>(
            category !== value
        ))
        setCategory(newCategory)
    }
    const handleSubmit = ()=>{
        if(category.length < 3){
            setLengthError(true);
            return;
        }
        localStorage.setItem('genre',category)
        setLengthError(false);
        navigate("/home")
    }
    
  return (
    <>
        <div className={styles.container}>
            <div className={styles.left_container}>
                <h1>Super app</h1>
                <p>Choose your entertainment category</p>
                <div key={category} className={styles.category}>
                 {category.map((category)=>(
                     <p>{category} &nbsp;&nbsp;&nbsp;<span onClick={()=>removeCategory(category)}> x </span></p>
                 ))}
                 
                </div>
                {lengthError && <h4 style={{color: "red"}}><span className='material-symbols-outlined'>warning</span>&nbsp; Minimum 3 fields required</h4>}

            </div>
            <div className={styles.right_container}>
                    {DEFAULT_GENRES.map((genre,idx) => (
                        <BlockCard
                          genreDetails = {genre}
                          idx = {idx}
                          key = {genre.id}
                          categoryList = {category}
                          setCategory = {setCategory}

                        />
                        
                    ))}
                    <button onClick={handleSubmit}>Next Page</button>
                    
            </div>
        </div>
    </>
  )
}
