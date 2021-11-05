import React, { useState, useContext } from "react";
import Card from "../card/Card";
import CardShuffle from "../CardShuffle/CardShuffle";
import CardListContext from "../../context/CardListContext";
import Data from "../../assets/data/Data.json";

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
              />
            )}
          </div>
        ))}
      </div>
    );
  }
  if (isMobile) {
    return (
      <div>
        <h1>Es movil</h1>
        <CardShuffle list={list} setList={setList} />
      </div>
    );
  }
};

export default CardGrid;
