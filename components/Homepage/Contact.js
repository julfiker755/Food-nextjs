import React from 'react';
import Titlehooks from './Titlehooks';

const Contact = () => {
    return (
        <div>
            <Titlehooks title={"Don\'t hesitate"} subtitle={"Contact us"}></Titlehooks>
            <div className="mt-1 text-center">
          <a className="text-2xl  text-gray-500" href="tel:+01741703755">
          01741703755
          </a>
        </div>
        <h1 className='text-xs text-[#5e5e5e] py-3 text-center mt-5'> 2024 All rights reserved</h1>
        </div>
    );
};

export default Contact;