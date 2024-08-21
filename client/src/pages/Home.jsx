import React from "react";
import Hero from "../components/Hero";
import UnsereLeistungen from "../components/UnsereLeistungen";
import Wie from "../components/Wie";
import Testimonials from "../components/Testimonials";
import UnsereArbeit from "../components/UnsereArbeit";

export default function Home() {
  return (
    <div>
      <Hero />
      <UnsereLeistungen />
      <Wie />
      <Testimonials />
      <UnsereArbeit />
    </div>
  );
}
