"use client"

import axios from "axios";
import { useState } from "react";

const Additems = () => {
    const [nameerror,setnameerror]=useState('')
    const [priceerror,setpriceerror]=useState('')
    const [texterror,settexterror]=useState('')
    const [imageerror,setimageerror]=useState('')
    const [product,setproduct]=useState({   
         Name:"",
         Image:"",
         discripation:"",
         price:"",
    })
    // handle input value
    const handchange=(e)=>{
        const name=e.target.name
        let value=e.target.value
        if(name === "Image"){
            const imageFile = e.target.files[0]
            value = imageFile ? imageFile.name : '';
        }

        setproduct({
            ...product,
            [name]:value
        })
      }
    // handlefrom
    const handlefrom=async()=>{
        // if(product?.Name === ""){
        //    return setnameerror('Name is Emapty')
        // }else if(product?.price === ""){
        //     return setpriceerror('Price is Emapty')
        // }else if(product?.discripation === ""){
        //     return settexterror('Discripation is Emapty')
        // }else if(product?.Image === ""){
        //     return setimageerror('Image is Emapty')
        // }
        // // empth error start
        // setnameerror('')
        // setpriceerror('')
        // settexterror('')
        // setimageerror('')
       // empth error ends

        // post data for my website
        const postproduct={...product,id:Math.floor(Math.random()*666666)}
        // const {data}=await axios.post('http://localhost:3000/api/shop',postproduct)
        console.log(postproduct)
    }
    
//   hanldeform data
    const hanldesubmit=async(e)=>{
      e.preventDefault()
    const imageFile = e.target.Image.files[0]
    const formData = new FormData()
    formData.append('Image', imageFile)
    // console.log(formData)
     const {data}=await axios.post('http://localhost:3000/api/shop',formData)
     console.log(data)
     
    }
    return (
        <div className="py-10">
        <div className="space-y-5">
        <div>
            <h1 className="text-xl">Name</h1>
            <h1><input onChange={handchange} value={product?.Name} name="Name" className="border focus:outline-none px-2 py-1 w-full" type="text" required={true}/></h1>
            {nameerror &&  <h1 className="text-xs text-[red] py-1">{nameerror}</h1>}
        </div>
        <div>
            <h1 className="text-xl">Price</h1>
            <h1><input onChange={handchange} value={product?.price} name="price" className="border focus:outline-none px-2 py-1 w-full" type="number" /></h1>
            {priceerror &&  <h1 className="text-xs text-[red] py-1">{priceerror}</h1>}
        </div>
        <div>
            <h1 className="text-xl">Discripation</h1>
            <h1><textarea onChange={handchange} value={product?.discripation} name="discripation" className="border focus:outline-none px-2 py-1 w-full" type="text" /></h1>
            {texterror &&  <h1 className="text-xs text-[red] py-1">{texterror}</h1>}
        </div>
        {/* handl eform--- */}
        <form onSubmit={hanldesubmit}>
        <div>
            <h1 className="text-xl">Image</h1>
            <div className="relative mt-2">

             <label  className="bg-[#38c2e1a6] cursor-pointer text-white rounded-md p-2 max-w-xs">
                <input   name="Image"  onChange={handchange} hidden  type="file"/>
                {product.Image ? product.Image :'Upload Image' }
             </label>
            </div>
            {imageerror &&  <h1 className="text-xs text-[red] py-1">{imageerror}</h1>}
        </div>
        <button  className="bg-[#2ba7cd] text-white py-2 px-2 w-full rounded-md">Add Product</button>
        </form>
        <button onClick={()=>handlefrom()} className="bg-[#2ba7cd] text-white py-2 px-2 w-full rounded-md">Add Product</button>

         
        </div>
    </div>
    );
};

export default Additems;