"use client"
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import toast from "react-hot-toast";

const Pizzacard = ({d}) => {
  const {id,Name,Image:image,discripation,price}=d
  const session=useSession()
 
  // handle order
  const hanldecart=async(orderid)=>{
    const postorder={
      orderid:orderid,
      email:session?.data?.user?.email,
      quantity:1,
      minprice:price,
      orderitems:{
        Name,
        image,
        discripation,
        price
      }
    }
     const {data}=await axios.post('/api/cart',postorder)
     if(data.status === "success"){
      toast.success('Order Successfully')
     }else if(data.status === "exsis"){
      toast.error(data.data)
     }
  }

    return (
        <div className="border text-center p-4 rounded-md">
          <Image alt="image" className="m-auto" src={`/${image}`} width={200} height={200}></Image>
          <h1 className="font-semibold text-xl">{Name}</h1>
          <p className="py-3">{discripation}</p>
          <button onClick={()=>hanldecart(id)} className="bg-custom/color rounded-full px-4 text-white py-1">Add to cart ${price}</button>
        </div>
    );
};

export default Pizzacard;