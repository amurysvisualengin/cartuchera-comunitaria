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
  const { setCardInfo, setIsExpand, mobileHeight } =
    useContext(CardListContext);

  useEffect(() => {}, [showExpand]);

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
  console.log(mobileHeight);
  return (
    <React.Fragment>
      <div
        className={`${
          isMobile ? "flex h-full justify-center items-center p-5" : "mr-2"
        }`}
      >
        <div
          onClick={handleShowExpand}
          onTouchStart={handleTouchStart}
          onTouchMove={handleOnTouchMove}
          onTouchEnd={handleTouchEnd}
          /* className={` ${
          isMobile
          ? " ml-5 w-90 h-98 p-16 card-item cursor-pointer"
          : ""
        } `} */
          className={`w-full rounded-md ${
            isMobile
              ? "-mt-5"
              : "p-6 lg:m-2 lg:mr-2 text-center card-item lg:h-72"
          } `}
          style={{ backgroundColor: color, borderColor: color }}
        >
          {
            <p
              className={`${
                isMobile
                  ? "custom-font text-right float-right -ml-8 mr-4 mt-4"
                  : ""
              }`}
            >
              {cardNumber}
            </p>
          }
          <div className="flex justify-center items-center">
            <img
              className={`${isMobile && "m-10 p-10"} ${
                isMobile
                  ? mobileHeight <= 568
                    ? "w-52 h-72"
                    : mobileHeight <= 667
                    ? "w-64 h-90"
                    : mobileHeight <= 736
                    ? "w-80 h-96.7"
                    : mobileHeight <= 812
                    ? "w-80 h-97"
                    : "w-84 h-97 mx-4"
                  : "w-36 h-60 "
              }`}
              // className={` ${isMobile ? "mt-4 w-80 h-96" : ""}`}
              src={img}
              alt=""
              srcSet=""
            />
          </div>
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
      </div>
    </React.Fragment>
  );
};

export default Card;
