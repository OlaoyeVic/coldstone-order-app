import React from 'react'
import styles from '../home/home.module.css'
import {Navbar, Info, Footer} from '../../components'

function Home(){
    return (
        <div>
            <Navbar />
            <Info />
            <Footer />
        </div>
    )
}
export default Home