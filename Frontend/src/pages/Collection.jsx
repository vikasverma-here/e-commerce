import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontendAssets/assets'
import Title from '../conponent/Title'
import ProductItem from '../conponent/ProductItem'

const Collection = () => {
  const { products } = useContext(ShopContext)
  const [filters, setfilters] = useState(false)
  const [filterProducts, setfilterProducts] = useState([])
  const [category, setcategory] = useState([])
  const [subCategoryy, setsubCategoryy] = useState([])
  useEffect(()=>{
    setfilterProducts(products)
    console.log("filtered products",products)
  },[])

const toggleCategory = (e)=>{
  console.log(e.target.value)
  if(category.includes(e.target.value)){
    setcategory(prev=>prev.filter((item)=>item !== e.target.value))
  }else{
    setcategory(prev=>[...prev,e.target.value])
  }
}

const toggleSubCategory = (e)=>{
  console.log(e.target.value)
  if(subCategoryy.includes(e.target.value)){
   setsubCategoryy(prev=>prev.filter((item)=>item !== e.target.value))
  }else{
   setsubCategoryy(prev=>[...prev,e.target.value])
  }
}


useEffect(()=>{console.log(category,subCategoryy)},[category,subCategoryy])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t-2'>

      {/* {filter option } */}

      <div className='min-w-60'>
        <p onClick={() => setfilters(!filters)} className='my-2 text-xl  flex items-center cursor-pointer  gap-2'>Filters
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${filters ? "rotate-90" : ""}`}
          />
        </p>

        {/* {category  filters } */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${filters ? " " : "hidden"} sm:block`}>
          <p className='mb-3 text-sm  font-medium'>  CATEGORIES </p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex  gap-2'>
              <input type="checkbox" className='w-3' value={"Men"} onChange={toggleCategory} /> Men
            </p>
            <p className='flex  gap-2'>
              <input type="checkbox" className='w-3' value={"Women"}  onChange={toggleCategory}/> Women
            </p>
            <p className='flex  gap-2'>
              <input type="checkbox" className='w-3' value={"Kids"} onChange={toggleCategory} /> Kids
            </p>

          </div>
        </div>

        {/* {subCategoryy} */}

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${filters ? " " : "hidden"} sm:block`}>
          <p className='mb-3 text-sm  font-medium'>  TYPE </p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex  gap-2'>
              <input type="checkbox" className='w-3' value={"Topwear"}  onChange={toggleSubCategory} /> Topwear
            </p>
            <p className='flex  gap-2'>
              <input type="checkbox" className='w-3' value={"Bottomwear"} onChange={toggleSubCategory}  /> Bottomwear
            </p>
            <p className='flex  gap-2'>
              <input type="checkbox" className='w-3' value={"Winterwear"}   onChange={toggleSubCategory}/> Winterwear
            </p>

          </div>
        </div>

      </div>
      <div className='flex-1' >
        <div className='flex justify-between text-base sm:text-2xl  mb-4    ' >
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
        </div>
        {/* {product sort } */}

        <select className='border-2 border-gray-300 text-sm px-2 mb-2'>
          <option value="relavent">Sort by:Relavent</option>
          <option value="relavent">Sort by:Low to High</option>
          <option value="relavent">Sort by:High to Low</option>
        </select>

        {/* {map products} */}

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
    filterProducts.map((item,index)=>(
        <ProductItem key={index}  id={item._id} image={item.image} name={item.name} price={item.price} />
    ))
}
        </div>
      </div>



    </div>
  )
}

export default Collection
