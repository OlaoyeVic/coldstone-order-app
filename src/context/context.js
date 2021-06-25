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
    
    const loginUser = async({ emailAddress, password})=>{
        const response = await axios.post(`${rootUrl}/user/login`, { emailAddress, password })
        console.log(response)
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

   const addCart = ()=>{
       axios.post(`${rootUrl}/cart/user`)
       .then(response =>response.data)
       .catch(err =>{
           console.log(err)
       })
   }

    return <ColdstoneContext.Provider value = {{loginUser,signupUser, googleUser, facebookUser, items, addCart}}>{children}</ColdstoneContext.Provider>
}
export {ColdstoneProvider, ColdstoneContext}