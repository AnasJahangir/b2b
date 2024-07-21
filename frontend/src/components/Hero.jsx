// src/components/Hero.js
import React from "react";

const Hero = () => {
  return (
    <section className="bg-cover bg-center  text-white">
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center py-10">
        <div className="shadow-md flex justify-center" >
          <video controls muted autoPlay className="w-[80%] ">
            <source
              src="https://video.wixstatic.com/video/ee5968_bb55fb4e89684976b39e70b9b83623ab/1080p/mp4/file.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h1 className="text-[33px] font-bold mt-10">
            A EXCELÊNCIA É IRREVERSÍVEL
          </h1>
          <p className="text-[#E4AE63] text-[25px] mt-5">
            Transformar é transcender.
          </p>
          <div className="flex flex-col justify-center items-center">
            <button className="bg-[rgb(205,85,33)] block hover:bg-[rgb(228,174,99)] hover:text-black transition font-semibold py-2  w-[150px] text-[13px] rounded-lg">
              CADASTRO
            </button>
            <button className="bg-[rgb(205,85,33)] mt-3 block hover:bg-[rgb(228,174,99)] hover:text-black transition font-semibold py-2 w-[150px] text-[13px] rounded-lg">
              VENDAS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
