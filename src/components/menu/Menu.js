import React, { useContext, useState } from "react";
import CardListContext from "../../context/CardListContext";
import Card from "../card/Card";

const Menu = (props) => {
  const { isMobile, showMenu, setShowMenu } = useContext(CardListContext);

  return (
    <div
      className={`fixed z-20 bg-black w-full h-full opacity-90 ${
        !showMenu ? "hidden" : "visible"
      } `}
    >
      <div className=" mt-5 lg:mt-10 mr-5 lg:mr-10 flex  justify-end">
        <button
          className={`bg-white lg:text-3xl w-6 lg:w-12 rounded-full 
            `}
          onClick={() => {
            if (showMenu) {
              setShowMenu(!showMenu);
            }
          }}
        >
          X
        </button>
      </div>

      <div className="flex justify-center items-center mt-16 lg:mt-32">
        <div className="block text-white custom-font-shadow text-3xl lg:text-6xl">
          {!isMobile && (
            <ul className="cursor-pointer text-center  ">
              <li className="hover:text-red-400  lg:mb-0">
                <a href=""></a>Inicio
              </li>
              <li className="hover:text-yellow-200 ">
                <a href=""></a>Sobre la cartuchera
              </li>
              <li className="hover:text-blue-300">
                <a href=""></a>Cartuchera Comunitaria
              </li>
              <li className="hover:text-green-600">
                <a href=""></a>Cómo ayudar
              </li>
              <li className="hover:text-yellow-700">
                <a href=""></a>Contáctanos
              </li>
            </ul>
          )}

          {isMobile && (
            <ul className="cursor-pointer text-left ml-6">
              <li className="hover:text-red-400 mb-10 lg:mb-0">
                <a href=""></a>Home
              </li>
              <li className="hover:text-yellow-200 mb-10">
                <a href=""></a>Cartuchera Comunitaria
              </li>
              <li className="hover:text-blue-300 mb-10">
                <a href=""></a>Tres comunidades
              </li>
              <li className="hover:text-green-600 mb-10">
                <a href=""></a>Cómo ayudar
              </li>
              <li className="hover:text-yellow-700">
                <a href=""></a>Contáctanos
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
