import React from "react";

function Sec3() {
  return (
    <div className="text-center py-10 px-10 md:px-32">
      <div className="text-[#fff]">
        <h1 className="text-[30px] text-[#E2AC1C] font-bold">
          SOMOS A EXCEÇÃO!
        </h1>
        <h3 className="text-[24px] font-semibold mt-5">
          A forma palpável de arrepiar a pele.
        </h3>
        <p className="mt-1">
          Um clã formado por pessoas de diferentes tribos, <br />
          porque o que noS une é maior do que as aparências.
        </p>
      </div>
      <div className="flex flex-col gap-5 lg:flex-row justify-between items-center mt-10">
        <img
          src="https://static.wixstatic.com/media/94bb5f_cb4fdd9685b34d74a558675acfb13102~mv2.jpg/v1/fill/w_277,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/94bb5f_cb4fdd9685b34d74a558675acfb13102~mv2.jpg"
          alt=""
          className="h-[426px] w-[277px] rounded-full border"
        />
        <img
          src="https://static.wixstatic.com/media/94bb5f_db303f45807345e8ac6d63d83e39d14f~mv2.jpg/v1/fill/w_277,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/94bb5f_db303f45807345e8ac6d63d83e39d14f~mv2.jpg"
          alt=""
          className="h-[426px] w-[277px] rounded-full border"
        />
        <img
          src="https://static.wixstatic.com/media/94bb5f_876993dca1244e3588744f127db7e8a2~mv2.png/v1/fill/w_277,h_426,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/94bb5f_876993dca1244e3588744f127db7e8a2~mv2.png"
          alt=""
          className="h-[426px] w-[277px] rounded-full border"
        />
      </div>
      <div className="mt-10">
        <h1 className="bg-black text-white inline-block text-[20px] font-medium">
          Somos como uma explosão fora de controle e bagunçamos
        </h1>
        <br />
        <h1 className="bg-black text-white inline-block text-[20px] font-medium mt-1">
          todos os conceitos de padrões e receitas pré-definidas.
        </h1>
      </div>
    </div>
  );
}

export default Sec3;
