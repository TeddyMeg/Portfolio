import React from 'react'
import logo from '../assets/Logo.png'
import {FaLinkedinIn, FaInstagram, FaFacebookF, FaSquareXTwitter, FaGithub} from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-25" src={logo} alt="logo"  />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedinIn />
            <FaInstagram />
            <FaFacebookF />
            <FaSquareXTwitter />
            <FaGithub />
        </div>
    </nav>
  )
}

export default Navbar