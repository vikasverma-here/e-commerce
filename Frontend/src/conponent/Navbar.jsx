import React from 'react'
import {assets} from '../assets/adminAssets/assets'
import { NavLink } from 'react-router-dom'

import { assets as frontendAssets} from '../assets/frontendAssets/assets'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-5 font-medium' >
      <img src={assets.logo} alt='logo' className='w-20' />
      <ul className='hidden sm:flex gap-5 sm:text-sm md:text-base lg:text-lg' >
      <NavLink to='/' className='flex flex-col items-center gap-1   ' >
      <p>HOME</p>
      <hr className='w-2/4 border-none h-[2px] bg-gray-700  hidden ' />
      </NavLink>
      <NavLink to='/collection' className='flex flex-col items-center gap-1  ' >
      <p>COLLECTION</p>
      <hr className='w-2/4 border-none h-[2px] bg-gray-700 hidden ' />
      </NavLink>
      <NavLink to='/About' className='flex flex-col items-center gap-1  ' >
      <p>ABOUT</p>
      <hr className='w-2/4 border-none h-[2px] bg-gray-700 hidden ' />
      </NavLink>
      <NavLink to='/contact' className='flex flex-col items-center gap-1  ' >
      <p>CONTACT</p>
      <hr className='w-2/4 border-none h-[2px] bg-gray-700 hidden ' />
      </NavLink>
     
    
      </ul>
      <div className="flex items-center gap-6">
        <img src={frontendAssets.search_icon} alt="search" className='w-5 cursor-pointer ' />
       <div className="group relative">
        <img src={frontendAssets.profile_icon} alt="profile" className='w-5 cursor-pointer ' />
        <div className="absolute top-10 right-0 w-40 bg-white shadow-md rounded-md p-2 hidden group-hover:block">
            <p>Profile</p>
            <p>Logout</p>
        </div>
       </div>

      </div>
    </div>
  )
}

export default Navbar
