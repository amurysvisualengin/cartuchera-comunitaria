import React, { useContext, useState } from "react";
import Data from "../../assets/data/Data.json";
import Card from "../card/Card";
import "./Swiper.css";
// import ColorFilterMobile from "../colorFilterMobile/ColorFilterMobile";
import CardListContext from "../../context/CardListContext";
import MobileSwiper from "react-tinder-card";
import ColorFilterMobile from "../colorFilterMobile/ColorFilterMobile";

function Swiper() {
  const card = Data;
  const { changeColorMobile, isExpand } = useContext(CardListContext);
  const click = () => {};
  // console.log(isExpand);
  return (
    <div>
      <div className="block">
        {card.map(
          (element, index) =>
            element.color === changeColorMobile && (
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
            )
        )}
      </div>
      <div>
        {card.map(
          (element, index) =>
            changeColorMobile === "" && (
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
            )
        )}
      </div>
    </div>
  );
}

export default Swiper;
