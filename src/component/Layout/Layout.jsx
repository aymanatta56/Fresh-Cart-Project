import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar2";
import Upbtn from './../Upbtn/Upbtn';




export default function Layout() {
  return (
   <>

    <Navbar/>
    
    <Outlet/>
    <Upbtn/>
    
    <Footer/>
    </>
  )
}
