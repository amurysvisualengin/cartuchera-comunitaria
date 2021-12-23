import React from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderPhoto = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="max-w-4xl">
      <Slider {...settings}>
        <div>
          <img
            src="https://www.seekpng.com/png/full/190-1906751_dog-bowl-hunting-dog.png"
            className="w-102"
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2020/05/15/11/49/pet-5173354_640.jpg"
            className="w-102"
          />
        </div>
        <div>
          <img
            src="https://5.imimg.com/data5/KV/VU/MY-3315244/long-ear-500x500.jpg"
            className="w-102"
          />
        </div>
        <div>
          <img
            src="https://static.onecms.io/wp-content/uploads/sites/34/2018/08/12170314/dog-with-bowl-0818.jpg"
            className="w-102"
          />
        </div>
        <div>
          <img
            src="https://static.onecms.io/wp-content/uploads/sites/34/2018/08/12170314/dog-with-bowl-0818.jpg"
            className="w-102"
          />
        </div>
        <div>
          <img
            src="https://static.onecms.io/wp-content/uploads/sites/34/2018/08/12170314/dog-with-bowl-0818.jpg"
            className="w-102"
          />
        </div>
        <div>
          <img
            src="https://static.onecms.io/wp-content/uploads/sites/34/2018/08/12170314/dog-with-bowl-0818.jpg"
            className="w-102"
          />
        </div>
      </Slider>
    </div>
  );
};
export default SliderPhoto;
