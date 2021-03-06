import React, { useContext, useEffect, useState } from "react";
import CatucheraLogo from "../../assets/icons/cartuchera-logo.svg";
import Hamburguer from "../../assets/icons/hamburguer.svg";
import CardListContext from "../../context/CardListContext";
import InfoMobile from "../infoMobile/InfoMobile";
import "./Header.css";

const Header = () => {
  const {
    showMenu,
    setShowMenu,
    isMobile,
    setShowInformation,
    showInformation,
    isExpand,
  } = useContext(CardListContext);
  const [show, setShow] = useState(false);

  const hideHeader = () => {
    if (!isMobile) {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
  };
  useEffect(() => {
    if (!isMobile) {
      window.addEventListener("scroll", hideHeader);
      return () => window.removeEventListener("scroll", hideHeader);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = "unset");
    }
  }, [showMenu]);

  return (
    <div>
      {!isMobile && (
        <div>
          {!show && (
            <div className="flex justify-between fixed z-10 ">
              <img
                src={CatucheraLogo}
                alt="cartuchera logo"
                className=" py-6 pl-15 "
              />
              <button
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                <img
                  src={Hamburguer}
                  alt="menu button"
                  className="lg:mr-8 lg: mt-2 top-4 right-0 fixed"
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
                className=" py-6 pl-15"
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
      )}
      {isMobile && (
        <div
          className={`${
            isExpand
              ? "hidden"
              : "flex fixed z-10 w-full justify-between bottom-shadow"
          } h-20 `}
          style={{ backgroundColor: "#f8f5ed" }}
        >
          <img src={CatucheraLogo} alt="" className="p-4" />

          <div className="absolute right-12 top-4">
            <button
              className="custom-font-shadow text-white bg-black text-xs px-2 h-6 mt-3 mr-6 rounded"
              onClick={() => {
                setShowInformation(!showInformation);
              }}
            >
              INFO
            </button>
          </div>
          <div className="fixed overflow-scroll top-0 left-0 bottom-0 z-50">
            <InfoMobile />
          </div>

          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <img src={Hamburguer} alt="menu button" className=" mt-0 mr-1" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
