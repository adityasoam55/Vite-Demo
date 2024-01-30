import React from 'react';
import { LiaSpinnerSolid } from "react-icons/lia";


function Loading(){
    return (
        <div className='flex justify-center items-center h-screen'>
        <div className='text-5xl text-white animate-spin '><LiaSpinnerSolid /></div>
        </div>
    );
}

export default Loading;