import React from "react";
import Image from "./../assets/sec2.png";
function Featured() {
  return (
    <section>
      <img
        src={Image}
        alt="Image 1"
        className="w-[100%] h-[100%] object-cover"
      />
    </section>
  );
}

export default Featured;
