import React from 'react'
import styles from '../navbar/navbar.module.css'
import {Link, NavLink} from 'react-router-dom'
import logo from '../../images/coldstoneLogo.png'
import { useState } from 'react'

function Navbar(){
    const [click, setClick] = useState(false)
    
    const handleClick = ()=>setClick(!click)
    return (
        <>
            <nav className = {styles.navbar}>
                <div className = {styles.nav_container}>
                    <NavLink 
                    exact to="/" 
                    className = {styles.nav_logo}>
                        <img src = {logo} alt = "Logo" />
                    </NavLink>
                    <ul className = {click ? styles.nav_menu .active : styles.nav_menu}>
                        <li className = {styles.nav_item}>
                            <NavLink 
                            exact to = "/" 
                            activeClassName = {styles.active} 
                            className = {styles.nav_link}
                            onClick = {handleClick}>
                            Home
                            </NavLink>
                        </li>
                        <li className = {styles.nav_item}>
                            <NavLink 
                            exact to = "/menu" 
                            activeClassName = {styles.active} 
                            className = {styles.nav_link}
                            onClick = {handleClick}>
                            Menu
                            </NavLink>
                        </li>
                        <li className = {styles.nav_item}>
                            <NavLink 
                            exact to = "/login" 
                            activeClassName = {styles.active} 
                            className = {styles.nav_link}
                            onClick = {handleClick}>
                            Login
                            </NavLink>
                        </li>
                        <li className = {styles.nav_item}>
                            <NavLink 
                            exact to = "/signup" 
                            activeClassName = {styles.active} 
                            className = {styles.nav_link}
                            onClick = {handleClick}>
                            Signup
                            </NavLink>
                        </li>
                    </ul>
                    <nav className = {styles.nav_icon} onClick = {handleClick}>
                        <i className = {click ? "fas fa-times" : "fas fa-bars"}></i>
                    </nav>
                </div>
            </nav>
        </>
    )
}
export default Navbar