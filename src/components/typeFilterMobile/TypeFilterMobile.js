import React, { useContext, useState } from "react";
import Rompehielos from "../../assets/icons/Rompehielos.svg";
import CardListContext from "../../context/CardListContext";
import Presentacion from "../../assets/icons/presentacion.svg";
import Herramientas from "../../assets/icons/Herramientas.svg";
import Audiovisuales from "../../assets/icons/Audiovisuales.svg";
import Fotos from "../../assets/icons/Fotos.svg";

const TypeFilterMobile = () => {
  const { typeMobile, setTypeMobile } = useContext(CardListContext);

  const types = [
    {
      typeId: "presentation",
      src: Presentacion,
    },
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
          <button className=" mt-4 ml-3">
            <img
              src={element.src}
              alt=""
              className="w-12 h-12 mb-4 bg-black "
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TypeFilterMobile;
