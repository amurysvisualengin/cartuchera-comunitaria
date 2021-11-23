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
  const { setCardInfo, setIsExpand, isTablet } = useContext(CardListContext);

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
    if (timer < 10 && isMove === false) {
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
    console.log(isMove);

    isMove = false;
  };

  const handleShowExpand = () => {
    if (!showExpand) {
      setShowExpand(true);
    }
    console.log("handleShowSpand", showExpand);
  };

  const { isMobile } = useContext(CardListContext);

  return (
    <React.Fragment>
      <div
        onClick={handleShowExpand}
        onTouchStart={handleTouchStart}
        onTouchMove={handleOnTouchMove}
        onTouchEnd={handleTouchEnd}
        className={` ${
          isMobile
            ? isTablet < 320
              ? " ml-5 mr-5 h-99.2 p-16 card-item cursor-pointer"
              : isTablet < 394
              ? " ml-5 mr-5 h-98 p-16 card-item cursor-pointer"
              : isTablet < 415
              ? "ml-5 mr-5 h-97.5 p-16 card-item cursor-pointer"
              : "p-16 h-98 card-item cursor-pointer"
            : "p-6 lg:m-2 lg:mr-2 text-center card-item lg:h-72 cursor-pointer hover-card"
        } `}
        style={{ backgroundColor: color, borderColor: color }}
      >
        <p className="custom-font text-right items-start">{cardNumber}</p>
        <img
          className={` ${
            isMobile ? (isTablet <= 320 ? "mt-4 w-52 h-72" : "w-36 h-60") : ""
          }`}
          src={img}
          alt=""
          srcSet=""
        />
        <div
          className={` card-expand ${showExpand ? "card-expanded" : ""}`}
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
