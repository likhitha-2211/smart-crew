import React, { useState, useEffect } from "react"
import { FaBars, FaTimes, FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa" //FaFacebook, FaLinkedinIn
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { Link } from "react-scroll"
import Button from "@mui/material/Button"
import SignIn from "./SignIn"
import "./styles.css"
import logo from "./../assets/logo.png"

const Navbar = (props) => {
  const [authenticatedUser, setAuthenticatedUser] = useState(false)
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const [open, setOpen] = useState(false)

  // function to handle modal open
  const handleOpen = () => {
    console.log("open")
    setOpen(true)
  }

  // function to handle modal close
  const handleClose = () => {
    console.log("close")
    setOpen(false)
  }

  const handleLogout = () => {
    window.location.href = "/"
    localStorage.removeItem("authenticated")
  }

  useEffect(() => {
    setAuthenticatedUser(JSON.parse(localStorage.getItem("authenticated")))
  }, [localStorage.getItem("authenticated")])

  return (
    <div className="nav-links fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      {open && <SignIn open={open || false} handleClose={handleClose} />}

      {/* menu */}
      <ul className="hidden md:flex gap-x-8">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        {authenticatedUser && (
          <li>
            <Link to="dashboard" smooth={true} duration={500}>
              Dashboard
            </Link>
          </li>
        )}
        <li>
          <Link to="usecases" smooth={true} duration={500}>
            UseCases
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        {!authenticatedUser && (
          <li>
            <Link to="home" smooth={false} duration={500}>
              <Button variant="contained" onClick={handleOpen}>
                SIGN IN
              </Button>
            </Link>
          </li>
        )}
        {!authenticatedUser && (
          <li>
            <Link to="home" smooth={true} duration={500}>
              <Button variant="contained" onClick={handleOpen}>
                SIGN UP
              </Button>
            </Link>
          </li>
        )}

        {authenticatedUser && (
          <li>
            <Link to="home" smooth={false} duration={500}>
              <Button variant="contained" onClick={handleLogout}>
                LOG OUT
              </Button>
            </Link>
          </li>
        )}
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        {authenticatedUser && (
          <li className="py-6 text-4xl">
            {" "}
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
              Dashboard
            </Link>
          </li>
        )}
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="usecases" smooth={true} duration={500}>
            UseCases
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        {!authenticatedUser && (
          <li className="py-6 text-4xl">
            {" "}
            <Link onClick={handleClick} to="" smooth={false} duration={500}>
              SIGN IN
            </Link>
          </li>
        )}
        {!authenticatedUser && (
          <li className="py-6 text-4xl">
            {" "}
            <Link onClick={handleClick} to="" smooth={true} duration={500}>
              SIGN UP
            </Link>
          </li>
        )}
      </ul>
      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a className="flex justify-between items-center w-full text-gray-300" href="/">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600">
            <a className="flex justify-between items-center w-full text-gray-300" href="/">
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1a0dab]">
            <a className="flex justify-between items-center w-full text-gray-300" href="/">
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a className="flex justify-between items-center w-full text-gray-300" href="/">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a className="flex justify-between items-center w-full text-gray-300" href="/">
              Twitter <FaTwitter size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
