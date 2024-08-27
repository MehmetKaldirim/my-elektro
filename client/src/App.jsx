import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
import Admin from "./pages/Admin";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Leistungen from "./pages/Leistungen";
import Uber from "./pages/Uber";
import PrivateRoute from "./components/PrivateRoute";
import Comments from "./pages/Comments";
import UpdateComment from "./pages/UpdateComment";
import Kontakt from "./pages/Contact";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenshutz";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="pt-16 md:pt-20 lg:pt-24">
        {/* Adjust padding for mobile and larger screens */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/uber" element={<Uber />} />
          <Route path="/kontakt" element={<Kontakt />} />

          <Route element={<PrivateRoute />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/comments" element={<Comments />} />
            <Route
              path="/updateComment/:commentId"
              element={<UpdateComment />}
            />
          </Route>
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </div>
      <CTA />
      <Footer />
    </BrowserRouter>
  );
}
