import React from "react";
import "./assets/Moda.css";
import Header from "../components/Header";
import ModaHero from "../components/ModaHero";
import ModaSec2 from "../components/ModaSec2";
import ModaSec3 from "../components/ModaSec3";
import Footer from "../components/Footer";
function Moda2024() {
  return (
    <div className="moda relative">
      <Header />
      <ModaHero />
      <ModaSec2 />
      <ModaSec3 />
      <Footer/>
    </div>
  );
}

export default Moda2024;
