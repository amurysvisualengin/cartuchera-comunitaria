import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CardListContext from "../../context/CardListContext";
import { useContext } from "react";

const SimpleSlider = (props) => {
  const { cardContent } = props;
  // console.log(cardContent.picture.map((e, i) => console.log(e.img)));

  return (
    <div className="max-w-4xl">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        swipeable={true}
        emulateTouch={true}
      >
        {cardContent.picture.map((e, i) => (
          <img src={e.img} alt="" />
        ))}
      </Carousel>
    </div>
  );
};

export default SimpleSlider;
