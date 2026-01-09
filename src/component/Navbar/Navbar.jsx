
import { Link, NavLink, useNavigate } from 'react-router';
import FreshCartLogo from '../../images/freshcart-logo.svg';
import { useContext } from 'react';
import { AuthContextObj } from '../../Context/AuthContext';
import Cart from '../Cart/Cart';
import { CartContext } from '../../Context/CartContext';


export default function Navbar() {
 const{numOfCartItems} = useContext(CartContext)
const {userToken, setUserToken} = useContext(AuthContextObj);
const navigate = useNavigate();
console.log(userToken);



function handelLogout(){
 
  localStorage.removeItem("token");
   setUserToken(null);
  navigate("/");

}

  return (

<nav className="bg-gray-200 fixed w-full z-20 top-0 start-0 border-b border-default ">
  <div className=" container mx-auto flex flex-wrap flex-col md:flex-row items-center justify-between  p-4">
    <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={FreshCartLogo} className="h-10" alt="FreshCartogo" />
    </Link>
    <div className="flex md:order-2  items-center gap-4 ">
      <div>
          <ul className=" flex ">
        {userToken&&<li className='relative after:absolute after:w-full after:h-[1px] after:left-0 after:bottom-0 after:bg-green-500 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300'>
          <Link to="/cart" className="block py-2 px-3 " aria-current="page">
        <i className="fa-solid fa-cart-shopping relative"></i>
        <span className='absolute top-0 right-0 bg-green-500 text-white rounded-full text-sm font-bold w-5 h-5 flex items-center justify-center'>{numOfCartItems}</span>
          </Link>
        </li>}
        <li className='relative after:absolute after:w-full after:h-[1px] after:left-0 after:bottom-0 after:bg-green-500 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300'>
          <Link to="/Products" className="block py-2 px-3 " aria-current="page">
          <i className="fa-brands fa-facebook-f"></i>
          </Link>
        </li>
        <li className='relative after:absolute after:w-full after:h-[1px] after:left-0 after:bottom-0 after:bg-green-500 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300'>
          <Link to="/Brands" className="block py-2 px-3 " aria-current="page"><i className="fa-brands fa-twitter"></i></Link>
        </li>
      
        <li className='relative after:absolute after:w-full after:h-[1px] after:left-0 after:bottom-0 after:bg-green-500 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300'>
          <Link to="/Brands" className="block py-2 px-3 " aria-current="page"><i className="fa-brands fa-instagram"></i></Link>
        </li>
      
        <li className='relative after:absolute after:w-full after:h-[1px] after:left-0 after:bottom-0 after:bg-green-500 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300'  >
          <Link to="/Brands" className="block py-2 px-3 " aria-current="page"><i className="fa-brands fa-linkedin"></i></Link>
        </li>
        {userToken?  <li className='relative after:absolute after:w-full after:h-[1px] after:left-0 after:bottom-0 after:bg-green-500 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300'  >
          <span  onClick={handelLogout} className="block py-2 px-3 font-bold cursor-pointer" aria-current="page">LogOut</span>
        </li>
: <>   <li className='relative after:absolute after:w-full after:h-[1px] after:left-0 after:bottom-0 after:bg-green-500 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300'  >
          <NavLink to="/Register" className="block py-2 px-3 font-bold" aria-current="page">Register</NavLink>
        </li>
        <li className='relative after:absolute after:w-full after:h-[1px] after:left-0 after:bottom-0 after:bg-green-500 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300'  >
          <NavLink to="/Login" className="block py-2 px-3 font-bold " aria-current="page">Login</NavLink>
        </li></>}
       
          </ul>
      </div>

    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M5 7h14M5 12h14M5 17h14" /></svg>
    </button>
    </div>



    <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col justify-center items-center p-4 md:p-0  md:flex-row md:space-x-8 ">
        <li className='relative after:absolute after:w-full after:h-[1px] after:left-0 after:bottom-0 after:bg-green-500 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300'>
          <NavLink to="/Products" className="block py-2 px-3   " aria-current="page">Products</NavLink>
        </li>
        <li className='relative after:absolute after:w-full after:h-[1px] after:left-0 after:bottom-0 after:bg-green-500 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300'>
          <NavLink to="/Brands" className="block py-2 px-3  " aria-current="page">Brands</NavLink>
        </li>
        <li className='relative after:absolute after:w-full after:h-[1px] after:left-0 after:bottom-0 after:bg-green-500 after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform after:duration-300'>
          <NavLink to="/Categories" className="block py-2 px-3  " aria-current="page">Categories</NavLink>
        </li>
     
      </ul>






    </div>
  </div>
</nav>


  )
}
