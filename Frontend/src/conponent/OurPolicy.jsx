import React from 'react'
import { assets } from '../assets/frontendAssets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-ccenter py-20  text-xs sm:text-sm md:text-base text-gray-700' >
      
<div className='flex flex-col items-center'>
    <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5 ' />
    <p className='font-semibold' >& days return policy</p>
    <p className='text-gray-400'>we provide free 7 days free return  policy</p>
</div>
<div className='flex flex-col items-center' >
    <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5 ' />
    <p className='font-semibold' >Easy Exchange Policy</p>
    <p className='text-gray-400'>we offer free exchange policy</p>
</div>
<div className='flex flex-col items-center' >
    <img src={assets.support_img} alt="" className='w-12 m-auto mb-5 ' />
    <p className='font-semibold' >Best customer support</p>
    <p className='text-gray-400'>we provide 24/7 customer support</p>
</div>

    </div>
  )
}

export default OurPolicy
