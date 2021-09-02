import React, {useState} from 'react'
import styles from '../info/info.module.css'
import backg from '../../images/coldstoneBackg.jpg'
import how1 from '../../images/process1.png'
import how2 from '../../images/process2.png'
import how3 from '../../images/process3.png'
import coldstoneBanner from '../../images/banner.png'
import {Link} from 'react-router-dom'
import { ColdstoneContext } from '../../context/context'

function Info(){
    const { items } = React.useContext(ColdstoneContext)
    
    const listItems = items.slice(0, 6).map((item, index)=>(
        <div key={index} className={styles.item}>
            <div className={styles.img_container}>
            <img src = {item.imageUrl} className ={styles.item_image}/>
            <div className={styles.item_description}>
                <div className={styles.text}><p>{item.description}</p></div>
                <Link to ="/menu"><button className={styles.see_more}>See More</button></Link>
            </div>
            </div>
            <div className={styles.item_name}>
                <p>{item.name}</p>
            </div>
        </div>
    ))

    return (
        <>
        <div className={styles.container}>
            <img src = {backg} alt = "Coldstone ice cream" className = {styles.img} />
            <div className={styles.menubtn}>
            <button>Delivery</button>
            <button>Pick up</button>
            </div>
        </div>
        <header className={styles.header}>Favourite Menu</header>
        {listItems}
        <div className ={styles.process_container}>
        <p>How we make them</p>
        <img src ={how1} />
        <img src ={how2} />
        <img src ={how3} />
        <caption>
            Cold stone creamery is all about delivering the finest ice cream made for you.
            At coldstone creamery, we also offer a variety of indulgent drinks that will 
            make you come back for more.
            </caption>
        </div>
        <div className={styles.banner_container}>
            <img src={coldstoneBanner}/>
        </div>
        </>
    )
}
export default Info