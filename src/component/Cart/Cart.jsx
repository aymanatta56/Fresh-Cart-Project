import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router"



export default function Cart() {
  const { totalCartPrice, Products,cartId, deleteUserCart,removeSpecifciCartItem,updateCartProductQuantity } = useContext(CartContext)
  console.log("ana",Products);
  console.log("idd",cartId);
  function handelRemoveItem(id){
    removeSpecifciCartItem(id);
  }
  
function handelUpdateQuantity(id,newQuantity)
{
  updateCartProductQuantity(id,newQuantity);
  console.log("updated");
  
}; 
  


  return (
   <div className="container mx-auto mt-30 mb-15 relative overflow-x-auto shadow-md sm:rounded-lg">
<div className="flex flex-col md:flex-row items-center justify-between"> 
<h2 className="ps-2 py-2 text-3xl font-bold">Total Cart Price : {totalCartPrice} EGP</h2>
<Link onClick={deleteUserCart} className="font-medium py-5 pe-10  cursor-pointer text-[#30BA30]  hover:underline">Delete All Items</Link>

</div>
  <table className="container mx-auto p-4 w-full text-sm text-left  text-gray-500">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th scope="col" className="px-16 py-3">
        Image
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody> 
    {Products&&Products.map(product=> <tr key={product._id} className="bg-white border-b border-gray-200 ">
        <td className="p-4">
          <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product.title} />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {product.product.title}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <button onClick={() => handelUpdateQuantity(product.product._id, product.count - 1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">0</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>

            <div>
              <input id="first_product" className="bg-gray-50 focus:outline-none w-12 text-center border border-gray-300 text-gray-900 text-lg rounded-lg font-bold  block px-2.5 py-1" placeholder={product.count} required />
            </div>

            <button onClick={() => handelUpdateQuantity(product.product._id, product.count + 1)}  className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>

          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {product.price} EGP
        </td>
        <td className="px-6 py-4 text-[#30BA30] hover:underline">
        <i className="fa-solid fa-trash-can pe-1"></i>
          <a onClick={()=>handelRemoveItem(product.product._id)} className="font-medium cursor-pointer">
           Remove</a>
        </td>
      </tr>)}
      
    </tbody>
  </table>
  <Link to='/Order' className="flex py-5">
 <button type="submit" className="w-1/2 mx-auto my-3 p-4 rounded-2xl text-xl text-white capitalize font-bold cursor-pointer bg-green-500 hover:bg-green-600">Proceed To Checkout</button>
 </Link>
</div>
  )
}
