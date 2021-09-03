import React, { useContext, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import styles from '../signup/signup.module.css'
import backg from '../../images/coldstoneBackg.jpg'
import { ColdstoneContext } from '../../context/context'
import {useHistory} from 'react-router-dom'
import { Footer } from '../../components'
import { useAlert } from 'react-alert'

function Signup(){
    const {signupUser} = useContext(ColdstoneContext)
    const [firstName, setFirstName] = useState('')
    const [loading, setLoading] = useState(false)
    const [lastName, setLastName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const alert = useAlert()


    const handleSignup = async (event)=>{
        setLoading(true)
        event.preventDefault()
        const response = await signupUser({
            emailAddress,
            password,
            firstName,
            lastName
        })
        if(response.status === 201){
            history.push('/')
            setLoading(false)
        }
        else if(response.status === 400){
            alert.show('Fill in  a valid email address or password!')
            console.log('fill in the email')
        }
    }

    return(
        <div>
        <Navbar />
            <div>
            <img src = {backg} alt = "Coldstone ice cream" className = {styles.img} />
            </div>
            <div className = {styles.container}>
                <form>
                <h1>create account</h1>
                   <div className = {styles.wrapper}>
                       <input 
                       type="text" 
                       placeholder="First name"
                       onChange = {(event) =>{setFirstName(event.target.value)}}
                       required/>
                       <input 
                       type="text" 
                       placeholder="Last name"
                       onChange = {(event) =>{setLastName(event.target.value)}}
                       required/>
                   </div> 
                   <div className = {styles.inputwrap}>
                       <input 
                       type="email" 
                       placeholder="Email" 
                       onChange = {(event) =>{setEmailAddress(event.target.value)}}
                       required/>
                       <input 
                       type="password" 
                       placeholder="Password"
                       onChange={(event)=>{setPassword(event.target.value)}}
                       required/>
                   </div>
                   <div className={styles.checkbox}>
                           <label>
                                <input type="checkbox" required/><b>I agree with the terms and condition</b>
                           </label>
                   </div>
                   <div className = {styles.btn}>
                        {loading ? 
                            <button type="submit" className= {styles.buttonload}>
                            <i class="fa fa-spinner fa-spin"></i>Loading
                            </button>
                        :
                        <button type="submit" onClick={(event) => handleSignup(event)}>Sign up</button>
                        }
                   </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
export default Signup