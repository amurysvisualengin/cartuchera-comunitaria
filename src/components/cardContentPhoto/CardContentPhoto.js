import React, { useContext } from "react";
import CardListContext from "../../context/CardListContext";
import "./CardContentPhoto.css";

function CardContentPhoto(props) {
  const { cardContent, img, color, handleShowExpandFalse } = props;
  const { isMobile } = useContext(CardListContext);
  const { isExpand, setIsExpand } = useContext(CardListContext);
  return (
    <div>
      {!isMobile && (
        <img
          src={img}
          alt=""
          className="opacity-10 filter invert fixed -z-10 transform w-99 mt-10 ml-52 scale-200"
        />
      )}
      <div
        className="text-right mr-2 mt-2 lg:mt-2 lg:mr-10"
        onClick={() => {
          handleShowExpandFalse();
          console.log("hola");
        }}
      >
        <button
          className="text-2xl bg-black w-10 h-10   rounded-full"
          style={{ color: color }}
        >
          X
        </button>
      </div>
      <div className="flex justify-center mt-16 ml-10 lg:ml-0 lg:mt-16">
        {!isMobile && <img src={img} alt="" className="w-20 h-full mr-10" />}
        <div className="block w-100 lg:mr-52 ">
          <h2
            className="bg-black rounded w-14 px-2 lg:text-base"
            style={{ color: color }}
          >
            FOTO
          </h2>
          <h1 className="custom-font-shadow text-left text-4xl lg:text-6xl mt-4 w-80 lg:w-107">
            {cardContent.typeName}
          </h1>
          <h2 className="custom-font text-left text-xs lg:text-2xl">
            {cardContent.subTitle}{" "}
          </h2>
          {!isMobile && (
            <p
              className="custom-font text-left text-base bg-black  w-104 items-center p-2 rounded mt-6"
              style={{ color: color }}
            >
              {cardContent.description}
            </p>
          )}
          <img
            src={cardContent.picture}
            alt="Foto"
            className={`  ${
              isMobile
                ? "mobile-size mt-4"
                : "lg:mt-20 lg:ml-20 lg:transform lg:scale-120"
            }`}
          />
          {isMobile && (
            <p
              className="custom-font text-left text-xs bg-black w-80 items-center p-2 rounded mt-6"
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
