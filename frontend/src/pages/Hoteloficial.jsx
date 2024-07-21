import React, { useState } from "react";
import Header from "../components/Header";
import "./assets/Hoteloficial.css";
import HotelSlider from "../components/HotelSlider";
import Footer from "../components/Footer";

function Hoteloficial() {
  return (
    <div className="text-white">
      <Header />
      <div className="offhero min-h-[80vh] px-10 md:px-52 py-10 text-white">
        <img
          src="https://static.wixstatic.com/media/ee5968_72f9185624484a21849fc065d3874918~mv2.png/v1/fill/w_131,h_131,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO_HOTEL_OFICIAL-removebg-preview_edit.png"
          alt=""
        />
        <h1 className="text-[30px]">
          Hotel Oficial <br /> Brasília Palace
        </h1>
        <p className="mt-10 font-semibold text-[14px]">
          Um símbolo da arquitetura modernista, projetado por Oscar Niemeyer e{" "}
          <br />
          presenteado com duas grandes obras do artista Athos Bulcão.
        </p>
        <p className="mt-5 font-semibold text-[14px]">
          Hospedar-se no Palace é viver e sentir a própria história da capital
          federal, <br /> lugar onde a Anticlube tem suas raízes
        </p>
      </div>
      <div className="offsec2 flex justify-center items-center min-h-[80vh] px-10 md:px-52 py-10 text-white">
        <div>
          <p className="mt-10 font-semibold text-[14px]">
            O hotel está localizado às margens do Lago <br /> Paranoá e os
            cúmplices acessam novas <br /> experiências.
          </p>
          <img
            src="https://static.wixstatic.com/media/ee5968_6fa910d7f51c42ee91e921f4932e8635~mv2.png/v1/fill/w_192,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ee5968_6fa910d7f51c42ee91e921f4932e8635~mv2.png"
            alt=""
            className="mt-2 "
          />
        </div>
      </div>
      <div className="offsec3 flex justify-center items-center min-h-[80vh] py-10 text-white">
        <div className="w-[70%] flex justify-between items-center">
          <img
            src="https://static.wixstatic.com/media/ee5968_9cb9353636df415e950687d0b472370c~mv2.jpg/v1/fill/w_474,h_843,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ee5968_9cb9353636df415e950687d0b472370c~mv2.jpg"
            alt=""
            className="w-[50%]"
          />
          <img
            src="https://static.wixstatic.com/media/ee5968_004a3f04a8bf49afb449af127b035abe~mv2.jpg/v1/fill/w_471,h_838,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ee5968_004a3f04a8bf49afb449af127b035abe~mv2.jpg"
            alt=""
            className="w-[50%]"
          />
        </div>
      </div>
      <div className="offsec4 flex flex-col gap-5 md:flex-row justify-between items-center px-10 md:px-52 py-10">
        <div className="w-[100%] md:w-[40%]">
          <h1 className="text-[30px] font-bold">Quarto Superior</h1>
          <p className="text-[14px] font-bold mt-8">
            Apartamento com 30m² com varanda, uma cama de casal ou duas camas de
            solteiro. Todos possuem TV com canais por assinatura, mesa,
            frigobar, ar condicionado split, secador de cabelo e cofre. Inclusa
            Internet Wifi de alta velocidade e buffet completo de café da manhã.
            Os amenities são da marca L'Occitane au Brésil. Apartamentos com
            vista para jardim, painel do Athos Bulcão ou lago.
          </p>
        </div>
        <HotelSlider />
      </div>
      <Footer />
    </div>
  );
}

export default Hoteloficial;
