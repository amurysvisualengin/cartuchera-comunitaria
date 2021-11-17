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
    <div className="flex">
      {types.map((element, index) => (
        <div
          onClick={() => {
            if (element.typeId === typeMobile) setTypeMobile("");
            else setTypeMobile(element.typeId);
          }}
          className={`${
            !typeMobile || typeMobile === element.typeId
              ? "opacity-100:"
              : "opacity-30"
          }`}
        >
          <button className={`ml-9 ${isTablet < 768 ? "mt-4" : "mt-4 "}`}>
            <img
              src={element.src}
              alt=""
              className={` bg-black filter invert ${
                isTablet < 768 ? "w-10 h-10 mb-4" : "w-10 h-10 mb-4"
              }`}
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TypeFilterMobile;
