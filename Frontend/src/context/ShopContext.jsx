import { createContext, useState } from "react";
import { products } from "../assets/frontendAssets/assets";
export const ShopContext = createContext()

const ShopContextProvider =(props)=>{
 let currency = "$";
 let delevery_fee = 10;
const [search, setsearch] = useState('')
const [show, setshow] = useState(false)

    const value = {
    products,currency,delevery_fee,search,setsearch,show,setshow
    }
  

    return <ShopContext.Provider value={value}>
         {props.children}
    </ShopContext.Provider>
}

export default ShopContextProvider;