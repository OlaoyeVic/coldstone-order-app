import React from 'react'
import err from '../../images/errorImg.png'
import styles from '../error/error.module.css'

function Error(){
    return (
        <img src = {err} alt = "error" className = {styles.img} />
    )
}
export default Error