import React, { useContext, useEffect, useState } from "react";
import CardListContext from "../../context/CardListContext";
import AllColors from "../../assets/icons/ico-all-colors.svg";

const ColorFilterMobile = (props) => {
  const { changeColorMobile, setChangeColorMobile } =
    useContext(CardListContext);

  const changeColor = () => {
    if (changeColorMobile === "") {
      setChangeColorMobile("#BEBE3B");
    }
    if (changeColorMobile === "#BEBE3B") setChangeColorMobile("#F9A66B");
    if (changeColorMobile === "#F9A66B") setChangeColorMobile("#9BC2D4");
    if (changeColorMobile === "#9BC2D4") setChangeColorMobile("#EF604B");
    if (changeColorMobile === "#EF604B") setChangeColorMobile("#E1AC47");
    if (changeColorMobile === "#E1AC47") setChangeColorMobile("");
  };

  return (
    <div onClick={changeColor}>
      <button
        className={`${
          changeColorMobile ? "rounded-full border-2 border-black" : ""
        } w-7.5 h-7.5`}
        style={{ background: changeColorMobile }}
      >
        <img
          src={AllColors}
          style={{ width: 30, height: 30 }}
          alt=""
          className={` ${!changeColorMobile ? "block" : "hidden"} `}
        />
      </button>
    </div>
  );
};

export default ColorFilterMobile;
