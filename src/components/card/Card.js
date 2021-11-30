import React, { useContext, useState } from "react";
import CardContentAudio from "../cardContentAudio/CardContentAudio";
import CardContentPdf from "../cardContentPdf/CardContentPdf";
import CardContentText from "../cardContentText/CardContentText";
import CardContentPresentation from "../cardContentPresentation/CardContentPresentation";
import CardContentPhoto from "../cardContentPhoto/CardContentPhoto";
import CardListContext from "../../context/CardListContext";
import "./Card.css";
import "../../App.css";

const Card = (props) => {
  const [showExpand, setShowExpand] = useState(false);
  const { title, img, type, color, cardNumber, cardContent } = props;
  const { setCardInfo, setIsExpand, isTablet, mobileHeight, setFirstTouch } =
    useContext(CardListContext);

  const handleShowExpandFalse = () => {
    setShowExpand(!showExpand);
  };

  let timer = 0;
  let isMove = false;

  const handleTouchStart = () => {
    timer = 0;

    setInterval(() => {
      timer++;
    }, 50);
  };

  const handleOnTouchMove = () => {
    isMove = true;
    timer = 0;
  };

  const handleTouchEnd = () => {
    if (timer < 10 && isMove === false && type) {
      setShowExpand(!showExpand);
      setIsExpand(true);
      setCardInfo({
        title,
        img,
        color,
        type,
        cardContent,
        handleShowExpandFalse,
      });
    }
    isMove = false;
  };

  const handleShowExpand = () => {
    if (!showExpand) {
      setShowExpand(true);
    }
  };

  const { isMobile } = useContext(CardListContext);

  return (
    <React.Fragment>
      <div
        onClick={type && handleShowExpand}
        onTouchStart={handleTouchStart}
        onTouchMove={handleOnTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`${
          isMobile
            ? isTablet < 768
              ? "absolute right-1 left-1 bottom-24 -top-2"
              : "absolute right-40 left-40 bottom-36 top-10"
            : "p-6 lg:m-2 lg:mr-2 text-center card-item lg:h-72 cursor-pointer hover-card"
        }  rounded-md`}
        style={{ backgroundColor: color, borderColor: color }}
      >
        {isMobile && (
          <div>
            {!type && (
              <div
                style={{ color: "#EBE4CF" }}
                className="custom-font  absolute left-10 top-10"
              >
                <p style={{ fontSize: 11 }}>HERRAMIENTA DE DISEÑO</p>
                <p style={{ fontSize: 11 }}>PARTICIPATIVO </p>
              </div>
            )}
            <p className="custom-font text-right items-start absolute right-6 top-6">
              {cardNumber}
            </p>
            <div className="relative transform translate-y-1/2 flex justify-center">
              <img
                className={`${
                  isTablet < 768
                    ? type === "Presentation"
                      ? "top-24 "
                      : type === "Herramientas"
                      ? "top-48"
                      : "top-40 "
                    : type === "Presentation"
                    ? "top-40"
                    : type === "Herramientas"
                    ? "top-72"
                    : "top-52"
                } absolute bottom-0 w-40 ${
                  cardContent === "disabled" && "pl-10 pr-10 w-full"
                }`}
                // className={` ${isMobile ? "w-40" : "w-36"}`}
                src={img}
                alt=""
                srcSet=""
              />
            </div>
          </div>
        )}
        {!isMobile && (
          <div>
            <p className="custom-font text-right items-start">{cardNumber}</p>
            <img
              className={` ${isMobile ? "mt-4 w-80 h-64" : "w-36 h-60"}`}
              src={img}
              alt=""
              srcSet=""
            />
          </div>
        )}

        <div
          className={` card-expand ${
            showExpand ? "card-expanded cursor-default" : ""
          }`}
          style={{ backgroundColor: color }}
        >
          {type === "Audiovisual" && (
            <CardContentAudio
              cardContent={cardContent}
              img={img}
              title={title}
              color={color}
              handleShowExpandFalse={handleShowExpandFalse}
            />
          )}
          {type === "Herramientas" && (
            <CardContentPdf
              cardContent={cardContent}
              img={img}
              title={title}
              color={color}
              handleShowExpandFalse={handleShowExpandFalse}
            />
          )}
          {type === "Rompehielos" && (
            <CardContentText
              cardContent={cardContent}
              img={img}
              title={title}
              color={color}
              handleShowExpandFalse={handleShowExpandFalse}
            />
          )}
          {type === "Presentation" && (
            <CardContentPresentation
              cardContent={cardContent}
              img={img}
              title={title}
              color={color}
              handleShowExpandFalse={handleShowExpandFalse}
            />
          )}
          {type === "Photo" && (
            <CardContentPhoto
              cardContent={cardContent}
              img={img}
              title={title}
              color={color}
              handleShowExpandFalse={handleShowExpandFalse}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
