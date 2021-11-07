import React, { useContext, useState } from "react";
import Data from "../../assets/data/Data.json";
import Card from "../card/Card";
import "./Swiper.css";
// import ColorFilterMobile from "../colorFilterMobile/ColorFilterMobile";
import CardListContext from "../../context/CardListContext";

import MobileSwiper from "react-tinder-card";

function Swiper() {
  const card = Data;
  const { changeColorMobile } = useContext(CardListContext);
  const click = () => {};

  return (
    <div>
      {card.map((element, index) => (
        /* element.color === changeColorMobile && (
            ) */
        <MobileSwiper
          className="absolute"
          key={index}
          preventSwipe={["up", "down"]}
        >
          <div onTouchStart={click}>
            <Card
              key={index}
              cardNumber={element.cardNumber}
              title={element.title}
              img={element.img}
              color={element.color}
              type={element.type}
              cardContent={element.cardType}
            />
          </div>
        </MobileSwiper>
      ))}
      {/* <ColorFilterMobile /> */}
    </div>
  );
}

export default Swiper;
