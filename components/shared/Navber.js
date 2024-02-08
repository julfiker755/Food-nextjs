"use client"
import Link from 'next/link'
import Container from './Container';
import { AlignJustify } from 'lucide-react';
import { useState } from 'react';
import {signOut, useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { usePathname } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';

 

const Navber = () => {
    const [toggle,setoggle]=useState(false)
    const session=useSession()
    const pathname=usePathname()

    return (
        <Container>
        <div className='flex justify-between items-center py-2'>
        <h1 className='text-2xl font-semibold text-[#fd4747]'><Link href="">SI PAZZA</Link></h1>
        <ul className='hidden lg:flex space-x-3'>
            <li><Link className={`${pathname.includes('/') ? 'text-[red]':''}`} href="/">Home</Link></li>
            <li><Link className={`${pathname.includes('/allitems') ? 'text-[red]':''}`} href={'/allitems'}>Dashboard</Link></li>
            <li><Link className={`${pathname.includes('/about') ? 'text-[red]':''}`} href={'/about'}>About</Link></li>
            <li><Link className={`${pathname.includes('/contact') ? 'text-[red]':''}`} href={'/contact'}>Contact</Link></li>
            {session?.data?.user &&  
             <>
             <li><Link  className={`${pathname.includes('/profile') ? 'text-[red]':''}`} href={'/profile'}>Profile</Link></li>
            <li><Link  href={'/cart'}> <ShoppingCart size={18}/></Link></li>
             </>
            }
            {session.status === 'authenticated' && <button onClick={()=>{
                toast.success('Log Out successfull')
                signOut()
            }} className='bg-custom/color px-3  rounded-md text-white'>Log Out</button>}
            
            {session.status !== 'authenticated' &&  <li className='bg-custom/color px-3  rounded-md text-white'><Link href="/login">Login</Link></li>}
        </ul>
        <h1 onClick={()=>setoggle(!toggle)} className='block lg:hidden cursor-pointer'>
            {toggle ? '':<AlignJustify></AlignJustify> }
            </h1>
            {/* mobile, tab */} 
            <div onClick={()=>setoggle(!toggle)} className={`${toggle ? 'fixed cursor-pointer bg-[#38373761] left-0 ease-[cubic-bezier(.17,.67,.83,.67)] transition-[1.2s] top-0 h-full w-full':'fixed left-[-100%] top-0 h-full duration-500  w-full'}`}>
                {/* local div */}
          <div onClick={(e)=>{e.stopPropagation()}}  className='bg-[#2dbcdc] cursor-default shadow-md w-[80%] h-full p-5'>
          <h1 className='text-2xl mb-2 font-semibold text-[#fd4747]'><Link href="">SI PAZZA</Link></h1>
        <ul className='flex-row  space-y-1 lg:hidden text-white'>
            <li><Link href="/"></Link>Home</li>
            <li><Link href={''}></Link>Menu</li>
            <li><Link href={''}></Link>About</li>
            <li><Link href={''}></Link>Contact</li>
            <li className='bg-[#5acce5] w-fit px-[10px] rounded-md'><Link href="/login"></Link>Login</li>
        </ul>
          </div>
            </div>
    </div>

    </Container>
    );
};

export default Navber;