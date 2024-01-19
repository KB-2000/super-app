import React, { useState } from 'react'
import {useNavigate} from 'react-router'
import styles from './Register.module.css'
import coverImage from '../../assets/images/coverImage.png'

export default function () {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        userName: "",
        email: "",
        mobile: "",
        isAgreed: false
    })
     const [error,setError] = useState({
        nameError : false,
        userNameError : false,
        emailError : false,
        mobileError : false,
        isAgreedError : false
     })
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]:event.target.value});
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        let updateError = {}
        
        if(!formData.name.length){
            updateError={...updateError,nameError:true}
        }
        if(!formData.userName.length){
            updateError={...updateError,userNameError:true}
        }
        if(!formData.email.length){
            updateError={...updateError,emailError:true}
        }
        if(!formData.mobile.length){
            updateError={...updateError,mobileError:true}
        }
        if(!formData.isAgreed){
            updateError={...updateError,isAgreedError:true}
        }
        setError(updateError);
        if(!Object.keys(updateError).length){
            localStorage.setItem("formData",JSON.stringify(formData))
            navigate("/genre")   
        }
        
        console.log(updateError)
    }
    return (
        <>
        
            <div className={styles.main}>
                <div className={styles.left}>
                    <img className={styles.coverImage} src={coverImage} alt="CoverImage" />
                    <h1 className={styles.bannerText}>Discover new things on Superapp</h1>
                </div>
                <div className={styles.right}>
                    <h1 className={styles.heading}>Super app</h1>
                    <h3 className={styles.subHeading}>Create your new account</h3>
                    <form className={styles.register} action="">
                        <input type="text" placeholder='Name' name='name'
                            onChange={(event) => { handleChange(event) }}
                        />
                        {error.nameError ? <p>This field is required</p>:<></>}
                        
                        <input type="text" placeholder='UserName' name='userName'
                            onChange={(event) => { handleChange(event) }}
                        />
                         {error.userNameError ? <p>This field is required</p>:<></>}

                        <input type="email" placeholder='Email' name='email'
                            onChange={(event) => { handleChange(event) }}
                        />
                         {error.emailError ? <p>This field is required</p>:<></>}

                        <input type='number' placeholder='Mobile' name='mobile'
                            onChange={(event) => { handleChange(event) }}
                        />
                         {error.mobileError ? <p>This field is required</p>:<></>}
                        <div className={styles.check}>
                            <label htmlFor="name">
                                <input type="checkbox" name="isAgreed" 
                                    onChange={(event)=>{
                                        setFormData({
                                            ...formData, [event.target.name]:event.target.checked
                                        })
                                    }}
                               />
                            Share my registration data with Superapp</label>
                           
                        </div>
                        {error.isAgreedError ? <p>This field is required</p>:<></>}
                        <button onClick={(event)=>{handleSubmit(event)}} type='submit'>Sign Up</button>

                    </form>

                    <p>By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></p>
                    <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>

                </div>
            </div>



        </>
    )
}
