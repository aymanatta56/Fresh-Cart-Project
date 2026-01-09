import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Loader from "../Loader/Loader"
import { Link } from "react-router"


export default function Categories() {
function geTAllCategories(){
return axios.get("https://ecommerce.routemisr.com/api/v1/categories")
}

 const {data ,isLoading ,isError}= useQuery({
    queryKey: ['Categorys'],
    queryFn: geTAllCategories

  })
  const AllCategories =data && data.data.data;

  if(isLoading){
    return <Loader />
  }
  if(isError){
    return <h2 className=" text-center mt-40 bg-green-500 p-5"> Something went wrong </h2>
  }
  console.log("data"  ,data.data.data);
  
  return (
  
 <div className="container mx-auto mt-40 md:mt-30  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center">
   {AllCategories&& AllCategories.map((category)=>
       <div key={category._id} className=" bg-neutral-primary-soft block max-w-sm border w-full border-default rounded-base shadow-xs">
   
       <img className="rounded-t-base w-full h-52 " src={category.image} alt={category.name} />
     
     <div className=" text-center pb-4">
       
       
         <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">{category.slug}</h5>
      
       <Link className="inline-flex items-center text-white bg-green-500 box-border border border-transparent hover:bg-green-700 focus:ring-4 focus:ring-green-300 shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
         Read more
         <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
       </Link>
     </div>
   </div>
   )}
   </div> 
   
  )
}
