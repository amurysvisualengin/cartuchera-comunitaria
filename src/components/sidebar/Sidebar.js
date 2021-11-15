import React from "react";
import { useContext } from "react";
import CardListContext from "../../context/CardListContext";
import "./Sidebar.css";
import SocialMedia from "../socialMedia/SocialMedia";

import Rompehielos from "../../assets/icons/Rompehielos.svg";
import Audiovisuales from "../../assets/icons/Audiovisuales.svg";
import Herramientas from "../../assets/icons/Herramientas.svg";
import CartucheraLogo from "../../assets/icons/cartuchera-logo.svg";
import Check from "../../assets/icons/check.svg";
import Presentacion from "../../assets/icons/presentacion.svg";
import Fotos from "../../assets/icons/Fotos.svg";

const Sidebar = (props) => {
  const filters = [
    {
      id: "construccion-paticipativa",
      title: "Construcción Participativa",
      color: "#BEBE3B",
    },
    {
      id: "justicia-narrativa",
      title: "Justicia Narrativa",
      color: "#F9A66B",
    },
    {
      id: "procesos-comunitarios",
      title: "Procesos Comunitarios",
      color: "#9BC2D4",
    },
    {
      id: "mapeo-comunitario",
      title: "Mapeo Comunitario",
      color: "#EF604B",
    },
    {
      id: "taller-imaginario",
      title: "Taller Imaginario",
      color: "#E1AC47",
    },
  ];

  const types = [
    {
      typeId: "presentation",
      name: "Pesentación",
      type: "image",
      src: Presentacion,
    },
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
      name: "Video",
      type: "image",
      src: Audiovisuales,
    },
    {
      typeId: "photo",
      name: "Fotos",
      type: "image",
      src: Fotos,
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
        isSidebarVisible ? "block mt-0" : "hidden"
      } lg:block`}
    >
      <div className="flex mt-16">
        <img src={Check} alt="" className="mr-4" />
        <h1 className="text-3xl custom-font">Intrucciones</h1>
      </div>

      <div className="kits mt-14 items-center">
        <h2 className=" text-xl text-left custom-font">Ordenar por Kit:</h2>
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
      <div className=" types w-96 mt-14">
        <div className="types-checkbox-parent">
          <div className="mr-14 rounded-md">
            <h2 className="text-xl custom-font">Ordenar por tipo:</h2>
            {types.map((element) => (
              <div
                onClick={() => {
                  if (element.typeId === typeFilter) {
                    setTypeFilter("");
                  } else setTypeFilter(element.typeId);
                }}
                className={`flex text-center text-white mt-4 p-4 rounded-md cursor-pointer bg-checkbox  ${
                  !typeFilter || typeFilter === element.typeId
                    ? "opacity-100:"
                    : "opacity-30"
                }`}
              >
                <input
                  className="ml-4 mr-10 w-8 h-8"
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

          <div className="w-96 mt-107 ">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
