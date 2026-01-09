import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router";
import Loader from "../Loader/Loader";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";


export default function ProductsDetails() {
  const { addToCart } = useContext(CartContext);
  const {id} = useParams();
  console.log("id", id);
  function handleAddToCart(){
    addToCart(id);
    console.log("Added to cart");
  }
function getProductDetails(){
  return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
}

const { data, error, isLoading } = useQuery({
  queryKey: ['ProductDetails' , id],
  queryFn: getProductDetails ,
})
const myProductDetials = data?.data.data;
console.log("details" ,myProductDetials);
if (isLoading) {
  return <Loader/>;
}
if (error) {
  return <h2 className=" text-center mt-40 bg-green-500 p-5"> Something went wrong </h2>;
}
  return (
     <div className="container mx-auto mt-20 grid sm:grid-cols-4  ">
        <div className="col-span-1 m-10  w-3/4">
        <img className=" w-full rounded-2xl" src={myProductDetials.imageCover} alt={myProductDetials.title} />
        </div>
        <div className="col-span-3 mt-15 p-5  ">
        <h2 className=" font-bold p-2">{myProductDetials.title}</h2>
        <p className="p-2">{myProductDetials.description}</p>
        <h3 className="p-2" >Brand : {myProductDetials.brand.name}</h3>
        <div className="flex">
        <h4 className="p-2">Price: <span className="underline font-bold p-1"> {myProductDetials.price}</span> LE </h4>
        {/* <h4 className="p-2"> <span className="underline font-bold p-1"> {myProductDetials.priceAfterDiscount}</span> LE</h4> */}
        </div>
        <button onClick={handleAddToCart} className=" w-full bg-[#0DAE0D] text-white font-bold rounded-2xl py-2 my-5 cursor-pointer capitalize">add to cart</button>
        </div>

    </div>
  )
}
