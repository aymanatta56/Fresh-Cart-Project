import { createContext, useEffect, useState } from "react" 

 export const AuthContextObj = createContext();

export default function AuthContext({children}) {

  const [userToken, setUserToken] = useState(null)
  useEffect(()=>{
    const tkn = localStorage.getItem("token");
console.log("tkn",tkn);

    if(tkn){
      setUserToken(tkn);
    }
  }, [])

  return (
    <AuthContextObj.Provider value={{userToken, setUserToken}}>
      {children}
    </AuthContextObj.Provider>
  )
}
