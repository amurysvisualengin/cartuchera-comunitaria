import React, { useContext, useEffect, useState } from "react";
import CatucheraLogo from "../../assets/icons/cartuchera-logo.svg";
import Hamburguer from "../../assets/icons/hamburguer.svg";
import CardListContext from "../../context/CardListContext";
import "./Header.css";

const Header = () => {
  const { showMenu, setShowMenu } = useContext(CardListContext);
  const [show, setShow] = useState(false);

  const hideHeader = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", hideHeader);
    return () => window.removeEventListener("scroll", hideHeader);
  }, []);

  return (
    <div>
      {!show && (
        <div className="flex fixed z-10 right-0">
          <button
            onClick={() => {
              setShowMenu(!showMenu);
              console.log("click", showMenu);
            }}
          >
            <img
              src={Hamburguer}
              alt="menu button"
              className="lg:mr-8 lg: mt-2"
            />
          </button>
        </div>
      )}
      {show && (
        <div
          style={{ backgroundColor: "#f8f5ed" }}
          className="flex fixed z-10 w-full justify-between bottom-shadow"
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
      )}
    </div>
  );
};

export default Header;
