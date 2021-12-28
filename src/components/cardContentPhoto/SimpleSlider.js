import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const SimpleSlider = () => {
  return (
    <div className="max-w-4xl">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        swipeable={true}
        emulateTouch={true}
      >
        <div>
          <img src="https://www.seekpng.com/png/full/190-1906751_dog-bowl-hunting-dog.png" />
        </div>
        <div>
          <img src="https://www.seekpng.com/png/full/190-1906751_dog-bowl-hunting-dog.png" />
        </div>
        <div>
          <img src="https://www.seekpng.com/png/full/190-1906751_dog-bowl-hunting-dog.png" />
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2020/05/15/11/49/pet-5173354_640.jpg" />
        </div>
        <div>
          <img src="https://5.imimg.com/data5/KV/VU/MY-3315244/long-ear-500x500.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default SimpleSlider;
