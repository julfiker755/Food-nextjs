"use client"
import Container from "../shared/Container";
import toast from "react-hot-toast";
import Link from "next/link";
import { signIn} from 'next-auth/react';


const Login = () => {
    const handlesubmit=async(e)=>{
        e.preventDefault()
    //    const lodingid= toast.loading('Waiting...')
        const email=e.target.email.value
        const password=e.target.password.value

        await signIn('credentials',{email,password,callbackUrl:'/'})
      
    }
    return (
        <Container>
            <div className='flex justify-center items-center h-[calc(100vh-50px)]'>
            <div className="flex border p-4 rounded-md flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
             <h3 className='text-xl font-semibold text-blue-400 pt-2'>Login</h3>
             
             {/* Inputs */}
              <form onSubmit={handlesubmit}>
              <div className='flex flex-col items-center justify-center'>
              <input type='email' name="email" className='rounded-md px-2 py-1 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Email'></input>
              <input name="password" type="text" className='rounded-md px-2 py-1  md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Password'></input>
              <button className='rounded-md m-2  w-full bg-blue-400  px-4 py-2 shadow-md'>
                Login
              </button>
             </div>
              </form>
              <h1 className='py-2'>-----or-----</h1>
              <div onClick={()=>signIn('google',{callbackUrl:'/'})} className="bg-[#f03d4c]  w-[70%] cursor-pointer rounded-md text-center">
              <div className='flex justify-center py-1'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
  </svg>
              </div>
                </div>
             <p className='text-blue-400 mt-4 text-sm'>Don't have an account? <Link className="text-[#f56541]" href="/register">Register</Link></p>
             
          </div>
            </div>
        </Container>
    );
};

export default Login;