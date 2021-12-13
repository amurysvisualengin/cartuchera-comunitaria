import React from "react";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    spedd: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://www.kindpng.com/picc/m/772-7720806_camas-para-perros-de-espuma-hd-png-download.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://www.kindpng.com/picc/m/772-7720806_camas-para-perros-de-espuma-hd-png-download.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://www.kindpng.com/picc/m/772-7720806_camas-para-perros-de-espuma-hd-png-download.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://www.kindpng.com/picc/m/772-7720806_camas-para-perros-de-espuma-hd-png-download.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://www.kindpng.com/picc/m/772-7720806_camas-para-perros-de-espuma-hd-png-download.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://www.kindpng.com/picc/m/772-7720806_camas-para-perros-de-espuma-hd-png-download.png"
          alt=""
        />
      </div>
    </Slider>
  );
};

export default Carousel;
