import React, { useState } from "react";

const Contact = () => {
  const [selectedService, setSelectedService] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const services = [
    "Photovoltaik",
    "MSR",
    "Installation",
    "Geräteprüfung",
    "Etwas anderes",
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowOptions(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 items-center justify-center">
      {/* First Column */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Erzählen Sie uns mehr</h2>
        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full border-b-2 border-gray-300 focus:border-black focus:ring-0 p-2 outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Telefon Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Telefon
            </label>
            <input
              type="text"
              className="w-full border-b-2 border-gray-300 focus:border-black focus:ring-0 p-2 outline-none"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Service auswählen
            </label>
            <div
              className="relative w-full border-b-2 border-gray-300 focus-within:border-black p-2 cursor-pointer"
              onClick={() => setShowOptions(!showOptions)}
            >
              <input
                type="text"
                value={selectedService}
                readOnly
                placeholder="Select a service"
                className="w-full outline-none cursor-pointer"
              />
              {showOptions && (
                <ul className="absolute left-0 right-0 top-full mt-2 bg-white shadow-lg rounded-lg z-10">
                  {services.map((service, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleServiceClick(service)}
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-yellow-400 text-white px-4 py-3 rounded-2xl font-semibold w-full hover:bg-yellow-500 transition-colors duration-300"
          >
            Absenden
          </button>
        </form>
      </div>

      {/* Second Column */}
      <div className="w-full md:w-1/2 bg-yellow-400 text-white rounded-lg p-6 shadow-lg">
        <div className="h-full flex flex-col justify-between">
          {/* Arbeitszeiten */}
          <div className="border-b-2 border-white pb-6 mb-6">
            <h3 className="text-2xl font-bold mb-2">Arbeitszeiten</h3>
            <p className="text-lg">24/7 Notdienst</p>
          </div>

          {/* Einsatzbereich */}
          <div className="border-b-2 border-white pb-6 mb-6">
            <h3 className="text-2xl font-bold mb-2">Einsatzbereich</h3>
            <p className="text-lg">Deutschlandweit</p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Kontakt</h3>
            <p className="text-lg">info@my-elektro-online.de</p>
            <p className="text-lg">+49 201 45894463</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
