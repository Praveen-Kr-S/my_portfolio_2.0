import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
    const[toggleMenu, setToggleMenu] = useState(false)
  return (
    <header className='flex justify-between px-5 py-2.5 md:py-4 w-full bg-primary fixed top-0 z-10'>

        <a className='font-bold text-white md:text-2xl hover:text-black' href="#">S.PRAVEEN KUMAR</a>
        {/* above medium device nav bar */}
        <nav className='hidden md:block'>
            <ul className='flex text-white'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#resume'>Resume</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </nav>

        {/* Below Medium Devices Nav Bar */}
        {toggleMenu && <nav className='block md:hidden' >
            <ul onClick={() => setToggleMenu(!toggleMenu)} className='flex flex-col text-white mobile-nav'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#resume'>Resume</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='h-7 text-white hover:text-black'/></button>
    </header>
  )
}

export default Header