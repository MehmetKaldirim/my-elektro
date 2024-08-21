import React from "react";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi"; // Import the arrow icon
import logo from "../assets/footer-image.png";

export default function Footer() {
  // Function to handle the call button click
  const handleCallClick = () => {
    if (navigator.userAgent.includes("Windows")) {
      window.location.href = "tel:+4917683396077";
    } else {
      window.location.href = "facetime:+4917683396077";
    }
  };

  // Function to handle the scroll to top click
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white flex flex-col md:flex-row justify-between items-center md:items-center mx-5 my-4">
      {/* First Column: Symbol */}
      <div className="flex justify-center md:justify-start w-full md:w-auto">
        <img src={logo} alt="" className="mx-auto md:mx-0" />
      </div>

      {/* Second Column: Links */}
      <div className="flex justify-center md:justify-center text-slate-500 my-4 space-x-4 w-full md:w-auto">
        <Link to="/impressum" className="hover:underline">
          Impressum
        </Link>
        <Link to="/datenschutz" className="hover:underline">
          Datenschutz
        </Link>
      </div>

      {/* Third Column: Call Button */}
      <div className="flex justify-center md:justify-end w-full md:w-auto mb-8 md:mb-0">
        <button
          className="flex items-center rounded-full px-4 py-2 hover:bg-yellow-400 hover:text-white shadow-xl"
          onClick={handleCallClick}
        >
          <FiPhone className="mr-2 text-gray-500" />
          Jetzt Anrufen
        </button>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-4 right-4 md:hidden">
        <button
          onClick={handleScrollToTop}
          className="bg-yellow-400 text-white p-3 rounded-full shadow-lg hover:bg-yellow-500"
        >
          <FiArrowUp size={24} />
        </button>
      </div>
    </div>
  );
}
