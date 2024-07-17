import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-[10px]">Realização</p>
        <div className="mt-4">
          <a
            href="https://www.influ.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            influ
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white ml-4"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
