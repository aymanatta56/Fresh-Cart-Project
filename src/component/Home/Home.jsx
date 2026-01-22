import { Link } from "react-router";
import GirlShopping from "../../images/girl-shopping-list.svg"
import image1 from"../../images/download (1).svg"
import image2 from"../../images/download (2).svg"
import image3 from"../../images/download (3).svg"
import image4 from"../../images/download (7).svg"
import image5 from"../../images/download.svg"
import image6 from"../../images/download (6).svg"
import AnimatedContent from "../BtnAnimation/BtnAnimation";
import SplitText from "../SplitText/SplitText";

export default function Home() {
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (
    <div className="container mx-auto  mt-32 p-5">
      <div className="grid grid-cols-8 gap-8">
        <div className="col-span-8 items-center text-center md:items-start  md:text-left md:col-span-5 flex flex-col justify-center gap-4">
          {/* <h1 className="text-7xl font-extrabold capitalize">Limited Time Offer! Up to 50% OFF!</h1> */}





<SplitText
  text="Limited Time Offer! Up to 50% OFF!"
  className="text-7xl font-extrabold"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="start"
  onLetterAnimationComplete={handleAnimationComplete}
/>
          <p className="text-gray-500 text-xl ">Dont Wait - Limited Stock at Unbeatable Prices!</p>
          

        <div className="mt-10">
          <AnimatedContent
  distance={150}
  direction="horizontal"
  reverse={false}
  duration={2}
  ease="bounce.out"
  initialOpacity={0.2}
  animateOpacity
  scale={.5}
  threshold={0.2}
  delay={0.3}
>

  <Link to="/Products" className="bg-green-500 text-center  w-28 py-5 px-10 text-white text-xl font-extrabold capitalize rounded-xl mt-10">Shop Now</Link>
</AnimatedContent>
        </div>
        </div>
        <div className="col-span-8 md:col-span-3">
        <img className="w-full" src={GirlShopping} alt="Girl Shopping" />

      </div>
        </div>
      <div className=" grid grid-cols-6 gap-5 place-items-center mt-16">

        <img className="col-span-3  md:col-span-1 w-20" src={image1} alt="" />
        <img className="col-span-3  md:col-span-1 w-20" src={image2} alt="" />
        <img className="col-span-3  md:col-span-1 w-20" src={image3} alt="" />
        <img className="col-span-3  md:col-span-1 w-20" src={image4} alt="" />
        <img className="col-span-3  md:col-span-1 w-20" src={image5} alt="" />
        <img className="col-span-3  md:col-span-1 w-20" src={image6} alt="" />

      </div>
      
    </div>
  )
}
