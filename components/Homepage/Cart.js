"use client"
import Image from "next/image";
import Container from "../shared/Container";
import { Trash2 } from 'lucide-react';
import useCart from "../hooks/useCart";
import axios from "axios";
import { Suspense, useState } from "react";
import toast from "react-hot-toast";
import Loader from "../Loading/Loader";

const Cart = () => {
    const [updatecall,setupdatecall]=useState('')
    const {cart}=useCart(updatecall)
    // total payments
    const totaltaka=cart?.data?.reduce((pv,cv)=>parseInt(cv?.orderitems?.price)+pv,0)
    const totalquantity=cart?.data?.reduce((pv,cv)=>parseInt(cv?.quantity)+pv,0)
    const discount=totaltaka*10/100
    const totalpricecon=(totaltaka+100)-discount

    const handleincremnt=async(inid)=>{
       const  {data}=await axios.put('/api/cart',{increid:inid,type:'increment'})
       if(data.status === "success"){
        setupdatecall(Math.floor(Math.random()*666666))
       }
    }
    const handledecrement=async(deid)=>{
        const  {data}=await axios.put('/api/cart',{increid:deid,type:'decrement'})
        if(data.status === "success"){
            setupdatecall(Math.floor(Math.random()*666666))
           }
    }
//   handledelete
    const handledelete=async(deleteid)=>{
      const {data}=await axios.delete(`/api/cart/${deleteid}`)
      if(data?.status === "success" && data.data.deletedCount > 0){
        toast.success('Delete successfull')
        setupdatecall(Math.floor(Math.random()*666666))
      }
    }
    // confiram order
    const handlefrom=(e)=>{
        e.preventDefault()
      
    }

    return (
        <Container>
            <div className="grid grid-cols-1 py-10 gap-6 md:grid-cols-2 lg:grid-cols-3">
           <div className="col-span-1 lg:col-span-2 space-y-4">
           <Suspense fallback={<Loader></Loader>}>
              {!!cart?.data?.length ? cart?.data?.map(d=> <div key={d._id}>
             <div className="border flex justify-between items-center  gap-3  p-4 rounded-md">
               <Image className="hidden lg:block" alt="image"  src={`/${d?.orderitems?.image}`} width={100} height={100}></Image>
               <div>
               <h1 className="font-semibold text-xl">{d?.orderitems?.Name}</h1>
               <p>{d?.orderitems?.discripation}</p>
               <p>Price:{d?.orderitems?.price}</p>
                <h1 className="">
                     <span  onClick={()=>handleincremnt(d._id)} className="border  py-0 px-2 text-[25px] cursor-pointer">+</span>
                      <span className="border py-0 px-2 text-[25px]">{d?.quantity > 0 ?  d?.quantity : 0}</span>
                    {parseInt(d?.orderitems?.price) === parseInt(d.minprice) ?
                    <span  disabled className="border  py-0 px-2 text-[25px] text-[#c2b7b7] cursor-pointer">-</span> :
                     <span onClick={()=>handledecrement(d._id)} className="border py-0 px-2 text-[25px] cursor-pointer">-</span>
                      }
                    </h1>
               </div>
              <button  onClick={()=>handledelete(d._id)} className="bg-custom/color w-fit text-white py-2 px-1 rounded-md h-fit"><Trash2/></button>
        </div>
             </div>): <div className="text-[#b5a2a2]">No order items please order</div>}
            </Suspense>
           
           </div>
             {/* right */}
            <div>
                <h1 className="text-3xl text-center font-bold">Orders Items</h1>
                <form onSubmit={handlefrom}>
                <div>
                    <h1 className="text-xl">Name</h1>
                    <h1><input className="border focus:outline-none px-2 py-1 w-full" type="text"/></h1>
                </div>
                <div>
                    <h1 className="text-xl">Phone Number</h1>
                    <h1><input className="border focus:outline-none px-2 py-1 w-full" type="text"/></h1>
                </div>
                <div>
                    <h1 className="text-xl">Address</h1>
                    <h1><textarea className="border focus:outline-none px-2 py-1 w-full" type="text"/></h1>
                </div>
                 <div className="py-5 space-y-2">
                 <h1 className="flex justify-between text-xl"><span>Total</span><span>${totaltaka}</span></h1>
                 <h1 className="flex justify-between text-xl"><span>Items Total</span><span>${totalquantity}</span></h1>
                 <h1 className="flex justify-between text-xl"><span>Delivery Fee</span><span>$100</span></h1>
                 <h1 className="flex justify-between text-xl"><span> Discount</span><span>$10</span></h1>
                 <h1 className="flex justify-between text-xl"><span>Total Payment</span><span>${totalpricecon}</span></h1>
                 </div>
                 <button className="bg-[#2ba7cd] text-white py-2 px-2 w-full rounded-md">Confiram Order</button>
                </form>
            </div>
          </div>
        </Container>
    );
};

export default Cart;