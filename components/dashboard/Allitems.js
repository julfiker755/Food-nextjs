"use client"
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const Allitems = () => {
    const [shopdata,setshopdata]=useState([])
    useEffect(()=>{
        (async()=>{
            const {data}=await axios.get(`http://localhost:3000/api/shop`)
            setshopdata(data?.data)
            console.log(data)

        })()
    },[])
    return (
       <>
         <div className="container p-2 mx-auto sm:p-4">
    <div className="overflow-x-auto">
        <table className="min-w-full text-xs text-[black]">
            <thead>
                <tr className="border-b border-t text-center border-opacity-20">
                    <th className="p-3">Image</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Discripation</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Action</th>
                </tr>
            </thead>
            <tbody>
                {shopdata?.map(d=> <tr key={d._id} className="border-b text-center border-opacity-20 ">
                    <td className="p-3">
                        <Image src={`/${d?.Image}`} width={50} height={40} alt="image"></Image>
                    </td>
                    <td className="p-3">
                        <p>{d.Name}</p>
                    </td>
                    <td className="p-3">
                        <p>{d.discripation}</p>
                    </td>
                    <td className="p-3">
                        <p>{d.price}</p>
                    </td>
                    <td className="p-3">
                       <button className="bg-[#2d95d1] py-1 px-2 rounded-md text-white">Edit</button>
                       <button className="bg-[#33c4ae]  py-1 px-2 rounded-md text-white ml-3">Delete</button>
                    </td>
                </tr>)}

            </tbody>
        </table>
    </div>
</div>

       </>
       
    );
};

export default Allitems;