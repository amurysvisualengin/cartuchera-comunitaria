import React, { useState, useContext } from "react";
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
import { handleReload } from "../../components/swiper/Swiper";

const CardGrid = () => {
  const typesCard = Data;
  const [list, setList] = useState(typesCard);
  const shuffleList = list.sort(() => Math.random() - 0.5);

  const { kitFilter, typeFilter, cardInfo } = useContext(CardListContext);
  const { isMobile, isExpand } = useContext(CardListContext);

  if (!isMobile) {
    return (
      <div className="left-shadow">
        <div className="p-4 flex flex-wrap content-start items-center ml-20 mt-16">
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
      </div>
    );
  }

  if (isMobile) {
    return (
      <div>
        {!isExpand && (
          <div>
            <Swiper />
            <div>{/* <CardShuffle list={list} setList={setList} /> */}</div>

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
