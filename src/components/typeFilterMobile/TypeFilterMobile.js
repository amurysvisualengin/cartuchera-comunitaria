import React, { useContext, useState } from "react";
import Rompehielos from "../../assets/icons/Rompehielos.svg";
import CardListContext from "../../context/CardListContext";
import Presentacion from "../../assets/icons/presentacion.svg";
import Herramientas from "../../assets/icons/Herramientas.svg";
import Audiovisuales from "../../assets/icons/Audiovisuales.svg";
import Fotos from "../../assets/icons/Fotos.svg";

const TypeFilterMobile = () => {
  const { typeMobile, setTypeMobile, isTablet } = useContext(CardListContext);
  const types = [
    {
      typeId: "rompehielos",
      src: Rompehielos,
    },
    {
      typeId: "herramientas",
      src: Herramientas,
    },
    {
      typeId: "audio-visual",
      src: Audiovisuales,
    },
    {
      typeId: "photo",
      src: Fotos,
    },
  ];

  return (
    <React.Fragment>
      {types.map((element, index) => (
        <div
          onClick={() => {
            if (element.typeId === typeMobile) setTypeMobile("");
            else setTypeMobile(element.typeId);
          }}
          className={`${
            !typeMobile || typeMobile === element.typeId
              ? "opacity-100:"
              : "opacity-20"
          }`}
        >
          <button
            className={`ml-12 md:ml-17 lg:ml-14 ${
              isTablet < 768 ? "mt-1" : "mt-1 "
            }`}
          >
            <img
              src={element.src}
              alt=""
              className={` filter invert 
              ${
                element.typeId === "rompehielos"
                  ? "w-7"
                  : element.typeId === "herramientas"
                  ? "w-14 mt-1"
                  : element.typeId === "audio-visual"
                  ? "w-9"
                  : "w-8"
              }
              `}
            />
          </button>
        </div>
      ))}
    </React.Fragment>
  );
};

export default TypeFilterMobile;
