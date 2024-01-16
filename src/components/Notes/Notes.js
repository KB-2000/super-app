import React, { useEffect, useState } from 'react'
import styles from './Notes.module.css'

export default function Notes() {
    const [notes,setNotes] = useState(JSON.parse(localStorage.getItem("notes")))
    const handleChange =  (event) =>{
        setNotes(event.target.value)
        localStorage.setItem("notes",JSON.stringify(notes))
    }
    useEffect(()=>{
        const notes = localStorage.getItem("notes")
        if(notes){
            setNotes(JSON.parse(notes))
        }
    },[])
    
  return (
    <>
        <div className={styles.container}>
            <h1>All Notes</h1>
                <textarea onChange={(event)=>handleChange(event)} name="" id="" cols="30" rows="13" placeholder='Add notes' autoFocus>   
                 {notes} 
                </textarea>
        </div>
    </>
  )
}
