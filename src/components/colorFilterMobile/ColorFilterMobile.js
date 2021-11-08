import React, { useContext, useState } from "react";
import CardListContext from "../../context/CardListContext";

const ColorFilterMobile = (props) => {
  //   const colors = ["#F9A66B", "#9BC2D4", "#EF604B", "#E1AC47"];
  const [iscolor, setIscolor] = useState("");
  const { changeColorMobile, setChangeColorMobile } =
    useContext(CardListContext);

  const changeColor = () => {
    if (iscolor === "") setIscolor("#BEBE3B");
    if (iscolor === "#BEBE3B") setIscolor("#F9A66B");
    if (iscolor === "#F9A66B") setIscolor("#9BC2D4");
    if (iscolor === "#9BC2D4") setIscolor("#EF604B");
    if (iscolor === "#EF604B") setIscolor("#E1AC47");
    if (iscolor === "#E1AC47") setIscolor("");
    setChangeColorMobile(iscolor);
  };

  return (
    <div onClick={changeColor} className="ml-8">
      <button
        className="rounded-full border-2 border-black w-16 h-16 mt-1"
        style={{ background: changeColorMobile }}
      ></button>
    </div>
  );
};

export default ColorFilterMobile;
