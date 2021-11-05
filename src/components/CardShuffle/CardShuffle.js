import React, { useContext } from "react";
import "./CardShuffle.css";
import "../../App.css";
import Mezcla from "../../assets/imgs/mezcla_icon.svg";
import CardListContext from "../../context/CardListContext";

const CardShuffle = (props) => {
  const { list, setList } = props;
  const { isMobile } = useContext(CardListContext);

  const handleClick = () => {
    const newArr = list.sort(() => Math.random() - 0.5);
    setList([...newArr]);
  };
  if (isMobile) {
    return (
      <button
        onClick={() => {
          handleClick();
        }}
        className="button-mix mt-20 p-6 flex"
      >
        <img src={Mezcla} alt="Mezcla" />
        <label htmlFor="button" className="text-white ml-2 cursor-pointer">
          Mezcla
        </label>
      </button>
    );
  }

  return (
    <div
      className={`p-5 pt-6 pr-7 pb-6 m-2 mr-4 text-center card-item bg-black `}
    >
      <h2
        style={{ maxWidth: "7.5rem" }}
        className="text-white text-sm custom-font"
      >
        Prueba suerte
      </h2>
      <p style={{ maxWidth: "7.5rem" }} className="text-white  mt-4">
        Mezcla las cartas y descubre nuevas Herramientas.
      </p>
      <button
        onClick={() => {
          handleClick();
        }}
        className="button-mix mt-20 p-6 flex"
      >
        <img src={Mezcla} alt="Mezcla" />
        <label htmlFor="button" className="text-white ml-2 cursor-pointer">
          Mezcla
        </label>
      </button>
    </div>
  );
};

export default CardShuffle;
