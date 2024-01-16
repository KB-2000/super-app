import React, { useState,useEffect } from 'react'

export default function BlockCard(props) {
    const [isSelected, setIsSelected] = useState(false)
    const addValueToCategory = (value) => {
        const existingValue = props.categoryList.filter((category)=>(
            category === value
        ));

        if(!existingValue.length){
            props.setCategory([...props.categoryList,value])
        } else {
            const newCategoryList = props.categoryList.filter((category)=>(
                category !== value
            ));
            props.setCategory(newCategoryList)
        }
        
    }
    useEffect(()=>{
        const isExists = props.categoryList.includes(props.genreDetails.id) === true
        setIsSelected(isExists); 
        console.log(props.categoryList)
    })
   
    return (
        <div
            onClick={() => {
                 setIsSelected(!isSelected);
                 addValueToCategory(props.genreDetails.id);
            }}
            style={{
                background: props.genreDetails["color"],
                color: "white",
                padding: "16px",
                borderRadius: "12px",
                height: "10rem",
                cursor: "pointer",
                border: `${isSelected ? "4px solid green" : "4px solid white"}`
            }}
             key={props.key}
        >
            <p style={{ marginBottom: "4px", fontSize: "18px", fontFamily: "DM Sans" }}>
                {props.genreDetails.id}
            </p>
            {props.genreDetails.image}
        </div>
    )
}


