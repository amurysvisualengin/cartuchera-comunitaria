import React, { useContext } from "react";
import CatucheraLogo from "../../assets/icons/cartuchera-logo.svg";
import Hamburguer from "../../assets/icons/hamburguer.svg";
import CardListContext from "../../context/CardListContext";

const Header = () => {
  //   const { isMobile } = useContext(CardListContext);
  return (
    <div
      /* className={`border-2 rounded flex fixed z-50 -mt-16 lg:z-10 justify-between bg-white w-full`} */
      className="flex fixed z-10 w-full justify-between bg-white border-b-2 -mt-80 lg:mt-0"
    >
      <img
        src={CatucheraLogo}
        alt="cartuchera logo"
        className=" m-2 lg:ml-10"
      />
      <button>
        <img src={Hamburguer} alt="menu button" className="lg:mr-8" />
      </button>
    </div>
  );
};

export default Header;
