import axios from "axios";
import { useFormik } from "formik"
import { useContext, useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router";

import * as Yup from 'yup';
import  { AuthContextObj } from "../../Context/AuthContext";
import toast from "react-hot-toast";
// import toast from './../../../node_modules/react-hot-toast/src/index';


export default function Register() {
  const { setUserToken } = useContext(AuthContextObj)
  const navigate = useNavigate();
  const [iserror, setIserror] = useState(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  async function handleSubmit(values){
    setIsLoading(true);
   axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values)
    .then((res)=>{
      localStorage.setItem("token",res.data.token);
      setUserToken(res.data.token);
      console.log(res.data);
      setIsSuccess(true);
      setIsLoading(false);
           


     setTimeout(() => {
      navigate("/");
     }, 2000);
    })
    .catch((err)=>{console.log(err.response.data);
      setIserror(err.response.data.message);
      setIsLoading(false);
      setTimeout(() => {
        setIserror(null);
      }, 2000);
    });
    console.log(values);
   }
     useEffect(()=>{
         {isSuccess && toast.success("Login successful! Redirecting to home...",{position:"left-bottom" ,duration:2000 })}
         {iserror&& toast.error(iserror,{position:"left-bottom" ,duration:2000 })}
   
     },[isSuccess, iserror])
const formik = useFormik({
  initialValues:{
    name:"",
    email:"",
    password:"",
    rePassword:"",
    phone:""
  },
  onSubmit: handleSubmit,
  validationSchema:Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    rePassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords must match").required("Confirm password is required"),
    phone: Yup.string().required("Phone number is required")
  })

})

  return (
    <div className="relative mt-20 py-10  flex flex-col gap-6 container mx-auto px-4 justify-center items-center">
    <h2 className="capitalize font-bold text-xl border-2 border-green-500 py-5 px-7 rounded-2xl ">Register now</h2>
      

<form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto  w-full mt-5 border border-green-500 rounded-2xl p-10 flex flex-col gap-6 ">
{formik.touched.name && formik.errors.name ? <div className="text-red-500 text-sm">{formik.errors.name}</div> : null}
  <div className="relative z-0 w-full mb-7 group">


    <input value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " required />
    <label htmlFor="floating_name" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Name</label>
  </div>
  {formik.touched.email && formik.errors.email ? <div className="text-red-500 text-sm">{formik.errors.email}</div> : null}
  <div className="relative z-0 w-full mb-7 group">
    <input value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " required />
    <label htmlFor="floating_email" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email address</label>
  </div>
  {formik.touched.password && formik.errors.password ? <div className="text-red-500 text-sm">{formik.errors.password}</div> : null}
  <div className="relative z-0 w-full mb-7 group">
    <input value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " required />
    <label htmlFor="floating_password" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
  </div>
  {formik.touched.rePassword && formik.errors.rePassword ? <div className="text-red-500 text-sm">{formik.errors.rePassword}</div> : null}
  <div className="relative z-0 w-full mb-7 group">
    <input value={formik.values.rePassword} onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " required />
    <label htmlFor="rePassword" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Confirm password</label>
  </div>
  {formik.touched.phone && formik.errors.phone ? <div className="text-red-500 text-sm">{formik.errors.phone}</div> : null}
 
  <div className="relative z-0 w-full mb-7 group">
    <input value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} type="tel" name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " required />
    <label htmlFor="floating_phone" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone number</label>
  </div>

  <button  type="submit" className="text-white cursor-pointer flex justify-center items-center bg-green-500 capitalize box-border border border-transparent hover:bg-green-600 transition-all duration-300 focus:ring-4 focus:ring-green-400 shadow-xs font-bold text-xl leading-5 rounded-base  px-7 py-4 focus:outline-none">
   {isLoading?     <Oval
visible={true}
height="40"
width="40"
color="#ffffff"
ariaLabel="oval-loading"
wrapperStyle={{}}
wrapperClass=""
/> : "register"}
    
    </button>
</form>


    </div>
  )
}
