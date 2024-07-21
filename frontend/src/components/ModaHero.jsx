import React from "react";
import Logo from "../assets/Logo.png";
function ModaHero() {
  return (
    <div className="relative h-[569px] md:h-[769px]">
      <div className="flex justify-center absolute w-[100%] top-0 z-10">
        <img
          src="https://static.wixstatic.com/media/ee5968_3d0f40c9dea94c8b96f027b9c80bb89a~mv2.png/v1/fill/w_959,h_342,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ee5968_3d0f40c9dea94c8b96f027b9c80bb89a~mv2.png"
          alt=""
        />
      </div>
      <div className="flex justify-center absolute w-[100%] top-[20%]">
        <img
          src="https://static.wixstatic.com/media/ee5968_2c6c29b3acc74993bf0446df5010ca8f~mv2.png/v1/fill/w_970,h_342,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ee5968_2c6c29b3acc74993bf0446df5010ca8f~mv2.png"
          alt=""
        />
      </div>
      <div className=" justify-end absolute right-[5%] top-[26%] rotate-[90deg] hidden md:flex">
        <img src={Logo} alt="" className="w-[300px]" />
      </div>
      <div className="flex justify-center absolute w-[100%] bottom-[12%] z-10">
        <img src={Logo} alt="" className="w-[160px]" />
      </div>
      <div className="flex justify-center absolute w-[100%] bottom-[5%] z-10">
        <button className="bg-[rgb(205,85,33)]  mt-3 text-white block hover:bg-[rgb(228,174,99)] hover:text-black transition  font-bold py-3 w-[200px] text-[12px]">
          BAIXAR DRESS CODE
        </button>
      </div>
      <div className="flex justify-center absolute w-[100%] top-0">
        <img
          src="https://static.wixstatic.com/media/ee5968_7f46070fb22c48e4b5f7e9bc908aa468~mv2.png/v1/crop/x_0,y_23,w_1069,h_1090/fill/w_754,h_769,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Mulher%20que%20vai%20no%20meio.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default ModaHero;
