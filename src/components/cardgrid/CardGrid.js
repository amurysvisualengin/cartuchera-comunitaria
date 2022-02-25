/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from "react";
import "./CardGrid.css";
import Card from "../card/Card";
import CardShuffle from "../CardShuffle/CardShuffle";
import CardListContext from "../../context/CardListContext";
import Data from "../../assets/data/Data.json";
import Swiper from "../swiper/Swiper";
import ColorFilterMobile from "../colorFilterMobile/ColorFilterMobile";
import TypeFilterMobile from "../typeFilterMobile/TypeFilterMobile";

import CardContentAudio from "../cardContentAudio/CardContentAudio";
import CardContentPdf from "../cardContentPdf/CardContentPdf";
import CardContentText from "../cardContentText/CardContentText";
import CardContentPresentation from "../cardContentPresentation/CardContentPresentation";
import CardContentPhoto from "../cardContentPhoto/CardContentPhoto";

const CardGrid = () => {
  const typesCard = Data;
  const [list, setList] = useState(typesCard);
  const [listData] = useState(typesCard);
  const { kitFilter, typeFilter, cardInfo, typeMobile, changeColorMobile } =
    useContext(CardListContext);
  const { isMobile, isExpand } = useContext(CardListContext);

  useEffect(() => {
    setList((prevList) => [...prevList].sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    setList([...listData].sort(() => Math.random() - 0.5));
  }, [typeMobile, changeColorMobile]);

  if (!isMobile) {
    return (
      <div className="left-shadow">
        <div className="p-4 flex flex-wrap content-start items-center ml-20 mt-16">
          <div
            onClick={() => {
              setList((prevList) =>
                [...prevList].sort(() => Math.random() - 0.5)
              );
              console.log("clock");
            }}
          >
            <CardShuffle list={list} setList={setList} />
          </div>

          {list.map((element, index) => (
            <div key={index}>
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
                  uniqueId={element.uniqueId}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isMobile) {
    return (
      <div>
        {!isExpand && (
          <div>
            <Swiper list={list} setList={setList} listData={listData} />

            <div
              className=" items-center flex justify-center h-20 px-4 absolute bottom-0 right-0 left-0 filters-shadow"
              style={{ background: "#F8F5ED" }}
            >
              <ColorFilterMobile />
              <TypeFilterMobile />
            </div>
          </div>
        )}
        {isExpand && (
          <div>
            {cardInfo.type === "Audiovisual" && (
              <CardContentAudio
                cardContent={cardInfo.cardContent}
                img={cardInfo.img}
                title={cardInfo.title}
                color={cardInfo.color}
                handleShowExpandFalse={cardInfo.handleShowExpandFalse}
              />
            )}
            {cardInfo.type === "Herramientas" && (
              <CardContentPdf
                cardContent={cardInfo.cardContent}
                img={cardInfo.img}
                title={cardInfo.title}
                color={cardInfo.color}
                handleShowExpandFalse={cardInfo.handleShowExpandFalse}
              />
            )}
            {cardInfo.type === "Rompehielos" && (
              <CardContentText
                cardContent={cardInfo.cardContent}
                img={cardInfo.img}
                title={cardInfo.title}
                color={cardInfo.color}
                handleShowExpandFalse={cardInfo.handleShowExpandFalse}
              />
            )}
            {cardInfo.type === "Presentation" && (
              <CardContentPresentation
                cardContent={cardInfo.cardContent}
                img={cardInfo.img}
                title={cardInfo.title}
                color={cardInfo.color}
                handleShowExpandFalse={cardInfo.handleShowExpandFalse}
              />
            )}
            {cardInfo.type === "Photo" && (
              <CardContentPhoto
                cardContent={cardInfo.cardContent}
                img={cardInfo.img}
                title={cardInfo.title}
                color={cardInfo.color}
                handleShowExpandFalse={cardInfo.handleShowExpandFalse}
              />
            )}
          </div>
        )}
      </div>
    );
  }
};

export default CardGrid;
