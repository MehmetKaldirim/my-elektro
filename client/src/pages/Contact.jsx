import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import emailjs

const Contact = () => {
  const [selectedService, setSelectedService] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [isFocused, setIsFocused] = useState({
    name: false,
    telefon: false,
    service: false,
  });
  const [formData, setFormData] = useState({
    name: "",
    telefon: "",
    service: "",
  });

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
    setFormData({ ...formData, service });
  };

  const handleFocus = (field) => {
    setIsFocused((prevState) => ({ ...prevState, [field]: true }));
  };

  const handleBlur = (field) => {
    setIsFocused((prevState) => ({ ...prevState, [field]: false }));
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "your_service_id";
    const templateID = "your_template_id";
    const userID = "your_user_id";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        alert("Your message has been sent successfully!");
      })
      .catch((err) => {
        console.error("Failed to send message:", err);
        alert("Failed to send your message. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 items-stretch justify-center">
      {/* First Column */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-6">Erzählen Sie uns mehr</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full border-b-2 border-gray-300 focus:ring-0 p-2 outline-none ${
                  isFocused.name
                    ? "border-2 border-black"
                    : "border-b-2 border-gray-300"
                }`}
                placeholder="Enter your name"
                onFocus={() => handleFocus("name")}
                onBlur={() => handleBlur("name")}
              />
            </div>

            {/* Telefon Input */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Telefon
              </label>
              <input
                type="text"
                name="telefon"
                value={formData.telefon}
                onChange={handleInputChange}
                className={`w-full border-b-2 border-gray-300 focus:ring-0 p-2 outline-none ${
                  isFocused.telefon
                    ? "border-2 border-black"
                    : "border-b-2 border-gray-300"
                }`}
                placeholder="Enter your phone number"
                onFocus={() => handleFocus("telefon")}
                onBlur={() => handleBlur("telefon")}
              />
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Service auswählen
              </label>
              <div
                className={`relative w-full focus-within:ring-0 p-2 outline-none ${
                  isFocused.service
                    ? "border-2 border-black"
                    : "border-b-2 border-gray-300"
                }`}
                onClick={() => setShowOptions(!showOptions)}
                onFocus={() => handleFocus("service")}
                onBlur={() => handleBlur("service")}
              >
                <input
                  type="text"
                  name="service"
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
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="bg-yellow-400 text-white px-4 py-3 rounded-2xl font-semibold hover:bg-yellow-500 transition-colors duration-300"
              >
                Absenden
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Second Column */}
      <div className="w-full md:w-1/2 bg-yellow-400 text-white rounded-lg p-6 shadow-lg flex flex-col justify-between">
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
