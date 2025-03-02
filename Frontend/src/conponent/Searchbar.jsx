import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontendAssets/assets'
import { useLocation } from 'react-router-dom'



const Searchbar = () => {
   const [visible, setvisible] = useState(false)
    const {search,setsearch,show,setshow} = useContext(ShopContext)


    const location = useLocation()

    useEffect(()=>{
        if(location.pathname.includes("collection") ){
            setvisible(true)
        }else{
            setvisible(false)
        }
    },[location])


  return show && visible? (
    <div className='border-t border-b bg-gray-50 text-center' >
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-22 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        

<input type="text" placeholder='search' className='flex-1 outline-none bg-inherit text-sm' value={search} onChange={(e)=>setsearch(e.target.value)} />
<img src={assets.search_icon} className='w-4' alt="" />
      </div>
      <img onClick={()=>setshow(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
  ) :null
}

export default Searchbar
