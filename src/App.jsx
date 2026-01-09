import { createBrowserRouter } from "react-router"
import Layout from "./component/Layout/Layout"
import Home from "./component/Home/Home"
import { RouterProvider } from "react-router/dom"
import Products from './component/Products/AllProducts';
import Brands from './component/Brands/Brands';
import Categories from './component/Categories/Categories';
import NotFound from "./component/NotFound/NotFound";
import Register from "./component/Register/Register";
import Login from "./component/Login/Login";
import AuthContext from "./Context/AuthContext";
import {QueryClient,QueryClientProvider,} from '@tanstack/react-query'
import ProductsDetails from "./component/ProductsDetails/ProductsDetails";
import Cart from "./component/Cart/Cart";
import CartContextProvider from "./Context/CartContext";
import Order from "./component/Order/Order";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./component/ProtectedRoute/ProtectedRoute";
import ProtectedUser from "./component/ProtectedUser/ProtectedUser";


const queryClient = new QueryClient()
const router= createBrowserRouter([
  {path:"/", element:<Layout/> , children:[
{path:"/", element: <Home/>},
{path:"/Products", element:<Products/>},
{path:"/Brands", element:<Brands/>},
{path:"/Categories", element:<Categories/>},
{path:"*", element:<ProtectedRoute><NotFound/></ProtectedRoute>},
{path:"/Register", element:<ProtectedUser><Register/></ProtectedUser>},
{path:"/Login", element:<ProtectedUser><Login/></ProtectedUser>},
{path:"/ProductsDetails/:id", element:<ProductsDetails/>},
{path:"cart", element:<Cart/>},
{path:"/Order", element:<ProtectedRoute><Order/></ProtectedRoute>}
  ] },
])  

export default function App() {
  
  return (
  

   <QueryClientProvider client={queryClient}>


    <AuthContext>
    <CartContextProvider>
    <Toaster />
      < RouterProvider router={router} />
    </CartContextProvider>
    </AuthContext>
 
 
   </QueryClientProvider>
      

  )
}
