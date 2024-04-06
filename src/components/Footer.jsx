import React from 'react'
import Logo from '../Assets/Logo.png'
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='bg-[#6159C3] h-[80vh] lg:h-[50vh] w-full flex flex-col justify-center items-center'>
      <img src={Logo} alt='logo' className='h-24'></img>
      <div className='flex gap-4'>
        <Link to={"https://www.linkedin.com/company/naukrease/"}>
          <div className='flex justify-center items-center p-4 rounded-full bg-white'>
            <FaLinkedin fontSize={30} />
          </div>
        </Link>
        <Link to={"https://www.instagram.com/naukrease_org/"}>
          <div className='flex justify-center items-center p-4 rounded-full bg-white'>
            <FaInstagramSquare fontSize={30} />
          </div>
        </Link>

        <Link to={"https://twitter.com/naukrease"}>
          <div className='flex justify-center items-center p-4 rounded-full bg-white'>
            <FaSquareXTwitter fontSize={30} />
          </div>
        </Link>
        <Link to={"https://www.facebook.com/p/NaukrEaseOrg-61556604884730/?mibextid=ZbWKwL&from_intent_redirect=1"}>
          <div className='flex justify-center items-center p-4 rounded-full bg-white'>
            <FaFacebook fontSize={30} />
          </div>
        </Link>


      </div>
    </div>
  )
}

export default Footer