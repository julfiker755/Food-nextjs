"use client"
import Image from 'next/image'
import Container from '../shared/Container';
import { ArrowRightCircle } from 'lucide-react';

const Hero = () => {
    return (
       <Container>
         <div className='grid grid-cols-1 lg:grid-cols-2 py-5'>
            <div className='text-center lg:text-left self-center'>
            <h1 className="text-xl lg:text-4xl py-2 font-bold">
          Everything<br className='hidden lg:block' />
          is better<br  className='hidden lg:block'/>
          with a&nbsp;
          <span className="text-[#f13a01]">
            Pizza
          </span>
        </h1>
         <p className='py-2'> Pizza is the missing piece that makes every<br  className='hidden lg:block'/>
          day complete, a simple yet delicious joy in life</p>
         <div className='flex gap-3 justify-center lg:justify-start m-auto'>
            <button className='flex gap-1 items-center bg-[#f13a01] text-white py-1 text-sm px-2 rounded-full uppercase'>Order now <ArrowRightCircle size={16}/></button>
            <button className='flex gap-1 items-center bg-[#3085ba] text-white py-1 text-sm px-2 rounded-full '>Learn more <ArrowRightCircle size={16}/></button>
         </div>
            </div>
           <div className='m-auto mt-3'> <Image width={400} height={400} alt='image' src='/pizza.png'></Image></div>
        </div>
       </Container>
    );
};

export default Hero;