import React, { useContext } from "react";
import Data from "../../assets/data/Data.json";
import Card from "../card/Card";
import "./Swiper.css";
import StarterMobile from "../../assets/icons/starter-mobile.svg";
import CardListContext from "../../context/CardListContext";
import MobileSwiper from "react-tinder-card";

import FirstCard from "../../assets/icons/first-card-mobile.svg";
import { useEffect } from "react";
import { useState } from "react";

function Swiper() {
  // let card = Data;

  const { changeColorMobile, setChangeColorMobile } =
    useContext(CardListContext);

  const { typeMobile, isTablet, firstTouch, setFirstTouch } =
    useContext(CardListContext);

  const { card, setCard } = useContext(CardListContext);

  const handleReload = () => {
    setCard((prevCard) => [...prevCard].sort(() => Math.random() - 0.5));

    console.log("handlereload");
    console.log(card);
  };

  return (
    <div
      className="absolute top-0 bottom-0 right-0 left-0 -z-10"
      style={{ backgroundColor: "#f5e3b0" }}
    >
      <div className={`${isTablet > 766 ? "w-96.5 ml-auto mr-auto" : "block"}`}>
        {
          <div onTouchStart={() => handleReload()}>
            <MobileSwiper
              className="swipe right-3 left-3 top-24 bottom-0"
              key={-2}
              preventSwipe={["up", "down", "left", "right"]}
            >
              <Card title="Reload" color="black" cardContent="disabled" />
            </MobileSwiper>
          </div>
        }

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
              </MobileSwiper>
            )
        )}

        {!firstTouch && (
          <MobileSwiper
            className="swipe right-3 left-3 top-24 bottom-0"
            key={-1}
            preventSwipe={["up", "down"]}
            onSwipe={() => setFirstTouch(true)}
          >
            <Card
              title="Testing"
              color="black"
              img={StarterMobile}
              cardContent="disabled"
            />
          </MobileSwiper>
        )}
      </div>
    </div>
  );
}

export default Swiper;
