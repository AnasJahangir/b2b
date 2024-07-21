import React from "react";

function ModaSec3() {
  return (
    <div className="flex justify-center ">
      <div className="w-[80%] md:w-[50%] flex flex-col gap-5 md:flex-row justify-between items-center  my-20 ">
        <div className="text-[12px] text-white w-[100%] md:w-[40%]">
          <p>
            Um dress code é um ato de manifestação, é uma forma de se revelar.
          </p>
          <p className="mt-10">
            Queremos despertar em você a inquietude e um olhar diferenciado para
            a proposta.
          </p>
          <p className="mt-10 font-bold">
            Desafie sua imaginação e confira, a seguir, as dicas da nossa
            curadora de moda, Iza Capuzzo
          </p>
          <p className="mt-10">
            Esse ano queremos propor novas cores, texturas e estilos. Aqui nada
            permanece o mesmo e estamos em constante mudança
          </p>
          <button className="bg-[rgb(205,85,33)]  mt-3 text-white block hover:bg-[rgb(228,174,99)] hover:text-black transition  font-bold py-2 w-full text-[12px]">
            BAIXAR DRESS CODE
          </button>
        </div>
        <div className="w-[100%] md:w-[60%]">
          <img
            src="https://static.wixstatic.com/media/ee5968_24dfefa01218415790222ccfec604fcc~mv2.png/v1/crop/x_0,y_215,w_1478,h_1113/fill/w_635,h_479,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MIB%20HOMENS%20DE%20PRETO.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ModaSec3;
