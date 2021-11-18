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
  const { changeColorMobile } = useContext(CardListContext);
  const { typeMobile, isTablet } = useContext(CardListContext);
  const { setIsExpand, setCardInfo } = useContext(CardListContext);
  let timer = 0;
  let isMove = false;

  /* const handleTouchStart = () => {
    timer = 0;
    setIsExpand(false);
    setInterval(() => {
      timer++;
    }, 50);
  };

  const handleTouchMove = () => {
    isMove = true;
  };

  const handleTouchEnd = () => {
    if (timer > 10 && isMove) {
      setIsExpand(false);
    }
    if (timer < 10 && isMove === false) {
      setIsExpand(true);
    }

    timer = 0;
    isMove = false;
  };
  setIsExpand(false) */ return (
    <div>
      <div className={`${isTablet > 766 ? "w-96.5 ml-auto mr-auto" : "block"}`}>
        {card.map(
          (element, index) =>
            // Conditional colors and card types
            ((changeColorMobile === "" && typeMobile === "") ||
              (changeColorMobile === element.color && typeMobile === "") ||
              (changeColorMobile === element.color &&
                typeMobile === element.typeId) ||
              (changeColorMobile === "" && typeMobile === element.typeId)) && (
              <MobileSwiper
                className="swipe"
                key={index}
                preventSwipe={["up", "down"]}
              >
                <div>
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
                <div></div>
              </MobileSwiper>
            )
        )}
      </div>
    </div>
  );
}

export default Swiper;
