import PayPalLogo from'../../images/PayPal-Logo.jpg';
import MasterCard from'../../images/MasterCard_Logo.svg.png'
import App from'../../images/Available_on_the_App_Store_(black).png'
import Badge from '../../images/en_badge_web_generic.png'

export default function Footer() {
  return (
    <div className="bg-gray-200 mt-10 py-10 ">
      <div className="container mx-auto flex flex-col ">
        <div className="py-5 text-center md:text-left px-5">
          <h4 className="font-bold pb-2">Get The FreshCart App</h4>
          <p className="font-thin text-gray-700 text-lg">we will send you a link , open it on your phone to dwonload the app</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-5 ">
          <input className="w-full md:max-w-5xl rounded-2xl focus:border-none focus:outline-none border-0  focus:ring-green-500" type="email" placeholder="Enter your email" />
          <button className=" bg-green-500 text-white font-bold px-10 py-2 rounded-2xl border-0 cursor-pointer " type="button"> share app link</button>
        </div>
      </div>

      <div className='container mx-auto border-y border-gray-300 py-5 mt-10 px-5 flex flex-col gap-5 md:flex-row justify-between  items-center'>
        <div className='flex items-center space-x-5'>
          <p className='text-gray-500'>payment partners</p>
          <img className='w-20 rounded-xl' src={PayPalLogo} alt="PayPal Logo" />
          <img className='w-20' src={MasterCard} alt="MasterCard Logo" />

        </div>
        <div className='flex items-center space-x-5'>
          <p className='text-gray-500'>get deliveries with freshcart</p>
          <img className='w-20 rounded-xl' src={App} alt="PayPal Logo" />
          <img className='w-20' src={Badge} alt="MasterCard Logo" />

        </div>
        
      </div>
    </div>
  )
}
