import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"
import  { AuthContextObj } from "./AuthContext"
import toast from "react-hot-toast"

export const CartContext = createContext()

export default function CartContextProvider({ children }) {
  const{userToken}=  useContext(AuthContextObj)
   const [Products, setProducts] = useState(null)
   const [cartId, setCartId] = useState(null)
   const [numOfCartItems, setNumOfCartItems] = useState(0)
  const [totalCartPrice, setTotalCartPrice] = useState(0) 
  async function updateCartProductQuantity(id,newQuantity){
    await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
 
  {
    "count": newQuantity
    },
    {
        headers:{
            token:userToken 
}}
    ).then((res)=>{
         setProducts(res.data.data.products);
        setTotalCartPrice(res.data.data.totalCartPrice);
        setNumOfCartItems(res.data.numOfCartItems);
    }).catch((error)=>{
        console.log("update quantity error", error);
    })
  }
 async function removeSpecifciCartItem(id){
   await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        {
            headers:{
                token:userToken
            }   
        }
    ).then((response)=>{
        setProducts(response.data.data.products);
        setCartId(response.data.cartId);
        setNumOfCartItems(response.data.numOfCartItems);
        setTotalCartPrice(response.data.data.totalCartPrice);
        toast.success("Item removed from cart successfully")

    } 
    ).catch((error)=>{
        console.log("specific item remove error", error);
    })
  }
  function deleteUserCart(){
    axios.delete("https://ecommerce.routemisr.com/api/v1/cart",
        {
            headers:{
                token:userToken
            }
        }
    ).then((res)=>{
        setProducts(null);
        setCartId(null);
        setNumOfCartItems(0);
        setTotalCartPrice(0);
        console.log("resdel", res);
        toast.success("Cart cleared successfully")
        
    }).catch((error)=>{
        console.log("cart delete error", error);
    })
  }

  function getUserData(){
    axios.get("https://ecommerce.routemisr.com/api/v1/cart",
        {
           headers:{
            token:userToken
           }    
        }
    ).then((response)=>{
        setProducts(response.data.data.products);
        setCartId(response.data.cartId);
        setNumOfCartItems(response.data.numOfCartItems);
        setTotalCartPrice(response.data.data.totalCartPrice);
    })
    .catch(error=>{
        console.log("carterror", error);
    })
  }
useEffect(()=>{
    if(userToken){
        getUserData();
    }
},[userToken])

    async function addToCart(id){
    if(userToken){
        const res=await axios.post("https://ecommerce.routemisr.com/api/v1/cart",
            {
                productId:id,
            },
            {
                headers:{
                    token:localStorage.getItem("token")
                }
            }
        ).then((res)=> {
            console.log("res", res);
            // setProducts(res.data.data.products);
            // setCartId(res.data.cartId);
            // setNumOfCartItems(res.data.numOfCartItems);
            // setTotalCartPrice(res.data.data.totalCartPrice);
            getUserData();
            toast.success("Product added to cart successfully")
            
            return true
        })
        .catch((error)=> {
            console.log("error", error);
            return false
        })
        return res;
    }
    else{
        toast.error("You need to login first")
    }
    }
  return (
<CartContext.Provider value={
    {addToCart,
    Products,
    cartId,
    numOfCartItems,
    totalCartPrice,
    deleteUserCart,
    removeSpecifciCartItem,
    updateCartProductQuantity
    }}>
    {children}
</CartContext.Provider>
  )
}

