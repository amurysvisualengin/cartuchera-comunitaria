import React, { useContext } from "react";
import CardListContext from "../../context/CardListContext";
import "./CardContentPhoto.css";
import CloseButton from "../../assets/icons/close.svg";

import SimpleSlider from "./SimpleSlider";
// import SimpleImageSlider from "react-simple-image-slider";

function CardContentPhoto(props) {
  const { cardContent, img, color, handleShowExpandFalse } = props;
  const { isMobile, setIsExpand, isTablet } = useContext(CardListContext);

  return (
    <div className="h-full " style={{ backgroundColor: isMobile ? color : "" }}>
      {!isMobile && (
        <img
          src={img}
          alt=""
          className="opacity-10 filter invert fixed -z-10 transform w-99 mt-10 ml-52 scale-200"
        />
      )}
      <div
        className="flex justify-end lg:mt-4 lg:mr-10 hover-button"
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
      <div className="flex justify-center lg:mx-0 lg:ml-0 lg:mt-16">
        {!isMobile && <img src={img} alt="" className="w-20 h-full mr-10" />}
        <div className="flex justify-center pb-32">
          <div
            className={`block  ${
              isTablet < 768 ? "w-full mx-5" : "lg:w-100 lg:mr-52"
            }`}
          >
            <div>
              <p
                className={`bg-black font-bold tracking-special p-2 w-14 text-center rounded text-xs lg:text-xs`}
                style={{ color: color }}
              >
                FOTO
              </p>
            </div>
            <h1
              className={`custom-font-shadow text-left text-4.5xl leading-10.5 lg:text-5.5xl lg:leading-11 mt-6 lg:w-107 `}
            >
              {cardContent.typeName}
            </h1>
            <h2
              className={`text-left ${
                isMobile
                  ? "inter-font text-lg my-6"
                  : "custom-font text-1.9xl my-10"
              }`}
            >
              {cardContent.subTitle}{" "}
            </h2>
            {!isMobile && (
              <p
                className="custom-font text-left lg:text-sm max-w-4xl bg-black  items-center p-4 rounded mb-6"
                style={{ color: color }}
              >
                {cardContent.description.toUpperCase()}
              </p>
            )}

            <SimpleSlider cardContent={cardContent} />
            {isMobile && (
              <p
                className={`custom-font text-left bg-black  items-center p-4 rounded mt-6`}
                style={{ color: color }}
              >
                {cardContent.description.toUpperCase()}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardContentPhoto;
