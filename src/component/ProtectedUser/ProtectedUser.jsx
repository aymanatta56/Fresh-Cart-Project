import { Navigate } from "react-router";


export default function ProtectedUser({ children }) {
    const token = localStorage.getItem("token");
    if (token) {
        return <Navigate to="/" />;
    }
  return (
  <div>{children}</div>
  )
}
