import React from "react";
import { FiPhone } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.w3schools.com/howto/rain.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full bg-black bg-opacity-50 text-white p-6">
        <div className="md:w-1/2 p-4">
          <div className="flex flex-col">
            <h1 className="text-4xl mb-4">
              Ihr Elektrikermeister aus{" "}
              <span className="text-yellow-300">Essen</span>
            </h1>
            <p1 className="text-xl text-white text-left">
              Wir arbeiten mit der größten Sorgfalt um Ihnen die beste
              Elektroinstallation bieten zu können. Wir verwenden die neueste
              Technologie, um von Anfang bis Ende einen erstklassigen Service zu
              gewährleisten. Sie können jeden Schritt des Prozesses verfolgen.
              Wir sind erst dann zufrieden wenn Sie es sind.
            </p1>
          </div>
          <button className=" flex items-center px-4 py-2 my-12 border border-white text-white hover:bg-white hover:text-yellow-300 transition-colors duration-300 rounded-3xl">
            <FiPhone className="mr-2" />
            Jetzt Anrufen
          </button>
        </div>
        <div className="md:w-1/2 p-4 mt-6 md:mt-0">
          <div className=" md:w-1/2 border-b border-yellow-300 pb-4 mb-4">
            <h2 className="text-2xl mb-2">Arbeitszeiten</h2>
            <p className="text-sm">24/7 Notdienst</p>
          </div>
          <div className="md:w-1/2 border-b border-yellow-300 pb-4 mb-4">
            <h2 className="text-2xl mb-2">Servicebereich</h2>
            <p className="text-sm">Deutschlandweit</p>
          </div>
          <div className="md:w-1/2 pb-4 mb-4">
            <h2 className=" text-2xl mb-2">Kontakt</h2>
            <p className="text-sm">info@my-elektro.online </p>
            <p className="text-sm font-bold">+4920145894463 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
