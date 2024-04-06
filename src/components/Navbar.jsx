import { React, useState } from 'react'
import Logo from '../Assets/Logo.png'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        // parent div
        <div className="bg-[#eff0fe] py-2 flex justify-center z-10">

            <div className={`flex flex-row justify-between max-w-[1440px] w-11/12 items-center`}>
                {/* left */}
                <div>
                    <Link to={"https://naukrease.mydurable.com/"}>
                        <img src={Logo} alt='Naukrease-logo' className='h-20'></img>
                    </Link>

                </div>
                {/* right */}
                <div className='lg:flex gap-6 hidden'>
                    {/* NavIcons */}
                    <div className='flex items-center gap-6'>
                        <Link to="https://naukrease.mydurable.com/"><p className='text-xl'>Home</p></Link>

                        <Link to={"https://naukrease.mydurable.com/about"}><p className='text-xl'>About</p></Link>
                        <Link to={"https://naukrease.mydurable.com/blog"}>
                            <p className='text-xl'>Blog</p>
                        </Link>


                    </div>
                    {/*  buttons*/}
                    <div className='flex gap-4'>
                        <div className='bg-[#6159C3] text-black px-4 py-2 rounded-lg'><a href='mailto:work@naukrease.org' className='text-xl'>Mail Us</a></div>
                        <div className='bg-transparent border-2 border-black  text-black px-3 py-2 rounded-lg'><a href='tel:+919719610286' className='text-xl'>Call Us</a></div>
                    </div>
                </div>
                <div className='lg:hidden flex' onClick={() => setShowNav(true)}>
                    <RxHamburgerMenu fontSize={20} />
                </div>


            </div>
            <div className={showNav ? `flex flex-col fixed mt-0 items-center w-[100vw] h-[100vh] bg-[#eff0fe]` : `hidden`}>
                <div>
                    <Link to={"https://naukrease.mydurable.com/"}>
                        <img src={Logo} alt='Naukrease-logo' className='h-20'></img>
                    </Link>

                </div>
                {/* right */}
                <div className='flex flex-col gap-6 h-[80%] justify-between'>
                    {/* NavIcons */}
                    <div className='flex flex-col items-center gap-6 '>
                        <Link to="https://naukrease.mydurable.com/"><p className='text-xl'>Home</p></Link>

                        <Link to={"https://naukrease.mydurable.com/about"}><p className='text-xl'>About</p></Link>
                        <Link to={"https://naukrease.mydurable.com/blog"}>
                            <p className='text-xl'>Blog</p>
                        </Link>


                    </div>
                    {/*  buttons*/}
                    <div className='flex gap-4'>
                        <div className='bg-[#6159C3] text-black px-4 py-2 rounded-lg'><a href='mailto:work@naukrease.org' className='text-xl'>Mail Us</a></div>
                        <div className='bg-transparent border-2 border-black  text-black px-3 py-2 rounded-lg'><a href='tel:+919719610286' className='text-xl'>Call Us</a></div>
                    </div>
                </div>
                <div onClick={()=>{setShowNav(false)}} className='absolute right-[20px] text-2xl cursor-pointer'>X</div>
            </div>

            {/* wrapper */}

        </div>
    )
}

export default Navbar