import React, { useContext, useState } from "react";
import CardContentAudio from "../cardContentAudio/CardContentAudio";
import CardContentPdf from "../cardContentPdf/CardContentPdf";
import CardContentText from "../cardContentText/CardContentText";
import CardContentPresentation from "../cardContentPresentation/CardContentPresentation";
import CardContentPhoto from "../cardContentPhoto/CardContentPhoto";
import CardListContext from "../../context/CardListContext";
import "./Card.css";
import "../../App.css";
import SimpleSlider from "../cardContentPhoto/SimpleSlider";

const Card = (props) => {
  const [showExpand, setShowExpand] = useState(false);
  const { title, img, type, color, cardNumber, cardContent } = props;
  const { setCardInfo, setIsExpand, isTablet, mobileHeight } =
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
  console.log(mobileHeight);
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
              ? "absolute right-1 left-1 bottom-24 top-0"
              : "absolute right-40 left-40 bottom-36 top-10"
            : "p-6 lg:m-2 lg:mr-2 text-center card-item lg:h-72 cursor-pointer hover-card"
        }  rounded-md`}
        style={{ backgroundColor: color, borderColor: color }}
      >
        {isMobile && (
          <div>
            {!type && title === "Testing" && (
              <div
                style={{ color: "#EBE4CF" }}
                className="custom-font absolute left-10 top-10"
              >
                <p style={{ fontSize: 11 }}>HERRAMIENTA DE DISEÑO</p>
                <p style={{ fontSize: 11 }}>PARTICIPATIVO </p>
              </div>
            )}
            {!type && title === "Reload" && (
              <div
                style={{ color: "#EBE4CF" }}
                className="custom-font-shadow text-4.5xl flex flex-col items-center text-center mt-52"
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
                  ? " relative transform translate-y-26 flex justify-center"
                  : "relative transform translate-y-1/2 flex justify-center"
              } `}
            >
              <img
                className={`
                ${
                  isTablet < 1181 && isTablet > 768
                    ? type === "Presentation"
                      ? "top-4 h-56"
                      : type === "Herramientas"
                      ? "top-16"
                      : type === "Rompehielos" ||
                        type === "Audiovisual" ||
                        type === "Photo"
                      ? "top-4"
                      : ""
                    : isTablet < 768
                    ? type === "Presentation"
                      ? mobileHeight < 569
                        ? "top-20 h-56"
                        : "top-24 "
                      : type === "Herramientas"
                      ? mobileHeight < 569
                        ? "top-40"
                        : "top-48"
                      : (type === "Rompehielos" ||
                          type === "Audiovisual" ||
                          type === "Photo") &&
                        mobileHeight < 569
                      ? "top-32"
                      : "top-40"
                    : type === "Presentation"
                    ? "top-40"
                    : type === "Herramientas"
                    ? "top-72"
                    : "top-52"
                } absolute bottom-0 w-40 ${
                  cardContent === "disabled" && "pl-10 pr-10 w-full"
                }
              `}
                src={img}
                alt=""
              />
              {/* <img
                className={`${
                  isTablet < 768
                    ? type === "Presentation"
                      ? mobileHeight < 569
                        ? "top-20 h-56"
                        : "top-24 "
                      : type === "Herramientas"
                      ? mobileHeight < 569
                        ? "top-40"
                        : "top-48"
                      : (type === "Rompehielos" ||
                          type === "Audiovisual" ||
                          type === "Photo") &&
                        mobileHeight < 569
                      ? "top-32"
                      : "top-40"
                    : type === "Presentation"
                    ? "top-40"
                    : type === "Herramientas"
                    ? "top-72"
                    : "top-52"
                } absolute bottom-0 w-40 ${
                  cardContent === "disabled" && "pl-10 pr-10 w-full"
                }`}
                src={img}
                alt=""
                srcSet=""
              /> */}
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
