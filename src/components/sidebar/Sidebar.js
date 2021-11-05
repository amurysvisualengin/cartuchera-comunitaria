import React from "react";
import { useContext } from "react";
import CardListContext from "../../context/CardListContext";
import "./Sidebar.css";
import SocialMedia from "../socialMedia/SocialMedia";

import Rompehielos from "../../assets/icons/Rompehielos.svg";
import Audiovisuales from "../../assets/icons/Audiovisuales.svg";
import Herramientas from "../../assets/icons/Herramientas.svg";

const Sidebar = (props) => {
  const filters = [
    {
      id: "construccion-paticipativa",
      title: "Construcción Participativa",
      color: "#BCBC68",
    },
    {
      id: "justicia-narrativa",
      title: "Justicia Narrativa",
      color: "#F0B07F",
    },
    {
      id: "procesos-comunitarios",
      title: "Procesos Comunitarios",
      color: "#A9C0CF",
    },
    {
      id: "mapeo-comunitario",
      title: "Mapeo Comunitario",
      color: "#CE6F5A",
    },
    {
      id: "taller-imaginario",
      title: "Taller Imaginario",
      color: "#D0AE6D",
    },
  ];

  const types = [
    {
      typeId: "rompehielos",
      name: "Rompehielos",
      type: "image",
      src: Rompehielos,
    },
    {
      typeId: "herramientas",
      name: "Herramientas",
      type: "image",
      src: Herramientas,
    },
    {
      typeId: "audio-visual",
      name: "Audiovisuales",
      type: "image",
      src: Audiovisuales,
    },
  ];

  const {
    kitFilter,
    setKitFilter,
    typeFilter,
    setTypeFilter,
    isSidebarVisible,
    setSidebarVisible,
  } = useContext(CardListContext);

  return (
    <div
      style={{ maxWidth: "443px" }}
      className={`p-12 w2/3 sidebar ${
        isSidebarVisible ? "block" : "hidden"
      } lg:block`}
    >
      <h1 className="text-2xl custom-font">Cartuchera comunitaria</h1>
      <p className="text-gray-400 mt-4">Lorem ipsum dolor sit amet. </p>
      <div className="kits mt-14 items-center">
        <h2 className="ml-7 text-xl custom-font">Ordenar por Kit</h2>
        <div className="text-center mt-4 custom-font">
          {filters.map((element) => (
            <div
              onClick={() => {
                if (element.id === kitFilter) {
                  setKitFilter("");
                } else setKitFilter(element.id);
              }}
              className={`py-4 text-sm mr-4 ml-1 mt-2 rounded-md cursor-pointer ${
                !kitFilter || kitFilter === element.id
                  ? "opacity-100"
                  : "opacity-30"
              }`}
              style={{ backgroundColor: element.color }}
            >
              {element.title}
            </div>
          ))}
        </div>
      </div>
      <div className="ml-2 types mt-14">
        <div className="types-checkbox-parent">
          <div className="p-8 h-72 w-80 shadow-md rounded-md order-type-bg">
            <h2 className="text-xl custom-font">Ordenar por tipo</h2>
            {types.map((element) => (
              <div
                onClick={() => {
                  if (element.typeId === typeFilter) {
                    setTypeFilter("");
                  } else setTypeFilter(element.typeId);
                }}
                //bold
                className={`flex text-center text-white mt-4 p-2 rounded-md cursor-pointer bg-checkbox custom-font ${
                  !typeFilter || typeFilter === element.typeId
                    ? "opacity-100:"
                    : "opacity-30"
                }`}
              >
                <input
                  className="ml-4"
                  type={element.type}
                  src={element.src}
                  alt={element.name}
                  id={element.name}
                  name={element.name}
                  value={element.name}
                />
                <div>
                  {
                    <label className="ml-2 cursor-pointer" for={element.name}>
                      {element.name}
                    </label>
                  }
                </div>
                <br />
              </div>
            ))}
          </div>

          <div className="w-96">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
