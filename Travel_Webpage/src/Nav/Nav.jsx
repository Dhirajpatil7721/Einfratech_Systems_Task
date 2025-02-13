import { useState } from 'react';
import './Nav.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="nav" className=" bg-opacity-80 p-4 w-[95%] text-white shadow-md fixed top-4 left-1/2 transform -translate-x-1/2 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 style={{color:"black" ,fontSize:'25px',cursor: 'pointer'}} className="text-2xl font-bold cssanimation leKickOutFront sequence" >TRAVELLER </h1>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li><a id='a' href="/" className="hover:underline">Home</a></li>
          <li><a id='a' href="/about" className="hover:underline">About Us</a></li>
          <li><a id='a' href="/service" className="hover:underline">Services</a></li>
          {/* <li><a id='a' href="/contact" className="hover:underline">Contact</a></li> */}
          <li><a id='a' href="/signin" className="hover:underline">Login</a></li>
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/service" className="hover:underline">Services</a></li>
            {/* <li><a href="/contact" className="hover:underline">Contact</a></li> */}
            <li><a href="/signin" className="hover:underline">Login</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;