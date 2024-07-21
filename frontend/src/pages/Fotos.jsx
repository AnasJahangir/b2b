import React from "react";
import "./assets/Fotos.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logo from "../assets/Logo.png";
function Fotos() {
  return (
    <div className="fotos-bg min-h-[100vh]">
      <Header />
      <div className=" flex flex-col justify-center items-center ">
        <img src={Logo} className="w-[50%]" alt="" />
        <h1 className="text-[18px] md:text-[40px] text-[#CD5521] font-bold">
          ACREDITE, VOCÊ VAI OUVIR FALAR!
        </h1>
        <div className="my-20">
          <button className="bg-[rgb(205,85,33)]  mt-3 text-white block hover:bg-[rgb(228,174,99)] hover:text-black transition  font-bold py-3 w-[200px] text-[13px] rounded-lg">
            FOTOS 2023
          </button>
          <button className="bg-[rgb(205,85,33)]  mt-5 text-white block hover:bg-[rgb(228,174,99)] hover:text-black transition  font-bold py-3 w-[200px] text-[13px] rounded-lg">
            FOTOS 2024 CAMILA
          </button>
          <button className="bg-[rgb(205,85,33)]  mt-5 text-white block hover:bg-[rgb(228,174,99)] hover:text-black transition  font-bold py-3 w-[200px] text-[13px] rounded-lg">
            FOTOS 2024 HUGO
          </button>
          <button className="bg-[rgb(205,85,33)]  mt-5 text-white block hover:bg-[rgb(228,174,99)] hover:text-black transition  font-bold py-3 w-[200px] text-[13px] rounded-lg">
            FOTOS 2024 HEIZZO
          </button>
          <button className="bg-[rgb(205,85,33)]  mt-5 text-white block hover:bg-[rgb(228,174,99)] hover:text-black transition  font-bold py-3 w-[200px] text-[13px] rounded-lg">
            FOTOS 2024 MATHEUS
          </button>
          <button className="bg-[rgb(205,85,33)]  mt-5 text-white block hover:bg-[rgb(228,174,99)] hover:text-black transition  font-bold py-3 w-[200px] text-[13px] rounded-lg">
            FOTOS 2024 MAURICIO
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Fotos;
