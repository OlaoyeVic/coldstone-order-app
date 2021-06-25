import React from 'react'
import styles from '../footer/footer.module.css'
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <footer>
            <div className={styles.container}>
                <ul className={styles.flex_row}>
                    <li><Link to ="#" style={{ color: '#FFF', textDecoration: 'none' }} className={styles.link}>Privacy</Link></li>
                    <li><Link to ="#" style={{ color: '#FFF', textDecoration: 'none' }} className={styles.link}>About Us</Link></li>
                    <li><Link to ="#" style={{ color: '#FFF', textDecoration: 'none' }} className={styles.link}>Contact</Link></li>
                </ul>
                <ul className={styles.flex_row}>
                    <li><i class="fab fa-facebook"></i></li>
                    <li><i class="fab fa-youtube"></i></li>
                    <li><i class="fab fa-instagram"></i></li>
                    <li><i class="fab fa-twitter"></i></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer