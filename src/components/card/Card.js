import React, { useContext, useState } from "react";
import CardContentAudio from "../cardContentAudio/CardContentAudio";
import CardContentPdf from "../cardContentPdf/CardContentPdf";
import CardContentText from "../cardContentText/CardContentText";
import CardContentPresentation from "../cardContentPresentation/CardContentPresentation";
import CardContentPhoto from "../cardContentPhoto/CardContentPhoto";
import CardListContext from "../../context/CardListContext";
import "./Card.css";
import "../../App.css";
import { useEffect } from "react/cjs/react.development";

const Card = (props) => {
  const [showExpand, setShowExpand] = useState(false);
  const { title, img, type, color, cardNumber, cardContent } = props;
  const [touch, setTouch] = useState(false);
  const { isExpand, setIsExpand } = useState(CardListContext);

  useEffect(() => {
    console.log(showExpand);
  }, [showExpand]);

  const handleShowExpandFalse = () => {
    console.log("adios");
    setShowExpand(!showExpand);
  };

  let timer = 0;
  let isMove = false;

  const handleTouchStart = () => {
    timer = 0;

    setInterval(() => {
      timer++;
    }, 50);
    // console.log("handleTouchStart", timer);
  };

  const handleOnTouchMove = () => {
    isMove = true;
  };

  const handleTouchEnd = () => {
    // console.log("handletouchEnd:", isMove);
    if (timer < 10 && isMove === false) {
      setShowExpand(!showExpand);
    }
    // console.log("handleTouchEnd", timer);
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
            ? " ml-5 w-90 h-98 p-16 card-item cursor-pointer"
            : "p-6 lg:m-2 lg:mr-2 text-center card-item lg:h-72  "
        } `}
        style={{ backgroundColor: color, borderColor: color }}
      >
        <p className="custom-font text-right items-start">{cardNumber}</p>
        <img
          className={` ${isMobile ? "mt-4 w-80 h-96" : "w-36 h-60"}`}
          src={img}
          alt=""
          srcSet=""
        />
        <div
          className={` card-expand ${showExpand ? "card-expanded" : ""}`}
          style={{ backgroundColor: color }}
        >
          {type === "Audiovisual" && (
            <div>
              <CardContentAudio
                cardContent={cardContent}
                img={img}
                title={title}
                color={color}
                handleShowExpandFalse={handleShowExpandFalse}
              />
            </div>
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
