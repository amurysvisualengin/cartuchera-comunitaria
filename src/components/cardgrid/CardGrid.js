import React, { useState, useContext } from "react";
import Card from "../card/Card";
import CardShuffle from "../CardShuffle/CardShuffle";
import CardListContext from "../../context/CardListContext";
import Data from "../../assets/data/Data.json";
import Swiper from "../swiper/Swiper";
import ColorFilterMobile from "../colorFilterMobile/ColorFilterMobile";
import CartucheraLogo from "../../assets/icons/cartuchera-logo.svg";
import TypeFilterMobile from "../typeFilterMobile/TypeFilterMobile";
import Header from "../header/Header";
import CardContentAudio from "../cardContentAudio/CardContentAudio";

const CardGrid = () => {
  const typesCard = Data;

  const [list, setList] = useState(typesCard);
  const shuffleList = list.sort(() => Math.random() - 0.5);

  const { kitFilter, typeFilter, cardInfo } = useContext(CardListContext);
  const { isMobile, isExpand, propTitle } = useContext(CardListContext);

  if (!isMobile) {
    return (
      <div className="p-4 flex flex-wrap content-start items-center ml-24 mt-16">
        <div>
          <CardShuffle list={list} setList={setList} />
        </div>

        {shuffleList.map((element, index) => (
          <div>
            {((kitFilter === "" && typeFilter === "") ||
              (kitFilter === "" && typeFilter === element.typeId) ||
              (kitFilter === element.id && typeFilter === element.typeId) ||
              (kitFilter === element.id && typeFilter === "")) && (
              <Card
                key={index}
                title={element.title}
                img={element.img}
                color={element.color}
                type={element.type}
                cardContent={element.cardType}
                cardNumber={element.cardNumber}
              />
            )}
          </div>
        ))}
      </div>
    );
  }
  console.log(isExpand, "cardgrid");
  // console.log(cardInfo);
  if (isMobile) {
    return (
      <div>
        {!isExpand && (
          <div className=" " style={{ background: "#f5e3b0" }}>
            <div
              className="flex border-2 py-4 justify-between mb-5"
              style={{ background: "#fff" }}
            >
              <img src={CartucheraLogo} alt="logo" className="w-20 ml-1" />
              <div className="flex">
                <a
                  href="https://www.youtube.com"
                  className="bg-black text-white w-19 h-6 px-1 rounded mt-4 mr-2 "
                >
                  INFO
                </a>
                <button></button>
              </div>
            </div>

            <Swiper />
            <div className="mt-80 flex">
              <CardShuffle list={list} setList={setList} />
            </div>
            <div
              className="border-2 border-white items-center h-20 mt-72 flex"
              style={{ background: "#fff" }}
            >
              <ColorFilterMobile />
              <TypeFilterMobile />
            </div>
          </div>
        )}
        {isExpand && (
          <div>
            {cardInfo[3] === "Audiovisual" && (
              <CardContentAudio
                cardContent={cardInfo[4]}
                title={cardInfo[0]}
                color={cardInfo[2]}
                img={cardInfo[1]}
                type={cardInfo[3]}
                handleShowExpandFalse={cardInfo[5]}
              />
            )}
          </div>
        )}
      </div>
    );
  }
};

export default CardGrid;
