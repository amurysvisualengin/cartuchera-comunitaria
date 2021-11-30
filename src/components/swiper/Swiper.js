import React, { useContext } from "react";
import Data from "../../assets/data/Data.json";
import Card from "../card/Card";
import "./Swiper.css";

import CardListContext from "../../context/CardListContext";
import MobileSwiper from "react-tinder-card";

import FirstCard from "../../assets/icons/first-card-mobile.svg";

function Swiper() {
  const card = Data;
  const { changeColorMobile } = useContext(CardListContext);
  const { typeMobile, isTablet } = useContext(CardListContext);

  return (
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
                className="swipe right-3 left-3 top-24 bottom-0"
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
