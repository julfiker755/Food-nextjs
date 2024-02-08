"use client"
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Progressber = ({children}) => {
    return (
        <>
        {children}
        <ProgressBar
        height="3px"
        color="#fd4747"
        options={{ showSpinner:false }}
        shallowRouting
        >
        </ProgressBar>
        </>
    );
};

export default Progressber;