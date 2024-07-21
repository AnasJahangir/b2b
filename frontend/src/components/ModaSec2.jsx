import React from "react";

function ModaSec2() {
  return (
    <div className="flex justify-center text-[#fff] mt-10">
      <div className="flex flex-col items-center md:flex-row justify-end w-[80%] md:w-[50%] relative">
        <div className="md:absolute left-[-15%]">
          <h1 className="text-[40px] md:text-[80px] font-semibold  mt-10">
            IZA <span className="text-[#E4AE63]">CAPUZZO</span>
          </h1>
          <p>
            Nossa curadora de desscode para{" "}
            <span className="underline cursor-pointer">@anticlube</span> 2024.{" "}
            <br /> Por aqui nada é permanente.{" "}
            <span className="underline cursor-pointer">#Anticlube</span> Nossa
          </p>
          <p className="mt-10">
            <span className="font-bold">Izabelle Capuzzo</span>, é estilista e
            consultora de moda <br /> para grandes nomes no Brasil. Natural de
            Goiânia,
            <br /> ela é um dos elementos da cultura sneakerhead fora <br /> do
            eixo de São Paulo!
          </p>
        </div>
        <div className="mt-10 md:mt-0">
          <video controls muted width="300">
            <source
              src="https://video.wixstatic.com/video/ee5968_dfb3c33092f7482ab8ebdc4f328366ff/720p/mp4/file.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default ModaSec2;
