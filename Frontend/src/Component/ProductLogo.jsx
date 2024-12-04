import React from 'react'
import { storeLogo } from '../assets';
import { useNavigate } from 'react-router';

function ProductLogo() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('/')}
      className='flex dark:text-gray-200  items-center'>
      <span className=' text-xl font-bold'>Product Store</span>
      <img src={storeLogo} alt="storelogo" className=' w-[40px] xs:w-[60px]' />
    </div>
  )
}

export default ProductLogo;


