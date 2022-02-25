import React, { useContext } from "react";
import "./CardShuffle.css";
import "../../App.css";
import Mezcla from "../../assets/imgs/mezcla_icon.svg";
import CardListContext from "../../context/CardListContext";
import FilterMobile from "../filterMobile/FilterMobile";

import "../card/Card.css";

const CardShuffle = (props) => {
  const { isMobile } = useContext(CardListContext);

  if (isMobile) {
    return (
      <div className="flex">
        <FilterMobile />
      </div>
    );
  }

  return (
    <div
      className={`p-6 pt-6 w-48 h-72 ml-2 mr-3 card-item bg-black cursor-pointer hover-card`}
    >
      <div>
        <button className="flex">
          <img src={Mezcla} alt="Mezcla" />
          <label
            htmlFor="button"
            className="text-white ml-2 mb-40 cursor-pointer"
          ></label>
        </button>
      </div>
      <p
        style={{ maxWidth: "7.5rem", color: "#EBE4CF" }}
        className="text-white font-bold text-xSs leading-4 tracking-shuffle custom-font "
      >
        MEZCLA LAS CARTAS Y DESCUBRE NUEVAS HERRAMIENTAS.
      </p>
    </div>
  );
};

export default CardShuffle;
