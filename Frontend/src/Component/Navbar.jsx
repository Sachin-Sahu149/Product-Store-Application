import React from 'react'
import NavbarTag from './NavbarTag'
import ProductLogo from './ProductLogo'


function Navbar(){
  return (
    <div className='w-full bg-gray-100 dark:bg-[#144272] px-1 vs:px-2  xs:px-8 flex justify-between h-[60px]'>
        <ProductLogo/>
        <NavbarTag/>
    </div>
  )
}

export default Navbar