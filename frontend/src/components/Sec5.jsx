import React from "react";
import Sec1 from "./../assets/sec5.webp";
function Sec5() {
  return (
    <div className="h-[439px] flex ">
      <div>
        <img src={Sec1} alt="" />
      </div>
      <div className="bg-gray-50 w-[50%] px-5 py-5">
        <div>
          <img
            src="https://lirp.cdn-website.com/9b44ac04/dms3rep/multi/opt/logo+brasilia+palace-1920w.PNG"
            alt=""
            className="w-[130px]"
          />
          <div className="text-[16px] font-thin mt-10">
            <h1>Hotel Oficial </h1>
            <p className="w-[60%] mt-5">
              Um símbolo da arquitetura modernista, o Brasília Palace foi
              projetado por Oscar Niemeyer e presenteado com duas grandes obras
              do artista Athos Bulcão. Hospedar-se no Palace é viver e sentir a
              própria história da capital federal. O hotel está localizado às
              margens do Lago Paranoá e próximo ao Palácio da Alvorada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec5;
