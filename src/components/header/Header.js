import React, { useContext } from "react";
import CatucheraLogo from "../../assets/icons/cartuchera-logo.svg";
import Hamburguer from "../../assets/icons/hamburguer.svg";
import CardListContext from "../../context/CardListContext";

const Header = () => {
  const { showMenu, setShowMenu } = useContext(CardListContext);
  return (
    <div
      style={{ backgroundColor: "#F8F5ED" }}
      className="flex fixed z-10 w-full justify-between"
    >
      <img
        src={CatucheraLogo}
        alt="cartuchera logo"
        className=" m-2 lg:ml-10"
      />
      <button
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <img src={Hamburguer} alt="menu button" className="lg:mr-8" />
      </button>
    </div>
  );
};

export default Header;
