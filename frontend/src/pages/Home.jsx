import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import "./assets/Home.css";
import Featured from "../components/Featured";
import Sec3 from "../components/Sec3";
import Phases from "../components/Phases";
import Sec5 from "../components/Sec5";
import Sec6 from "../components/Sec6";
import Sec7 from "../components/Sec7";
import Sec8 from "../components/Sec8";
import Footer from "../components/Footer";
function Home() {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Featured />
      <Sec3 />
      <Phases />
      <Sec5 />
      <Sec6 />
      <Sec7 />
      <Sec8 />
      <Footer />
    </div>
  );
}

export default Home;
