import React, { useState, useContext } from "react";
import Card from "../card/Card";
import CardShuffle from "../CardShuffle/CardShuffle";
import CardListContext from "../../context/CardListContext";
import Data from "../../assets/data/Data.json";
import Swiper from "../swiper/Swiper";

import CartucheraLogo from "../../assets/icons/cartuchera-logo.svg";

const CardGrid = () => {
  const typesCard = Data;
  console.log(typesCard);
  const [list, setList] = useState(typesCard);
  const shuffleList = list.sort(() => Math.random() - 0.5);

  const { kitFilter, typeFilter } = useContext(CardListContext);
  const { isMobile } = useContext(CardListContext);

  if (!isMobile) {
    return (
      <div className="p-4 flex flex-wrap content-start items-center ml-24">
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
  if (isMobile) {
    return (
      <div className=" ">
        <div className="flex border-2 py-4 justify-between">
          <img src={CartucheraLogo} alt="logo" className="w-20 ml-1" />
          <div className="flex">
            <a
              href="#"
              className="bg-black text-white w-19 h-6 mr-2 px-1 rounded mt-4 mr-4 "
            >
              INFO
            </a>
            <button>
              {/* <img src={Hamburguer} alt="" className="mr-4 mt-4" /> */}
            </button>
          </div>
        </div>
        <Swiper />
        <div className="mt-80 flex">
          <CardShuffle list={list} setList={setList} />
        </div>
      </div>
    );
  }
};

export default CardGrid;
