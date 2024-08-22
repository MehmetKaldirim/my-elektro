import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
import Admin from "./pages/Admin";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Leistungen from "./pages/Leistungen";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="pt-16 md:pt-20 lg:pt-24">
        {/* Adjust padding for mobile and larger screens */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/leistungen" element={<Leistungen />} />
        </Routes>
      </div>
      <CTA />
      <Footer />
    </BrowserRouter>
  );
}
