import React, { useContext } from "react";
import CardListContext from "../../context/CardListContext";

const FilterMobile = (props) => {
  const { isSidebarVisible, setIsSidebarVisible } = useContext(CardListContext);

  return (
    <button
      onClick={() => {
        setIsSidebarVisible(!isSidebarVisible);
      }}
    ></button>
  );
};

export default FilterMobile;
