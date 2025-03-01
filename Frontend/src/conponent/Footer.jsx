import React from 'react'
import { assets } from '../assets/frontendAssets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 my-10 mt-40 text-sm'>

        <div><img src={assets.logo} className='mb-5 w-32' alt="" />
        <p  className='w-full md:w-2/3  text-gray-600 '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, consequuntur rem magnam eos tempora numquam explicabo labore ipsam alias aut quam?
        </p>
        
        </div>

<div>
    <p className='text-xl font-medium mb-5'>Company</p>
    <ul className='flex flex-col gap-1 text-gray-600'>
        <li>Home</li>
        <li>About Us</li>
        <li>Deleviry</li>
        <li>Privacy Policy</li>
    </ul>
</div>

<div >
  <p  className='text-xl font-medium  mb-5' >
    GET IN TOUCH 
  </p>
  <ul className='flex flex-col  gap-1 text-gray-600'>
    <li>+1-122-456-7887</li>
    <li>contact@foreveryou.com</li>
  </ul>
</div>

<div className='flex items-center justify-center'>
    <hr />
    <p className='py-5 text-sm text-center  '>Copyright 2025@ forever.com -All RIGHT Reserved.</p>
</div>

    </div>
    </div>
  )
}

export default Footer
