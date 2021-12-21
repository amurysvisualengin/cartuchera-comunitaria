import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardListContext from "../../context/CardListContext";
import "./Menu.css";
import CloseButton from "../../assets/icons/close.svg";

const Menu = (props) => {
  const { isMobile, showMenu, setShowMenu } = useContext(CardListContext);
  

  return (
    <div
      className={`fixed z-20 overflow-scroll  w-full h-full opacity-90 ${
        !showMenu ? "hidden" : "visible"
      } `}
      style={{ backgroundColor: "#000000" }}
    >
      <div className=" mt-5 lg:mt-10 mr-5 lg:mr-10 flex  justify-end">
        <button
          className={` w-12 
            `}
          onClick={() => {
            if (showMenu) {
              setShowMenu(!showMenu);
            }
          }}
        >
          <img src={CloseButton} alt="" className="filter invert" />
        </button>
      </div>

      <div className="flex justify-center items-center lg:mt-16 ">
        <div className="block text-white custom-font-shadow text-3xl lg:text-5xl">
          {!isMobile && (
            <ul
              className="cursor-pointer text-center  "
              onClick={() => {
                if (showMenu) {
                  setShowMenu(!showMenu);
                }
              }}
            >
              <li className="hover:text-red-400  lg:mb-0">
                <Link to="/">Inicio</Link>
              </li>
              <li className="hover:text-yellow-200 ">
                <Link to="/sobrelacartuchera">Sobre la cartuchera</Link>
              </li>
              <li className="hover:text-blue-300">
                <Link to="/juegodecartas">Cartuchera Comunitaria</Link>
              </li>
              <li className="hover:text-green-600">
                <Link to="/apoyalagesta">Cómo ayudar</Link>
              </li>
              <li className="hover:text-yellow-700">
                <Link to="/contacto">Contáctanos</Link>
              </li>
              <li className="hover:text-blue-300 mb-10">
                <Link to="/trescomunidades ">Tres comunidades</Link>
              </li>
            </ul>
          )}

          {isMobile && (
            <ul
              className=" cursor-pointer text-left mx-4"
              onClick={() => {
                if (showMenu) {
                  setShowMenu(!showMenu);
                }
              }}
            >
              <li className="hover:text-red-400 mt-4 mb-8 lg:mb-0">
                <Link to="/">Inicio</Link>
              </li>
              <li className="hover:text-yellow-200 mb-8 ">
                <Link to="/sobrelacartuchera">Sobre la cartuchera</Link>
              </li>
              <li className="hover:text-yellow-200 mb-8">
                <Link to="/juegodecartas">Cartuchera Comunitaria</Link>
              </li>
              <li className="hover:text-blue-300 mb-8">
                <Link to="/trescomunidades">Tres comunidades</Link>
              </li>
              <li className="hover:text-green-600 mb-8">
                <Link to="/apoyalagesta">Cómo ayudar</Link>
              </li>
              <li className="hover:text-yellow-700">
                <Link to="/contacto">Contáctanos</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
