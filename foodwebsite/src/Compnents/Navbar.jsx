import React, { useEffect, useState } from 'react'
import { FaHeart, FaSearch } from "react-icons/fa"
import { FaBagShopping } from "react-icons/fa6"
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Toggle mobile menu
  const toggleMenu = (e) => {
    e.stopPropagation()
    setIsMenuOpen(prev => !prev)
  }

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white
      transition-shadow duration-300
      ${scrolled ? 'shadow-lg' : 'shadow-none'}`}
      onClick={() => setIsMenuOpen(false)}
    >
      <div className="max-w-[1200px] mx-auto h-[12vh] md:h-[14vh]
        flex justify-between items-center px-4">

        {/* LOGO */}
        <a className="text-3xl font-bold" href="/">
          Gr<span className="text-orange-500">O</span>cify
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8">
          <li><a className="font-semibold text-orange-600" href="/">Home</a></li>
          <li><a className="font-semibold text-zinc-800 hover:text-orange-600 transition" href="/about">About</a></li>
          <li><a className="font-semibold text-zinc-800 hover:text-orange-600 transition" href="/process">Process</a></li>
          <li><a className="font-semibold text-zinc-800 hover:text-orange-600 transition" href="/contact">Contact</a></li>
        </ul>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4">

          {/* SEARCH (Desktop only) */}
          <div className="hidden md:flex items-center border border-orange-500 rounded-full overflow-hidden">
            <input
              className="h-9 px-3 outline-none"
              type="text"
              placeholder="Search products"
            />
            <button className="px-3 text-orange-500">
              <FaSearch />
            </button>
          </div>

          {/* ICONS */}
          <FaHeart className="text-2xl text-zinc-700 cursor-pointer" />
          <FaBagShopping className="text-2xl text-zinc-700 cursor-pointer" />

          {/* HAMBURGER */}
          <GiHamburgerMenu
            className={`text-2xl cursor-pointer md:hidden transition-transform duration-300
            ${isMenuOpen ? 'rotate-90' : ''}`}
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* MOBILE MENU */}
      <ul
        onClick={(e) => e.stopPropagation()}
        className={`md:hidden absolute top-[12vh] left-0 right-0 bg-white
        flex flex-col gap-6 p-8 text-center
        transition-all duration-500 ease-in-out
        ${
          isMenuOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-5 invisible pointer-events-none'
        }`}
      >
        <li onClick={() => setIsMenuOpen(false)}>
          <a className="font-semibold text-orange-600" href="/">Home</a>
        </li>
        <li onClick={() => setIsMenuOpen(false)}>
          <a className="font-semibold text-zinc-800 hover:text-orange-600 transition" href="/about">About</a>
        </li>
        <li onClick={() => setIsMenuOpen(false)}>
          <a className="font-semibold text-zinc-800 hover:text-orange-600 transition" href="/process">Process</a>
        </li>
        <li onClick={() => setIsMenuOpen(false)}>
          <a className="font-semibold text-zinc-800 hover:text-orange-600 transition" href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
