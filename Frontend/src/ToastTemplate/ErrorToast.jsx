import React, { useState, useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { MdAddTask } from "react-icons/md";
import { MdOutlineError } from "react-icons/md";

function ErrorToast({ bg, textColor, textSize, info, isVisible, setisVisible }) {


    useEffect(() => {
        const timer = setTimeout(() => {
            setisVisible(false); // Close the toast after 5 seconds
        }, 2000);

        // Cleanup the timer if the component unmounts or the user closes the toast
        return () => clearTimeout(timer);
    }, [isVisible]);

    return (
        <div
            className={`z-100 w-[330px] min-h-12 flex justify-between items-center px-4 py-2  text-gray-500 ${bg} rounded-lg ${isVisible ? 'block' : 'hidden'}`}
        >
            <div className='p-2 rounded bg-red-800 text-gray-300  '>
                <MdOutlineError size={20} />
            </div>
            <p className={`max-w-52  p-1 ${textColor} ${textSize} `}>{info.error}</p>

            <button
                type='button'
                onClick={() => setisVisible(false)}
                className='block rounded text-gray-400 font-semibold  p-2 hover:bg-gray-500 hover:text-gray-300 focus:ring-2 focus:ring-gray-300'>
                <IoClose size={20} />
            </button>
        </div>

    )
}

export default ErrorToast;