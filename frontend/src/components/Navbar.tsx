import { useState } from "react";
import Button from "./common/button";
import { NavLink } from "react-router-dom";

const NAVBAR_LINKS = [
  {
    title :"about" ,
    link :"/about"
  },
  {
    title :"testimonials" ,
    link :"/testimonials"
  } ,
  {
    title :"contact" ,
    link :"/contact"
  } ,
  {
    title :"pricing" ,
    link :"/pricing"
  }
]
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between py-3 px-4 max-w-[1200px] mx-auto">
      {/* Logo */}
      <h1  className=" font_boldonse text-4xl text-white font-bold"><NavLink to={"/"}>LOGO</NavLink></h1>

      {/* Mobile Menu Button */}
      <button 
        className="sm:hidden text-gray-700 hover:text-red-400 transition-all duration-150"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <svg className="w-8 h-8 cursor-pointer outline-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg> // Close icon (X)
        ) : (
          <svg className="w-8 h-8 cursor-pointer text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg> // Hamburger icon (☰)
        )}
      </button>

      {/* Navigation (Hidden on small screens) */}
      <nav className={`absolute top-16 left-0 w-full bg-transperant  shadow-md sm:shadow-none sm:static sm:w-auto sm:flex sm:items-center sm:gap-6 p-4 sm:p-0 transition-all ${menuOpen ? "block bg-black" : "hidden"}`}>
        <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 capitalize">
          {NAVBAR_LINKS.map(( item) => (
            <NavLink to={`${item.link}`} key={item.title} className="font-semibold text-xl  hover:text-red-400 transition-all duration-150 cursor-pointer text-white">
              {item.title}
            </NavLink >
          ))}
        </ul>
      </nav>

      {/* Buttons (Login + CTA) */}
      <div className="hidden sm:flex items-center gap-4">
        {/* <NavLink to={"/login"}><button className="py-2 px-4 cursor-pointer border  bg-transparent rounded-full text-white  hover:bg-gray-700 ">
          Login
        </button></NavLink> */}
        <NavLink to={"/create-account"}><Button text="Start for free" /></NavLink>
      </div>

      
    </header>
  );
};

export default Navbar;
