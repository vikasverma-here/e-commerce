import React from 'react'
import {assets} from '../assets/adminAssets/assets'
import { Link, NavLink } from 'react-router-dom'

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
       <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4' >
         <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded ' >
            <p className='cursor-pointer hover:text-black' >My Profile</p>
            <p className='cursor-pointer hover:text-black' >Logout</p>
            <p className='cursor-pointer hover:text-black' >Orders</p>
         </div>
       </div>
       </div>
   <Link to='/cart' >
   <img src={frontendAssets.cart_icon} alt='cart' className='w-5 cursor-pointer ' />
   <p className='absolute top-10  bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center' >4</p>
   </Link>
      </div>
    </div>
  )
}

export default Navbar
