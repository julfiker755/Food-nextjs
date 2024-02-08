"use client"
import { Blocks } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className='bg-[#f6f5f547]  w-screen fixed top-0 left-0  h-screen'>
        <div className='flex justify-center items-center h-full'>
        <Blocks
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
            />
    </div>
    </div>
    );
};

export default Loader;