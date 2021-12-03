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
        className="flex justify-end  lg:mt-4 lg:mr-10 hover-button"
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
      <div className="flex justify-center  lg:mx-0  lg:ml-0 lg:mt-16">
        {!isMobile && <img src={img} alt="" className="w-20 h-full mr-10" />}
        <div className="flex justify-center pb-32">
          <div
            className={`block  ${
              isTablet < 768 ? "w-full mx-5" : "lg:w-100 lg:mr-52"
            }`}
          >
            <div
              className={`bg-black p-2 w-14 text-center rounded text-xs lg:text-xs`}
              style={{ color: color }}
            >
              <p>FOTO</p>
            </div>

            <h1
              className={`custom-font-shadow text-left text-4.5xl lg:text-5.5xl mt-4 mb-4 lg:w-107 `}
            >
              {cardContent.typeName}
            </h1>
            <h2
              className={`text-left ${
                isMobile
                  ? "inter-font text-lg mt-6 mb-6"
                  : "custom-font text-1.9xl mt-10"
              }`}
            >
              {cardContent.subTitle}{" "}
            </h2>
            {!isMobile && (
              <p
                className="custom-font text-left lg:text-sm bg-black  items-center p-4 rounded mt-6"
                style={{ color: color }}
              >
                {cardContent.description.toUpperCase()}
              </p>
            )}
            <img src={cardContent.picture} alt="Foto" className={`w-full `} />
            {isMobile && (
              <p
                className={`custom-font text-left  bg-black  items-center p-2 rounded mt-6`}
                style={{ color: color }}
              >
                {cardContent.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardContentPhoto;
