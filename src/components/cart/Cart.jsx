import React from 'react';
import { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { ColdstoneContext } from '../../context/context';
import styles from '../cart/cart.module.css'
import MenuItems from '../menuItems/MenuItems'
import { usePaystackPayment } from 'react-paystack';
import { PaystackButton } from "react-paystack";

function Cart(){
    const { items, cart, deleteCart } = React.useContext(ColdstoneContext)
    const {price, quantity} = cart
    const [paystackHook, setPaystackHook] = useState({
        key: "pk_test_1ae065aad2dcf4b6bb42ac89256c8a77827c4138",
        email: "foobar@example.com",
        amount: 10000
    })
    const callback = (response) => {
        console.log(response); // card charged successfully, get reference here
    }

    const close = () => {
        console.log("Payment closed");
    }

    const getReference = () => {
        //you can put any unique reference implementation code here
        let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

        for( let i=0; i < 15; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    const handleDeleteCart = (_id) =>{
        deleteCart(_id)
    }
   cart.map((carts, index) =>(
       <div></div>
   ))

    return(
        <div className={styles.cart_info}>
            <header className={styles.header}>Your Order</header>
            <h3 className={styles.company_name}>Coldstone creamery</h3>
            <p>
            <PaystackButton 
             text="Checkout"
             className={styles.checkout}
             callback={callback}
             close={close}
             disabled={true}
             embed={true}
             reference={getReference()}
             email={paystackHook.email}
             amount={paystackHook.amount}
             publicKey={"pk_test_1ae065aad2dcf4b6bb42ac89256c8a77827c4138"}
             tag="button"
            />
            </p>
            <hr/>
            
            {cart.map((carts) =>(
                <div className={styles.cart_details} key={carts._id} >
                <p>Variety - {carts.name}</p>
                <p>Price - $ {carts.price}</p>
                <p>Quantity -</p>
                <button className={styles.cart_icon}  onClick={() => handleDeleteCart(carts._id)}>
                <i class="fas fa-trash-alt"></i></button>
                </div>
            ))}
            <hr/>
            <p className={styles.total}>Total </p>
        </div>
    )
}
export default Cart