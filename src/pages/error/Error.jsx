import React from 'react'
import err from '../../images/errorImg.png'
import styles from '../error/error.module.css'
import { Link } from 'react-router-dom'

function Error(){
    return (
        <div className = {styles.error_page}>
            <b>404 Error</b>
            <img src = {err} alt = "error" className = {styles.error_img} />
            <p className={styles.p1}>Whoops, page not found</p>
            <p className={styles.p2}>We can't seem to find the page you're looking for</p>
            <Link to = "/" style={{ textDecoration: 'none' }}><button className = {styles.redirect_btn}>Go back</button></Link>
        </div>
    )
}
export default Error