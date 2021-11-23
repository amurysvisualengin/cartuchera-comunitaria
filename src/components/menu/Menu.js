import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import CardListContext from "../../context/CardListContext";
import "./Menu.css";
import CloseButton from "../../assets/icons/close.svg";

const Menu = (props) => {
  const { isMobile, showMenu, setShowMenu } = useContext(CardListContext);

  return (
    <div
      className={`fixed z-20  w-full h-full opacity-90 ${
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

      <div className="flex justify-center items-center mt-16 lg:mt-32">
        <div className="block text-white custom-font-shadow text-3xl lg:text-6xl">
          {!isMobile && (
            <ul className="cursor-pointer text-center  ">
              <li className="hover:text-red-400  lg:mb-0">
                <Link to="/">Inicio</Link>
              </li>
              <li className="hover:text-yellow-200 ">
               <Link to="/sobre-nosotros">Sobre la cartuchera</Link>
              </li>
              <li className="hover:text-blue-300">
                <Link to="/app">Cartuchera Comunitaria</Link>
              </li>
              <li className="hover:text-green-600">
                <Link to="/como-ayudar">Cómo ayudar</Link>
              </li>
              <li className="hover:text-yellow-700">
                <Link to="/contacto">Contáctanos</Link>
              </li>
              <li className="hover:text-blue-300 mb-10">
                <Link to="/tres-comunidades">Tres comunidades</Link>
              </li>
            </ul>
          )}

          {isMobile && (
            <ul className="cursor-pointer text-left ml-6">
              <li className="hover:text-red-400 mb-10 lg:mb-0">
              <Link to="/">Inicio</Link>
              </li>
              <li className="hover:text-yellow-200 mb-10">
              <Link to="/app">Cartuchera Comunitaria</Link>
              </li>
              <li className="hover:text-blue-300 mb-10">
              <Link to="/tres-comunidades">Tres comunidades</Link>
              </li>
              <li className="hover:text-green-600 mb-10">
              <Link to="/como-ayudar">Cómo ayudar</Link>
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
