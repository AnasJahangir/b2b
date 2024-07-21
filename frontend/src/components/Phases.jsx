import React from "react";

function Phases() {
  return (
    <section className=" flex flex-col md:flex-row justify-center md:justify-end">
      <div className="phase-1 md:w-[33%] px-10 md:px-20 py-5 flex flex-col justify-cente items-center">
        <h1 className="text-[20px] text-[#E4AE63] font-semibold text-center ">
          FASE1 - Venda de Pacotes
        </h1>
        <p className="text-white text-[14px] mt-20">
          | 27.2 |{" "}
          <span className="text-[#E4AE63]"> Cúmplice Pass (ESGOTADO)</span>{" "}
          (hotel oficial + ingresso + translado exclusivo do hotel)
        </p>
        <p className="text-white text-[14px] mt-10">
          | 27.2 |{" "}
          <span className="text-[#E4AE63]">
            {" "}
            Cúmplice Pass Double (ESGOTADO){" "}
          </span>{" "}
          ( hotel oficial para 2 pessoas + 2 ingressos + translado exclusivo do
          hotel para 2 pessoas)
        </p>
        <p className="text-white text-[14px] mt-10">
          * Hospedagem 2 diárias em quarto superior no Brasilia Palace Hotel,.
          Check-in dia 21/6, a partir das 14h, e Late check-out dia 23/6 até as
          14h. *Venda pelo WhatsApp (Sem taxa da Tiqueteira) WhatsApp Oficial:
          +55 61 9964-6866
        </p>
      </div>
      <div className="phase-2 md:w-[33%] px-10 md:px-20 py-5 flex flex-col justify-cente items-center">
        <h1 className="text-[20px] text-[#E4AE63] font-semibold text-center ">
          FASE2 - Pré Venda TICKETS
        </h1>
        <p className="text-white text-[14px] mt-20">
          | 04.3 |{" "}
          <span className="text-[#E4AE63]">
            Pré-Venda lote exclusivo (ESGOTADO){" "}
          </span>{" "}
          Passkey secreta <br />
          (ingresso + translado ida e volta )
        </p>
        <p className="text-white text-[14px] mt-10">
          | 06.3 |{" "}
          <span className="text-[#E4AE63]">Pré-Venda Clã (ESGOTADO)</span>{" "}
          Passkey divulgada apenas para membros cadastrados
          <br />
          (ingresso + translado ida e volta )
        </p>
      </div>
      <div className="phase-3 md:w-[33%] px-10 md:px-20 py-5 flex flex-col justify-cente items-center">
        <h1 className="text-[20px] text-[#E4AE63] font-semibold text-center ">
          FASE3 - VENDA GERAL TICKETS
        </h1>
        <p className="text-white text-[14px] mt-14">
          | 12.3 |{" "}
          <span className="text-[#E4AE63]">Primeiro Lote (ESGOTADO)</span>{" "}
          <br />
          (ingresso + translado ida e volta )
        </p>
        <p className="text-white text-[14px] mt-5">
          | 12.3 |{" "}
          <span className="text-[#E4AE63]">Segundo Lote (ESGOTADO) </span>{" "}
          <br />
          (ingresso + translado ida e volta )
        </p>
        <p className="text-white text-[14px] mt-5">
          | 15.3 |{" "}
          <span className="text-[#E4AE63]">Terceiro Lote (ESGOTADO) </span>{" "}
          <br />
          (ingresso + translado ida e volta )
        </p>
        <p className="text-white text-[14px] mt-5">
          | 10.5 |{" "}
          <span className="text-[#E4AE63]">Quarto Lote (ESGOTADO) </span> <br />
          (ingresso + translado ida e volta )
        </p>
        <p className="text-white text-[14px] mt-5">
          | 06.06 |{" "}
          <span className="text-[#E4AE63]">Quarto Lote (ESGOTADO) </span> <br />
          (ingresso + translado ida e volta )
        </p>
        <p className="text-white text-[14px] mt-5">
          | 19.06 | <span className="text-[#E4AE63]">Sexto Lote </span> <br />
          (ingresso + translado ida e volta )
        </p>
        <p className="text-white text-[14px] mt-5">
          *Todos os ingressos são pessoais e intransferíveis.
        </p>
        <div className="flex flex-col justify-center items-center mt-10">
          <button className="bg-[rgb(205,85,33)] text-white block hover:bg-[rgb(228,174,99)] hover:text-black transition font-semibold py-2  w-[150px] text-[13px] rounded-lg">
            CADASTRO
          </button>
          <button className="bg-[rgb(205,85,33)] mt-3  text-white block hover:bg-[rgb(228,174,99)] hover:text-black transition font-semibold py-2 w-[150px] text-[13px] rounded-lg">
            VENDAS
          </button>
        </div>
      </div>
    </section>
  );
}

export default Phases;
