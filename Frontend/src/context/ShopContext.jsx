import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontendAssets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext()

const ShopContextProvider =(props)=>{
 let currency = "$";
 let delevery_fee = 10;
const [search, setsearch] = useState('')
const [show, setshow] = useState(false)
const [cartItem, setcartItem] = useState({ })

const addToCart = (itemId, size) => {
    if(!size){
        toast.error("select product size")
        return;
    }
    let cartData = structuredClone(cartItem);
    if (cartData[itemId]) {
        if (cartData[itemId][size]) {
            cartData[itemId][size] += 1;
        } else {
            cartData[itemId][size] = 1;
        }
    } else {
        cartData[itemId] = {};
        cartData[itemId][size] = 1;
    }
    setcartItem(cartData);
};

const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItem) {
        for (const size in cartItem[itemId]) {
            totalCount += cartItem[itemId][size];
        }
    }
    return totalCount;
};


useEffect(()=>{
console.log(cartItem)
},[cartItem])

    const value = {
    products,currency,delevery_fee,search,setsearch,show,setshow,cartItem,addToCart,getCartCount
    }
  

    return <ShopContext.Provider value={value}>
         {props.children}
    </ShopContext.Provider>
}

export default ShopContextProvider;