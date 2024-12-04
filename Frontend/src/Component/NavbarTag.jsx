import React, { useEffect, useState } from 'react'
import { CgAddR } from "react-icons/cg";
import { darkMode, lightMode } from '../assets';
import { useNavigate } from 'react-router';

function NavbarTag() {

    const navigate = useNavigate();

    const [darkModeToggle,setdarkModeToggle] = useState(()=>{
        const savedTheme = localStorage.getItem("theme");
        console.log(savedTheme,"theme stored in localstorage");
        if(savedTheme){
            return savedTheme=='dark';
        }
        return false;
    });

    useEffect(()=>{
        console.log("theme color:",darkModeToggle);
        document.documentElement.className = darkModeToggle?'dark':'';
        localStorage.setItem('theme',darkModeToggle?'dark':'light');

    },[darkModeToggle])

    const handleThemechanges = () => {
        setdarkModeToggle(!darkModeToggle);
    }

    return (
        <div className='flex items-center'>

            <span onClick={()=>navigate('/add')} 
            className='px-4 py-2 mr-1 rounded bg-blue-500 dark:bg-blue-400 cursor-pointer text-gray-900'
            ><CgAddR size={20} /></span>

            <div className='px-4 py-2.5 rounded bg-blue-500 cursor-pointer' onClick={handleThemechanges}>
                <img src={darkModeToggle ? darkMode : lightMode} alt="background theme color" />
            </div>
        </div>
    )
}

export default NavbarTag