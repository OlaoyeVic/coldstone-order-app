import React from 'react';
import { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { ColdstoneContext } from '../../context/context';

function OrderedItems(){
    const {items, cart} = React.useContext(ColdstoneContext)
    console.log(cart)
    
    return(
        <div>
            <h1>Cart</h1>
        </div>
    )
}
export default OrderedItems