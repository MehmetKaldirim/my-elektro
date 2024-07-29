import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiMenu } from "react-icons/fi";
import logo from "../assets/elektro-sembol.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (e) => {
    if (e.target.closest("nav") || e.target.closest(".hamburger")) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", closeMenu);
    } else {
      document.removeEventListener("click", closeMenu);
    }
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [isOpen]);

  return (
    <header className="bg-white text-black p-4 flex items-center justify-between relative z-20">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-10 mr-4" />
      </div>

      <nav className="hidden md:flex flex-grow justify-center space-x-8">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/leistungen" className="hover:underline">
          Leistungen
        </Link>
        <Link to="/uber" className="hover:underline">
          Über
        </Link>
        <Link to="/kontakt" className="hover:underline">
          Kontakt
        </Link>
      </nav>

      <div className="hidden md:flex items-center">
        <button className="flex items-center bg-yellow-300 text-white rounded-full px-4 py-2 hover:bg-blue-700 transition-colors duration-300">
          <FiPhone className="mr-2" />
          Anrufen
        </button>
      </div>

      <div className="md:hidden">
        <button className="hamburger" onClick={toggleMenu}>
          <FiMenu size={24} />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 bg-white w-64 h-screen shadow-lg flex flex-col p-6 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-30`}
      >
        <nav className="flex flex-col space-y-4 mt-10">
          <Link
            to="/"
            className="text-gray-800 hover:underline"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/leistungen"
            className="text-gray-800 hover:underline"
            onClick={toggleMenu}
          >
            Leistungen
          </Link>
          <Link
            to="/uber"
            className="text-gray-800 hover:underline"
            onClick={toggleMenu}
          >
            Über
          </Link>
          <Link
            to="/kontakt"
            className="text-gray-800 hover:underline"
            onClick={toggleMenu}
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
