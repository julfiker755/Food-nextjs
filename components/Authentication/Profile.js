"use client"
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Loader from "../Loading/Loader";
import Container from "../shared/Container";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import Link from "next/link";


const Profile = () => {
    const session=useSession()
    const {status}=session
    const [name,setname]=useState('')
    const [email,setnemail]=useState('')
    const [phone,setphone]=useState('')
    const [address,setaddress]=useState('')
    const [isadmin,setisadmin]=useState(false)
    const [image,setimage]=useState(null)

    useEffect(()=>{
        if(status === "authenticated"){
         setname(session?.data?.user?.name)
        setimage(session?.data?.user?.image)
        setnemail(session?.data?.user?.email)
        fetch('/api/profile')
        .then(res=>res.json())
        .then(data=>{
            setphone(data.data.phone)
            setaddress(data.data.address)
            setisadmin(data.data.isadmin)
        })
        }
    },[session,status])
     

    if(status === 'loading'){
        return <Loader></Loader>
    }



    if(status === 'unauthenticated'){
        return redirect('/login')
    }
   
 
    // handlesubmit
    const handlesubmit=async(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const phone=e.target.phone.value
        const address=e.target.address.value
        const isadmin=e.target.isadmin.checked
        
 
        const {data}=await axios.put('/api/profile',{name,phone,address,isadmin})
        if(data){
            toast.success('Update successfull')
        }
    }
   
     

    return (
        <Container>
            <div className="py-10 border rounded-md">
            <div className="max-w-md m-auto flex-row lg:flex gap-2 py-5">
               <div>
               <img  src={image} width={160} height={160} alt="profile_image" />
               <button className="bg-[#e33d64] text-white  px-1 w-full">Upoad</button>
               </div>
               <form onSubmit={handlesubmit}>
               <div className="flex-row space-y-2">
                 <div>
                <h1 className="my-1 text-[#595757]">Name</h1>
                 <input  type="text" onChange={(e)=>setname(e.target.value)} name="name" defaultChecked defaultValue={name}  className="focus:outline-none border w-full py-1 rounded-md px-2 text-sm" placeholder="Your Name" />
                 </div>
                 <div>
                <h1>Email Address</h1>
                <input type="text" disabled className="focus:outline-none  text-sm w-full border py-1 rounded-md px-2" value={email} />
                 </div>
                 <div>
                <h1>Phone Number</h1>
                <input type="text" onChange={(e)=>setphone(e.target.value)} name="phone"  className="focus:outline-none  text-sm w-full border py-1 rounded-md px-2" value={phone} />
                 </div>
                 <div>
                <h1>Addess</h1>
                <input type="text" onChange={(e)=>setaddress(e.target.value)} name="address" className="focus:outline-none  text-sm w-full border py-1 rounded-md px-2" value={address} />
                 </div>
                 <div className="flex gap-1">
                <input type="checkbox" onChange={(e)=>setisadmin(e.target.checked)} checked={isadmin}  name="isadmin" className="" />
                <h1>Admin</h1>
                 </div>
                

                 <h1><button className="bg-[#be2642bf] w-full text-white py-1 rounded-md">Save</button></h1>
             </div>
            </form>
             </div> 
        </div>
        </Container>
    );
};

export default Profile;