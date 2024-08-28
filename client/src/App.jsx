import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

// Direct import for the Home page (not lazy-loaded)
import Home from "./pages/Home";

// Lazy loading for other pages
const Admin = lazy(() => import("./pages/Admin"));
const Leistungen = lazy(() => import("./pages/Leistungen"));
const Uber = lazy(() => import("./pages/Uber"));
const Kontakt = lazy(() => import("./pages/Contact"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenshutz"));
const SignIn = lazy(() => import("./pages/SignIn"));
const Comments = lazy(() => import("./pages/Comments"));
const UpdateComment = lazy(() => import("./pages/UpdateComment"));

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="pt-16 md:pt-20 lg:pt-24">
        {/* Adjust padding for mobile and larger screens */}
        <Routes>
          {/* Home page loaded directly */}
          <Route path="/" element={<Home />} />

          <Suspense fallback={<div>Loading...</div>}>
            {/* Lazy-loaded routes */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/leistungen" element={<Leistungen />} />
            <Route path="/uber" element={<Uber />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />

            <Route element={<PrivateRoute />}>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/comments" element={<Comments />} />
              <Route
                path="/updateComment/:commentId"
                element={<UpdateComment />}
              />
            </Route>
          </Suspense>
        </Routes>
      </div>
      <CTA />
      <Footer />
    </BrowserRouter>
  );
}
