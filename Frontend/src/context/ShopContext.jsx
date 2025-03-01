import { createContext } from "react";
import { products } from "../assets/frontendAssets/assets";
export const ShopContext = createContext()

const ShopContextProvider =(props)=>{
 let currency = "$";
 let delevery_fee = 10;


    const value = {
    products,currency,delevery_fee
    }
  

    return <ShopContext.Provider value={value}>
         {props.children}
    </ShopContext.Provider>
}

export default ShopContextProvider;