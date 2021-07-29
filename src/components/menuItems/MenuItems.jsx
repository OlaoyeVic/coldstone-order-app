import React from 'react';
import styles from '../menuItems/menuItems.module.css'
import { ColdstoneContext } from '../../context/context';
import { useState, useRef, useEffect } from 'react/cjs/react.development';
import { useHistory } from 'react-router-dom'
import {BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch} from "react-router-dom"

function MenuItems(){
    const {items, cart, setCart} = React.useContext(ColdstoneContext)
    console.log(items)

    const [count, setCount] = useState(1)
    const [currItem, setCurrItem] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const history = useHistory()

    const openModal = (item) => {
        setIsOpen(true);
        setCurrItem(item)
    }
    
    const closeModal = () => {
        setIsOpen(false);
    }
    
    const addToCart = ()=>{
        setCart([...cart, currItem])
        setIsOpen(false)
    }

    const increaseQuantity = ()=>{
        setCount(count + 1)
    }

    const decreaseQuantity = ()=>{
        setCount((Math.max(count -1, 1)))
    }

    const cakeItems = items.filter(function(item){
        return item.category === "CAKE"
    }).map((item, index) =>(
        <ItemCard item={item} items={items} key={index} count={count} openModal={openModal}/>
    ))

    const iceCreamItems = items.filter(function(item){
        return item.category === "ICE CREAM"
    }).map((item, index) =>(
        <ItemCard item={item} key={index} count={count} openModal={openModal}/>
    ))
    
    return(
        <div className={styles.wrapper}>
            <h2 className={styles.category}>Coldstone Cakes</h2>
            {cakeItems}
            <h2 className={styles.category}>Ice Cream</h2>
            {iceCreamItems}
            {isOpen && <div className={styles.cart}>
                <button className={styles.icon} onClick={closeModal}><i className="fas fa-times"></i></button> 
                <p className={styles.deal}>₦{currItem.price*count} deal</p>
                <p style={{fontSize: '20px'}}>Any of the new love flavours + Any plain flavour</p>
                <p className={styles.flavour}>Plain flavour cup (Choose One)</p>
                <label className={styles.options}>Cake Batter cream
                    <input type="radio" name="radio" />
                    <span className={styles.radio}></span>
                </label>
                <label className={styles.options}>Cheese Cake cream
                    <input type="radio" name="radio" />
                    <span className={styles.radio}></span>
                </label>
                <label className={styles.options}>Chocolate cream
                    <input type="radio" name="radio" />
                    <span className={styles.radio}></span>
                </label>
                <label className={styles.options}>Coffee cream
                    <input type="radio" name="radio" />
                    <span className={styles.radio}></span>
                </label>
                <label className={styles.options}>French Vanilla cream
                    <input type="radio" name="radio" />
                    <span className={styles.radio}></span>
                </label>
                <button className={styles.no} onClick={decreaseQuantity}>-</button>
                <strong>{count}</strong>
                <button className={styles.no} onClick={increaseQuantity}>+</button>
                <button className={styles.cart_button} onClick = {addToCart}>Add to cart</button>
            </div>}
        </div>
    )
}

function ItemCard({ item, count, items, openModal}){
    
    return(
        <div className = {styles.card}>
            <img src = {item.imageUrl} />
            <h1>{item.name}</h1>
            <p className={styles.price}>${item.price}</p>
            <p>{item.description}</p>
            <p><button onClick={() => openModal(item)}>More Details...</button></p>
        </div>
    )
}
export default MenuItems