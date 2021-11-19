import React, { useContext } from "react";
import "./CardShuffle.css";
import "../../App.css";
import Mezcla from "../../assets/imgs/mezcla_icon.svg";
import CardListContext from "../../context/CardListContext";
import FilterMobile from "../filterMobile/FilterMobile";

const CardShuffle = (props) => {
  const { list, setList } = props;
  const { isMobile } = useContext(CardListContext);

  const handleClick = () => {
    const newArr = list.sort(() => Math.random() - 0.5);
    setList([...newArr]);
  };
  if (isMobile) {
    return (
      <div className="flex">
        <FilterMobile />
        {/*  <button
          onClick={() => {
            handleClick();
          }}
          onTouchStart={() => {
            handleClick();
          }}
          className="mt-24 ml-1 w-32 flex "
        >
          <img src={Mezcla} alt="Mezcla" className="ml-5" />
          <label
            htmlFor="button"
            className="text-white ml-2 mr-2 cursor-pointer"
          ></label>
        </button> */}
      </div>
    );
  }

  return (
    <div
      className={`p-6 pt-6 w-48 h-72 ml-2 mr-3 card-item bg-black cursor-pointer `}
      onClick={() => {
        handleClick();
      }}
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
        style={{ maxWidth: "7.5rem" }}
        className="text-white font-bold text-sm "
      >
        Mezcla las cartas y descubre nuevas Herramientas.
      </p>
    </div>
  );
};

export default CardShuffle;
