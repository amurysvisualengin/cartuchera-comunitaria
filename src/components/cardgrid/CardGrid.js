import React, { useState, useContext } from "react";
import "./CardGrid.css";
import Card from "../card/Card";
import CardShuffle from "../CardShuffle/CardShuffle";
import CardListContext from "../../context/CardListContext";
import Data from "../../assets/data/Data.json";
import Swiper from "../swiper/Swiper";
import ColorFilterMobile from "../colorFilterMobile/ColorFilterMobile";
import CartucheraLogo from "../../assets/icons/cartuchera-logo.svg";
import Hamburguer from "../../assets/icons/hamburguer.svg";
import TypeFilterMobile from "../typeFilterMobile/TypeFilterMobile";

import CardContentAudio from "../cardContentAudio/CardContentAudio";
import CardContentPdf from "../cardContentPdf/CardContentPdf";
import CardContentText from "../cardContentText/CardContentText";
import CardContentPresentation from "../cardContentPresentation/CardContentPresentation";
import CardContentPhoto from "../cardContentPhoto/CardContentPhoto";
import InfoMobile from "../infoMobile/InfoMobile";

const CardGrid = () => {
  const typesCard = Data;

  const [list, setList] = useState(typesCard);
  const shuffleList = list.sort(() => Math.random() - 0.5);

  const { kitFilter, typeFilter, cardInfo } = useContext(CardListContext);
  const {
    isMobile,
    isExpand,
    isTablet,
    showMenu,
    setShowMenu,
    showInformation,
    setShowInformation,
  } = useContext(CardListContext);

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
          <div className="h-screen" style={{ background: "#f5e3b0" }}>
            <div
              className={`flex  py-2 justify-between ${
                isTablet > 768 && isTablet < 1224 ? "mb-28" : "mb-5"
              } `}
              style={{ background: "#F8F5ED" }}
            >
              <img src={CartucheraLogo} alt="logo" className="w-20 ml-2" />
              <div className="flex">
                <button
                  className="text-white bg-black w-12 h-6 rounded-md mt-5 mr-4 text-center"
                  onClick={() => {
                    setShowInformation(!showInformation);
                  }}
                >
                  INFO
                </button>
                <div className="absolute top-0 left-0 bottom-0 z-50">
                  <InfoMobile />
                </div>

                <button
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                >
                  <img src={Hamburguer} alt="" className="mt-2" />
                </button>
              </div>
            </div>

            <Swiper />
            <div className={`flex`}>
              <CardShuffle list={list} setList={setList} />
            </div>
            <div
              className=" items-center flex absolute bottom-0 right-0 left-0"
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