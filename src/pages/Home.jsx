import React from "react";
import Hero from "../components/Hero";
import HomeGallery from "../components/HomeGallery";
import Contact from "./Contact";
export default function Home() {
  return (
    <div>
      <div>
        <Hero />
        <HomeGallery />
        <Contact />
      </div>
    </div>
  );
}
