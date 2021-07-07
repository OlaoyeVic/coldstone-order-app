import React from 'react';
import { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { ColdstoneContext } from '../../context/context';
import styles from '../cart/cart.module.css'

function Cart(){
    const {items, cart} = React.useContext(ColdstoneContext)
    console.log(cart)
    
    return(
        <div className={styles.cart_info}>
            <header className={styles.header}>Your Order</header>
            <h3 className={styles.company_name}>Coldstone creamery</h3>
            <button className={styles.checkout}>Checkout</button>
            {cart.map((carts, index) =>(
                <p>{carts.price}</p>
            ))}
            {/* <p>Total: </p> */}
        </div>
    )
}
export default Cart