import React,{useState} from 'react'
import { IoClose } from 'react-icons/io5'
import { GoAlertFill } from "react-icons/go";

function Toast({bg, textColor ,textSize}) {

    const[isOpen,setisOpen] = useState(true);

    return (
        <div

            className={`w-[330px] min-h-12 flex justify-between items-center px-4 py-2  text-gray-500 ${bg} rounded-lg 
                ${isOpen?'block':'hidden'}
            `}
        >
            <div className='p-1 rounded text-red-500 '><GoAlertFill size={30}/></div>
            <p className={`max-w-52  p-1 ${textColor} ${textSize} `}>messagehgh h h h   hh hh  </p>

            <button 
            type='button'
            onClick={()=>setisOpen(false)}
            className='block rounded text-gray-400 font-semibold  p-2.5 hover:bg-gray-500 hover:text-gray-300'>
                <IoClose size={20} />
            </button>
        </div>
    )
}

export default Toast