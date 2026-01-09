import { useFormik } from "formik"
import { useContext, useState } from "react";
import  { AuthContextObj } from "../../Context/AuthContext";
import axios from "axios";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router";


export default function Order() { 
  const navigate = useNavigate();
  const [iscash, setIscash] = useState(false)
  const {userToken} = useContext(AuthContextObj)
  // console.log(userToken);
  
 const {cartId } = useContext(CartContext)
//  console.log(cartId);

  //  function handelCashOrder(values){
  //       axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}` ,
  //       {
  //           shippingAddress:values
  //       },
  //       {
  //           headers:{token:userToken}
  //       }
          
  //       )
  //       .then((res)=>{
  //           console.log('res' ,res);
            
  //       })
  //       .catch((err)=>{
  //           console.log('err',err);
            
  //       })

        
  //       console.log('values' ,values);
        
  //   }
  function handelCreditOrder(values){
        axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}` ,
        {
            shippingAddress:values
        },
        {
            headers:{token:userToken},
            params:{url:"http://localhost:5173/"}
        }
        
        ).then((res)=>{
            console.log('res' ,res);
           window.open(res.data.session.url , "_self");
        })
        .catch((err)=>{
            console.log('err',err); })
      }

function createCashOrder(values){
        axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}` ,
        {
            shippingAddress:values
        },
        {
            headers:{token:userToken}
        }
          
        )
      .then((res)=>{
setTimeout(() => {
          res.data.status==="success" && navigate("/");
}, 2000);

          console.log('res' ,res);  })
      .catch((err)=>{
          console.log('err',err);  }) 
  console.log('values' ,values);
}
  
const orderFormik= useFormik({
  initialValues:{
      details:"",
    phone:"",
    city:"",  
},
onSubmit: function(values){
  if(iscash){
    createCashOrder(values);  
  }else{
    handelCreditOrder(values);
  }
}
})



  return (
  <div className="relative mt-20 py-10  flex flex-col gap-6 container mx-auto px-4 justify-center items-center">
      <form onSubmit={orderFormik.handleSubmit} className="max-w-lg mx-auto  w-full mt-5 border border-green-500 rounded-2xl p-10 flex flex-col gap-6 ">

  <div className="relative z-0 w-full mb-7 group">
    <input type="text" value={orderFormik.values.details} onChange={orderFormik.handleChange} onBlur={orderFormik.handleBlur} name="details" id="floating_details" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " required />
    <label htmlFor="floating_details" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Details</label>
  </div>
  <div className="relative z-0 w-full mb-7 group">
    <input type="tel" value={orderFormik.values.phone} onChange={orderFormik.handleChange} onBlur={orderFormik.handleBlur} name="phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " required />
    <label htmlFor="floating_phone" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone number</label>
  </div>
  <div className="relative z-0 w-full mb-7 group">
    <input type="text" value={orderFormik.values.city} onChange={orderFormik.handleChange} onBlur={orderFormik.handleBlur} name="city" id="floating_city" c className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer" placeholder=" " required />
    <label htmlFor="floating_city" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">City</label>
  </div>


<div className="flex justify-between items-center">
  <button onClick={()=>setIscash(false)} type="submit" className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">Visa</button>
  <button onClick={()=>setIscash(true)}  type="submit" className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">Cash</button>
</div>
</form>

    </div>
  )
}
