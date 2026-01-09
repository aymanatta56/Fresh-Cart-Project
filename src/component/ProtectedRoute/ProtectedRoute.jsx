
import { Navigate} from "react-router";



export default function ProtectedRoute({ children }) {

 console.log("localStorage token", localStorage.getItem("token"));
 const token = localStorage.getItem("token");

 if(!token){

    return <Navigate to="/login" />
 }  
  return (
    <div>{children}</div>
  )
}
