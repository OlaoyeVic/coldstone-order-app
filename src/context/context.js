import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const rootUrl = 'https://immense-eyrie-42860.herokuapp.com'
const itemArray = 'https://immense-eyrie-42860.herokuapp.com/Item'
//rootUrl/google
//rootUrl/facebook/facebook
//rootUrl/cart/user

const ColdstoneContext = React.createContext()

const ColdstoneProvider = ({children}) =>{
    const [items, setItems] = useState([])
    const [cart, setCart] = useState([])
    const loginUser = async({ emailAddress, password})=>{
        const response = await axios.post(`${rootUrl}/user/login`, { emailAddress, password })
        if(response.status === 200){
            const { token } = response.data
            localStorage.setItem("token", JSON.stringify(token))
        }
        return response
    }

    const googleUser = async()=>{
        const response = await axios.get(`${rootUrl}/auth/google`)
        console.log(response)
        return response
    }

    const facebookUser = async()=>{
        const response = await axios.get(`${rootUrl}/auth/facebook`)
        return response
    }

    const signupUser = async({emailAddress, password, firstName, lastName})=>{
        const response = await axios.post(`${rootUrl}/user/signup`, {emailAddress, password, firstName, lastName})
        console.log(response)
        return response
    }
    
   const checkRequest = ()=>{
       axios.get(`${rootUrl}/Item`)
       .then(({data})=>{
           let {item} = data
           console.log({...item})
           setItems(item)
       })
       .catch(err =>{
           console.log(err)
       })
   }
   useEffect(checkRequest, [])

   const getCartProducts = ()=>{
       const token = JSON.parse(localStorage.getItem("token"))
       console.log(token)
       axios.post(`${rootUrl}/cart/user`,{items: cart}, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
       })
       .then(response => console.log(response))
   }
 useEffect(() => {
     getCartProducts()
 }, [cart])
    return <ColdstoneContext.Provider value = {{loginUser,signupUser, googleUser, facebookUser, items, getCartProducts, cart, setCart}}>{children}</ColdstoneContext.Provider>
}
export {ColdstoneProvider, ColdstoneContext}