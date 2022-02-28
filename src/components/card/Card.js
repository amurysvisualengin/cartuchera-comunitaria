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
  const [timer, setTimer] = useState(0);
  const [isMove, setIsMove] = useState(false);
  const { title, img, type, color, cardNumber, cardContent } = props;
  const { setCardInfo, setIsExpand, isTablet } = useContext(CardListContext);

  const handleShowExpandFalse = () => {
    setShowExpand(!showExpand);
  };

  const handleTouchStart = () => {
    setInterval(() => {
      setTimer((prevState) => prevState++);
    }, 50);
  };

  const handleOnTouchMove = () => {
    setIsMove(true);
    setTimer(0);
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
    } else setIsMove(false);
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
            ? "absolute right-1 left-1 bottom-24 top-0 md:right-40 md:left-40 md:bottom-36 md:top-10 lg:right-80 lg:left-80 lg:bottom-24 lg:top-0 "
            : "p-6 m-2 mr-2 text-center card-item h-72 cursor-pointer hover-card"
        }  rounded-md`}
        style={{ backgroundColor: color, borderColor: color }}
      >
        {isMobile && (
          <div>
            {!type && title === "Testing" && (
              <div
                style={{ color: "#EBE4CF" }}
                className={"custom-font absolute left-10 top-10"}
              >
                <p style={{ fontSize: 11 }}>HERRAMIENTA DE DISEÑO</p>
                <p style={{ fontSize: 11 }}>PARTICIPATIVO </p>
              </div>
            )}
            {!type && title === "Reload" && (
              <div
                style={{ color: "#EBE4CF" }}
                className={`custom-font-shadow text-4.5xl flex flex-col items-center text-center mt-52`}
              >
                <button>
                  <h2>VOLVER A </h2>
                  <h2>EMPEZAR!</h2>
                </button>
              </div>
            )}
            <p className="custom-font text-right items-start absolute right-6 top-6">
              {cardNumber}
            </p>
            <div
              className={`${
                isTablet < 1181 && isTablet > 768
                  ? "relative transform translate-y-26 flex justify-center"
                  : "relative transform translate-y-1/2 flex justify-center"
              } `}
            >
              <img
                className={`${props.className} ${
                  type === "Presentation"
                    ? "xs:top-20 xs:h-56 smd:top-28 md:top-20 md:h-72  lg:-top-20 lg:h-72"
                    : type === "Herramientas"
                    ? "xs:top-44 xs:w-32 smd:w-44 smd:top-60 md:top-48 lg:top-24"
                    : type === "Rompehielos" ||
                      type === "Audiovisual" ||
                      type === "Photo"
                    ? "xs:top-36 xs:h-24 smd:h-32 smd:top-52 md:top-32 md:h-44 lg:top-10"
                    : ""
                }
                 absolute bottom-0 w-40 ${
                   cardContent === "disabled" && "pl-10 pr-10 w-full"
                 }
              `}
                src={img}
                alt=""
              />
            </div>
          </div>
        )}
        {!isMobile && (
          <div>
            <p className="custom-font text-right items-start">{cardNumber}</p>
            <img className={`w-36 h-60`} src={img} alt="" srcSet="" />
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
            <div>
              <CardContentPhoto
                cardContent={cardContent}
                img={img}
                title={title}
                color={color}
                handleShowExpandFalse={handleShowExpandFalse}
              />
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
