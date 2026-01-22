   import { useEffect, useState } from "react";

export default function Upbtn() {
      const [showButton, setShowButton] = useState(false);

  useEffect(()=> {
    const handleScroll = () => {
      setShowButton(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
//   return (
    
        {/* {window.scrollY >= 50 &&<button onClick={()=>{window.scrollTo({top:0, behavior:"smooth"})}} className="fixed bottom-5 right-5 h-20 w-20 cursor-pointer bg-green-500 text-white  rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50 focus:outline-none"> */}
            {/* <i className="fa-solid fa-angle-up font-extrabold text-5xl"></i> </button>} */}
        {/* // <button onClick={()=>{window.scrollTo({top:0, behavior:"smooth"})}} className="fixed bottom-5 right-5 h-20 w-20 cursor-pointer bg-green-500 text-white  rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50 focus:outline-none"> */}
        {/* //     <i className="fa-solid fa-angle-up font-extrabold text-5xl"></i> </button> */}
     

{/* export default function ScrollToTop() { */}


  return (
    <>
      {showButton && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="fixed bottom-5 right-5 cursor-pointer h-15 w-15 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
        >
          <i className="fa-solid fa-angle-up text-5xl "></i>
        </button>
      )}
    </>
  );

}
