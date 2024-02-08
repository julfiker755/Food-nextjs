"use client"
import axios from "axios";
import Container from "../shared/Container";
import toast from "react-hot-toast";
import Link from "next/link";

const Register = () => {
    const handlesubmit=async(e)=>{
        e.preventDefault()
       const lodingid= toast.loading('Waiting...')
        const email=e.target.email.value
        const password=e.target.password.value
        const user={email,password}
       const {data} =await axios.post('/api/register',user)
       if(data?.status === "success"){
        toast.success('Register Successfull',{id:lodingid})
        //  reset from
        e.target.reset()
       }else if(data?.status === "fail"){
        toast.error('Register Fail.Try agin',{id:lodingid})
       }
      
    }
    return (
        <Container>
            <div className='flex justify-center items-center h-[calc(100vh-50px)]'>
            <div className="flex border p-4 rounded-md flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
             <h3 className='text-xl font-semibold text-blue-400 pt-2'>Register</h3>
             
             {/* Inputs */}
              <form onSubmit={handlesubmit}>
              <div className='flex flex-col items-center justify-center'>
              <input type='email' name="email" className='rounded-md px-2 py-1 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Email'></input>
              <input name="password" type="text" className='rounded-md px-2 py-1  md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Password'></input>
              <button className='rounded-md m-2  w-full bg-blue-400  px-4 py-2 shadow-md'>
                Register
              </button>
             </div>
              </form>
             <p className='text-blue-400 mt-4 text-sm'>Alreay have a account ? <Link className="text-[#f56541]" href={"/login"}>Log In</Link></p>
             
          </div>
            </div>
        </Container>
    );
};

export default Register;