import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function HotelSlider() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    waitForAnimate: false,
  };
  return (
    <div className="slider-container mt-10 md:mt-0 w-[100%] md:w-[50%] ">
      <Slider {...settings}>
        <div>
          <img src="https://static.wixstatic.com/media/ee5968_5544b5771add49fba2e438d12f97ed06~mv2.webp/v1/fit/w_1337,h_70,q_90/ee5968_5544b5771add49fba2e438d12f97ed06~mv2.webp" className="w-[100%] rounded-lg" />
        </div>
        <div>
          <img src="https://static.wixstatic.com/media/ee5968_0ef6ee364a4342afb3ae584df8bfc312~mv2.jpeg/v1/fit/w_1337,h_70,q_90/ee5968_0ef6ee364a4342afb3ae584df8bfc312~mv2.webp" className="w-[100%] rounded-lg" />
        </div>
        <div>
          <img src="https://static.wixstatic.com/media/ee5968_26d3c6e4301e4a7a82f4c8d0a3e45f88~mv2.jpeg/v1/fit/w_1337,h_70,q_90/ee5968_26d3c6e4301e4a7a82f4c8d0a3e45f88~mv2.webp"  className="w-[100%] rounded-lg"/>
        </div>
        <div>
          <img src="https://static.wixstatic.com/media/ee5968_7de0d756f236497c914eb79994f5a01a~mv2.webp/v1/fit/w_1337,h_70,q_90/ee5968_7de0d756f236497c914eb79994f5a01a~mv2.webp" className="w-[100%] rounded-lg" />
        </div>
      </Slider>
    </div>
  );
}

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "" }}
      onClick={onClick}
    />
  );
};
export default HotelSlider;
