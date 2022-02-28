import React from "react";
import { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "./Carousel.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardListContext from "../../context/CardListContext";

const Carousel = () => {
  const { isMobile, carouselPhotosHumacao } = useContext(CardListContext);

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
      {carouselPhotosHumacao.map((e, i) => (
        <img src={e.img} alt="" key={i} />
      ))}
    </Slider>
  );
};

export default Carousel;
