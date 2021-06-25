import React,{useState} from 'react'
import { Footer, Navbar } from '../../components'
import backg from '../../images/coldstoneBackg.jpg'
import styles from '../login/login.module.css'
import image from '../../images/product-login.png'
import {ColdstoneContext} from '../../context/context.js'
import {Link, useHistory, useLocation} from 'react-router-dom'

function Login(){
    const {loginUser, googleUser, facebookUser} = React.useContext(ColdstoneContext)
    const [emailAddress, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleLogin = async (event) => {
        event.preventDefault()
        const response = await loginUser({
            emailAddress,
            password
        })
        console.log(response)
        if(response.status === 200){
            history.push('/')
        }
    }
    const handleGoogleLogin = (event) =>{
        event.preventDefault()
        googleUser()
    }
    const handleFacebookLogin = (event) =>{
        event.preventDefault()
        facebookUser()
    }
    return (
        <div>
        <Navbar />
            <div>
            <img src = {backg} alt = "Coldstone ice cream" className = {styles.img} />
            </div>
            <div className = {styles.container}>
                <form>
                    <h1 className = {styles.header}>Login</h1>
                    <div className = {styles.user}>
                        <input 
                            type = "email" 
                            placeholder = "Email or mobile phone" 
                            className = {styles.logininput}
                            onChange = {(event) => setEmail(event.target.value)} 
                        />
                        <i class="fa fa-user fa-xl"></i>
                    </div>
                    <div className = {styles.password}>
                        <input 
                        type = "password" 
                        placeholder = "Password"
                        className = {styles.logininput}
                        onChange = {(event) => setPassword(event.target.value)}
                        />
                        <i class="fa fa-lock fa-xl"></i>
                   </div>
                   <div className = {styles.button}>
                       <button onClick={(event) => handleLogin(event)}>Login</button>
                       <button style = {{backgroundColor: '#3B5998'}} onClick={(event)=>handleFacebookLogin(event)}>Login with facebook</button>
                       <button style = {{backgroundColor: 'f7f7f7'}} onClick={(event)=>handleGoogleLogin(event)}>Login with Google</button>
                       <h3>New on EatnGo?</h3>
                       <Link to = "/signup"><button>Create Account</button></Link>
                   </div>
                </form>
                <div className = {styles.product}>
                    <img src = {image} alt = "product logo" className = {styles.image} />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Login