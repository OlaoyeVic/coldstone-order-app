import React from 'react';
import styles from '../menuItems/menuItems.module.css'
import { ColdstoneContext } from '../../context/context';
import { useState } from 'react/cjs/react.development';
import {useHistory} from 'react-router-dom'

function MenuItems(props){
    const {items, cart, setCart} = React.useContext(ColdstoneContext)
    console.log(items)

    const [click, setClick] = useState(false)
    const [count, setCount] = useState(1)
    const [currItem, setCurrItem] = useState()

    const addToCart = ()=>{
        setCart([...cart, currItem])
    }
    const handleClick = (item)=> {
        setClick(!click)
        setCurrItem(item)
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
        <ItemCard item={item} items={items} handleClick={handleClick} key={index} count={count}/>
    ))

    const iceCreamItems = items.filter(function(item){
        return item.category === "ICE CREAM"
    }).map((item, index) =>(
        <ItemCard item={item} handleClick={handleClick} key={index} count={count}/>
    ))
    
    return(
        <div className={styles.wrapper}>
            <h2 className={styles.category}>Coldstone Cakes</h2>
            {cakeItems}
            <h2 className={styles.category}>Ice Cream</h2>
            {iceCreamItems}
            {click ? <div className={styles.cart}>   
                <p className={styles.deal}>${currItem.price*count} deal</p>
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
            </div> : <div className={styles.wrapper}></div>}
            
        </div>
    )
}

function ItemCard({ item, handleClick, count, items}){
    const total = item.price * count
    console.log(total)
    
    return(
        <div className = {styles.card}>
            <img src = {item.imageUrl} />
            <h1>{item.name}</h1>
            <p className={styles.price}>${item.price}</p>
            <p>{item.description}</p>
            <p><button onClick={() => handleClick(item)}>More Details...</button></p>
        </div>
    )
}
export default MenuItems