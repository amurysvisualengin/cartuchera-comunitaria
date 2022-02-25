import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const SimpleSlider = (props) => {
  const { cardContent } = props;

  return (
    <div className="xl:max-w-4xl">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        swipeable={true}
        emulateTouch={true}
      >
        {cardContent.picture.map((e, i) => (
          <img src={e.img} alt="" key={i} />
        ))}
      </Carousel>
    </div>
  );
};

export default SimpleSlider;
