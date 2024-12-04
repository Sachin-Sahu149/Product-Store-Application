import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";

function Modal() {
  const [isAppear, setIsAppear] = useState(true);

  const displaychange = () => {
    setIsAppear((prev) => !prev);
  }
  const change = ()=>{
    console.log("change ");
    console.log("change MMMMMM ");
  }
  return (
      <div onClick={()=>setIsAppear(false)} className='w-screen h-screen border-box fixed top-0 left-0 flex justify-center items-center  z-60'>
        <div  onClick={(e) => e.stopPropagation()} className={` py-2 px-3 w-full rounded-xl xs:w-[400px]  bg-gray-200 ${isAppear ? 'block' : 'hidden'} `}>
          <div className='flex justify-between font-normal  w-full text-lg'>
            <h2 className='font-semibold'>Edit Information</h2>
            <button className='z-20 text-gray font-semibold rounded-full p-2 hover:bg-gray-300 '>
              <IoClose size={20} onClick={displaychange} />
            </button>
          </div>
          <form>
            <div className='flex flex-col'>
              <label htmlFor="name" className='leading-10 font-semibold'>Title</label>
              <input required className='h-10 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-gray-400 p-3 text-gray-200 ' type="text" name="name" id="name" placeholder={`pricePlaceholder`} />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="image" className='leading-10 font-semibold' >Image URL</label>
              <input required className='h-10 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-gray-400 p-3 text-gray-200' type="text" name="image" id="image" placeholder={`pricePlaceholder`} />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="price" className='leading-10 font-semibold'>Price</label>
              <input required className='h-10 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-gray-400 p-3 text-gray-200' type="number" name="price" id="price" placeholder={`pricePlaceholder`} />
            </div>
            <div className=' xs:flex-row justify-between my-3'>
              <button className='w-full text-white font-semibold px-5 py-2  rounded-lg hover:bg-blue-500 bg-blue-600'>Submit</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Modal;

