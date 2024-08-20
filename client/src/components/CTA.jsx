import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="bg-yellow-400 py-20 min-h-screen flex items-center justify-center">
      <div className="text-center">
        {/* Heading */}
        <h2 className="text-white text-4xl font-bold leading-snug mb-8">
          Erzählen Sie uns von <br /> Ihren Plänen
        </h2>

        {/* Button */}
        <Link to="/contact">
          <button className="bg-yellow-400 text-white font-semibold text-lg py-4 px-8 rounded-md shadow-lg transition-colors duration-300 hover:bg-white hover:text-yellow-400">
            Kostenloser Kostenvoranschlag <br /> anfordern
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CTA;
