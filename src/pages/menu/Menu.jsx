import React from 'react'
import styles from '../menu/menu.module.css'
import { Footer, Navbar } from '../../components'
import MenuItems from '../../components/menuItems/MenuItems'
import Cart from '../../components/cart/Cart'
import { ColdstoneContext } from '../../context/context'

function Menu(){
    return (
        <div>
            <Navbar />
            <div className={styles.menu}>
                <MenuItems />
                <Cart />
            </div>
            <Footer />
        </div>
    )
}
export default Menu