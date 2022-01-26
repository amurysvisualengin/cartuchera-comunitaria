import React from "react";
import { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "./Carousel.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardListContext from "../../context/CardListContext";

const Carousel = () => {
  const { isMobile, carouselPhotosCarolina } = useContext(CardListContext);
  carouselPhotosCarolina.map((e, i) => console.log(e.img));

  const settings = {
    dots: true,
    infinite: true,
    spedd: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  if (!isMobile) {
    settings.slidesToShow = 3.5;
  }
  if (isMobile) {
    settings.slidesToShow = 1;
  }
  return (
    <Slider {...settings}>
      {carouselPhotosCarolina.map((e, i) => (
        <img src={e.img} alt="" />
      ))}
    </Slider>
  );
};

export default Carousel;
