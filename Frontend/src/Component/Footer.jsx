import React from 'react'
import { facebook, footerLogo, instagram, linkedIn, storeLogo, whatsApp, youtube } from '../assets'

function Footer() {
  return (
    <div className='z-0 w-full flex flex-col sm:flex-row justify-between items-center xs:px-2 sm:px-12 bg-slate-200'>
        <div className='flex items-center'>
            <img src={footerLogo} alt="store logo" className='h-12 rounded-full' />
            <span className='font-bold italic'>Product Store</span>
        </div>
        <p className='font-normal'>&copy; Copyright 2021. All Rights Reserved.</p>
        <div className='flex'>
            <img src={facebook} alt="facebook"  className=' cursor-pointer rounded-full p-2 h-10 hover:opacity-70'/>
            <img src={instagram} alt="facebook"  className=' cursor-pointer rounded-full p-2 h-10 hover:opacity-70'/>
            <img src={youtube} alt="facebook"  className=' cursor-pointer  p-2 h-10 hover:opacity-70'/>
            <img src={whatsApp} alt="facebook"  className=' cursor-pointer rounded-full p-2 h-10 hover:opacity-70'/>
            <img src={linkedIn} alt="facebook"  className=' cursor-pointer rounded-full p-2 h-10 hover:opacity-70'/>
        </div>
    </div>
  )
}

export default Footer;