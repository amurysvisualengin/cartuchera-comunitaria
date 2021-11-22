import React, { useContext } from "react";
import CardListContext from "../../context/CardListContext";
import "./CardContentPhoto.css";
import CloseButton from "../../assets/icons/close.svg";

function CardContentPhoto(props) {
  const { cardContent, img, color, handleShowExpandFalse } = props;
  const { isMobile, setIsExpand, isTablet } = useContext(CardListContext);

  return (
    <div
      className="h-screen pb-5"
      style={{ backgroundColor: isMobile ? color : "" }}
    >
      {!isMobile && (
        <img
          src={img}
          alt=""
          className="opacity-10 filter invert fixed -z-10 transform w-99 mt-10 ml-52 scale-200"
        />
      )}
      <div
        className="text-right lg:mt-4 lg:mr-10"
        onClick={() => {
          handleShowExpandFalse();
          setIsExpand(false);
        }}
      >
        <button
          className={` ${isTablet < 768 ? "mt-4 mr-4 w-12" : "mt-4 mr-4"}`}
        >
          <img src={CloseButton} alt="" />
        </button>
      </div>
      <div className="flex justify-center mt-16 lg:ml-0 lg:mt-16">
        {!isMobile && <img src={img} alt="" className="w-20 h-full mr-10" />}
        <div
          className={`block  ${
            isTablet < 768 ? "w-full mx-5" : "lg:w-100 lg:mr-52"
          }`}
        >
          <div
            className={`bg-black  lg:w-32 rounded text-xs lg:text-base ${
              isMobile
                ? isTablet < 768
                  ? "ml-0  w-14 py-1 text-center items-center"
                  : "text-base w-14 text-center items-center"
                : ""
            }`}
            style={{ color: color }}
          >
            <p>FOTO</p>
          </div>

          <h1
            className={`custom-font-shadow text-left text-4xl lg:text-6xl mt-4 mb-4 lg:w-107 ${
              isTablet > 769 && isMobile < 1024
                ? "text-5xl"
                : "text-4xl lg:text-6xl mt-4 mb-4 lg:w-107"
            }`}
          >
            {cardContent.typeName}
          </h1>
          <h2
            className={`text-left  ${
              isMobile
                ? isTablet > 769 && isMobile < 1024
                  ? "text-xl custom-font"
                  : "text-xl"
                : "text-2xl custom-font"
            }`}
          >
            {cardContent.subTitle}{" "}
          </h2>
          {!isMobile && (
            <p
              className="custom-font text-left text-base bg-black w-104 items-center p-2 rounded mt-6"
              style={{ color: color }}
            >
              {cardContent.description.toUpperCase()}
            </p>
          )}
          <img
            src={cardContent.picture}
            alt="Foto"
            className={`  ${
              isMobile
                ? isTablet > 767 && isTablet < 1224
                  ? "w-100 mt-8"
                  : "mobile-size mt-4"
                : "lg:mt-20 lg:ml-20 lg:transform lg:scale-120"
            }`}
          />
          {isMobile && (
            <p
              className={`custom-font text-left  bg-black  items-center p-2 rounded mt-6 ${
                isTablet > 767 && isTablet < 1224 ? "w-100" : "w-90 text-sm"
              }`}
              style={{ color: color }}
            >
              {cardContent.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardContentPhoto;
