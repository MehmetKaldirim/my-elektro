import React from "react";
import { Link } from "react-router-dom";

const UnsereLeistungen = () => {
  return (
    <div className="bg-white text-black p-6 mt-20">
      {/* First Row: Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Unsere Leistungen</h1>
      </div>

      {/* Second Row: Four Columns with Image, Title, and Paragraph */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* First Column */}
        <div className="flex flex-col items-center">
          <img src="/src/assets/Sun.png" alt="Sun" className="w-16 h-16 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Photovoltaik</h2>
          <p className="text-gray-500 text-center">
            Wir installieren PV-Anlagen, die Sonnenlicht in Strom umwandeln, und
            kümmern uns um Verkabelung und Inbetriebnahme.
          </p>
        </div>

        {/* Second Column */}
        <div className="flex flex-col items-center">
          <img
            src="/src/assets/house.png"
            alt="House"
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">
            Mess-, Steuerungs- und Regelungstechnik
          </h2>
          <p className="text-gray-500 text-center">
            Wir installieren Sensoren und Steuerungen, um industrielle Prozesse
            zu überwachen, zu optimieren und zu automatisieren.
          </p>
        </div>

        {/* Third Column */}
        <div className="flex flex-col items-center">
          <img
            src="/src/assets/maintanence.png"
            alt="Maintenance"
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Installation</h2>
          <p className="text-gray-500 text-center">
            Die richtige Installation und Wartung der Beleuchtung spart Ihnen
            Geld und verbessert das Aussehen und die Atmosphäre Ihres Zuhauses.
          </p>
        </div>

        {/* Fourth Column */}
        <div className="flex flex-col items-center">
          <img
            src="/src/assets/steckdose.png"
            alt="Steckdose"
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Geräteprüfung</h2>
          <p className="text-gray-500 text-center">
            Sicherheit durch regelmäßige Geräteprüfung gemäß DIN VDE 0701 und
            0702
          </p>
        </div>
      </div>

      {/* Third Row: Button */}
      <div className="text-center">
        <Link to="/leistungen">
          <button className="bg-yellow-500 text-white py-2 px-6 rounded-3xl hover:bg-yellow-600">
            Alle Dienstleistungen anzeigen
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UnsereLeistungen;
