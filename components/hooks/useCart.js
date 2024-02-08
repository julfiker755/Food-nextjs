"use client"
import axios from "axios";
import { useEffect, useState } from "react";

const useCart = (updatecall) => {
    const [cart,setcart]=useState([])
    useEffect(()=>{
        (async()=>{
            const {data}=await axios.get('/api/cart')
            setcart(data)
        })()
    },[updatecall])
    return {cart}
};

export default useCart;