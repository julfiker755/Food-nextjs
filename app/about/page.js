import About from '@/components/Homepage/About';
import Titlehooks from '@/components/Homepage/Titlehooks';
import React from 'react';

const page = () => {
    return (
        <div className='mt-[10%]'>
         <Titlehooks title="OUR STORY" subtitle="About Us"></Titlehooks>
         <About></About>
    </div>
    );
};

export default page;