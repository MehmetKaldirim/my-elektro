import React from "react";
import certi from "../assets/certi.png";

export default function Uber() {
  return (
    <div>
      <div className="bg-white">
        <h2 className="text-3xl">Über Uns</h2>
      </div>
      <div className="flex flex-col bg-yellow-400 py-10 items-center justify-center">
        <h2 className="text-3xl">Zertifizierungen</h2>
        <div className="shadow-md flex flex-col md:flex-row bg-yellow-400">
          <div className="flex flex-col my-6 md:my-0 md:mx-6 justify-center items-center">
            <img src={certi} alt="" />
            <h3>TÜV geprüfter Solartechniker</h3>
          </div>
          <div className="flex flex-col my-6 md:my-0 md:mx-6 justify-center items-center">
            <img src={certi} alt="" />
            <h3>TÜV geprüfter Solartechniker</h3>
          </div>
          <div className="flex flex-col my-6 md:my-0 md:mx-6 justify-center items-center">
            <img src={certi} alt="" />
            <h3>TÜV geprüfter Solartechniker</h3>Ì
          </div>
        </div>
      </div>
    </div>
  );
}
