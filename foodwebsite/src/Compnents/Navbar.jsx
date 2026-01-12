import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => { 

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = (e) => {
       e.stopPropagation();
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <div>
    <nav className='flex max-w-[1200px] md:h-[14vh]  h-[12vh] mx-auto justify-around items-center fixed top-0 left-0 right-0  bg-white  z-50  '>


        <a className=' text-3xl font-bold' href="/">Gr<span className='text-orange-500'>O</span>cify 
        </a>

        <ul className=' md:flex gap-8 hidden  '>
            <li><a className='font-semibold tracking-wider text-orange-600 '  href="/">Home</a></li>
            <li><a className='font-semibold tracking-wider text-zinc-800 hover:text-orange-600 ' href="/about">About</a></li>
            <li><a className='font-semibold tracking-wider text-zinc-800 hover:text-orange-600 ' href="/Process">Process</a></li>
            <li><a className='font-semibold tracking-wider text-zinc-800 hover:text-orange-600 ' href="/contact">Contact</a></li>
        </ul>
        <div  className='gap-3.5 flex items-center'>

            <div className=' md:flex border border-orange-600 hidden  border-solid rounded-4xl justify-around items-center  '> 
                <input  className='h-10 rounded-l pl-2  w-50  border-none focus:outline-none ' type="text"  autoComplete="off" placeholder='Search for products' />
                <button className='h-8 rounded-r text-white px-4'> <FaSearch /></button>
            </div>




            <a  className='  flex gap-3' href="#">
                <FaHeart className="text-zinc-700 text-2xl" />
                 < FaBagShopping className="text-zinc-700 text-2xl" />
            </a>


            <a href=""><GiHamburgerMenu className="text-black text-2xl md:hidden lg:hidden " onClick={toggleMenu} /></a>
        </div>



         <ul
  className={`lg:hidden absolute top-16 left-0 right-0 bg-white p-10
    flex flex-col gap-8
    transform transition-all duration-500 ease-in-out
    ${
      isMenuOpen
        ? 'opacity-100 translate-y-0 visible'
        : 'opacity-0 -translate-y-5 invisible'
    }`}
>
  <li>
    <a className="font-semibold tracking-wider text-orange-600" href="/">
      Home
    </a>
  </li>
  <li>
    <a className="font-semibold tracking-wider text-zinc-800 hover:text-orange-600 transition-colors duration-300" href="/about">
      About
    </a>
  </li>
  <li>
    <a className="font-semibold tracking-wider text-zinc-800 hover:text-orange-600 transition-colors duration-300" href="/process">
      Process
    </a>
  </li>
  <li>
    <a className="font-semibold tracking-wider text-zinc-800 hover:text-orange-600 transition-colors duration-300" href="/contact">
      Contact
    </a>
  </li>
</ul>

    </nav>
    </div>
  )
}

export default Navbar
