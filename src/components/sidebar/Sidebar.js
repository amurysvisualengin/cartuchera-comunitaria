import React from "react";
import { useContext } from "react";
import CardListContext from "../../context/CardListContext";
import "./Sidebar.css";
import SocialMedia from "../socialMedia/SocialMedia";

import ConstruccionCut from "../../assets/icons/construccion-participativa-cut.svg";
import JusticiaCut from "../../assets/icons/justicia-narrativa-cut.svg";
import MapeoCut from "../../assets/icons/mapeo-comunitario-cut.svg";
import ProcesosCut from "../../assets/icons/procesos-comunitarios-cut.svg";
import TalleresCut from "../../assets/icons/talleres-de-imaginario-cut.svg";

import Rompehielos from "../../assets/icons/Rompehielos.svg";
import Audiovisuales from "../../assets/icons/Audiovisuales.svg";
import Herramientas from "../../assets/icons/Herramientas.svg";
import Check from "../../assets/icons/check.svg";
import Presentacion from "../../assets/icons/presentacion.svg";
import Fotos from "../../assets/icons/Fotos.svg";
import CartucheraLogo from "../../assets/icons/cartuchera-logo.svg";
import InfoMobile from "../infoMobile/InfoMobile";

const Sidebar = (props) => {
  const filters = [
    {
      id: "construccion-paticipativa",
      title: "Construcción Participativa",
      color: "#BEBE3B",
      src: ConstruccionCut,
    },
    {
      id: "justicia-narrativa",
      title: "Justicia Narrativa",
      color: "#F9A66B",
      src: JusticiaCut,
    },
    {
      id: "procesos-comunitarios",
      title: "Procesos Comunitarios",
      color: "#9BC2D4",
      src: ProcesosCut,
    },
    {
      id: "mapeo-comunitario",
      title: "Mapeo Comunitario",
      color: "#EF604B",
      src: MapeoCut,
    },
    {
      id: "taller-imaginario",
      title: "Taller Imaginario",
      color: "#E1AC47",
      src: TalleresCut,
    },
  ];

  const types = [
    {
      typeId: "presentation",
      name: "Presentación",
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
    showInformation,
    setShowInformation,
  } = useContext(CardListContext);

  const handleShowInfo = () => {
    setShowInformation(!showInformation);
  };

  return (
    <div className="right-shadow">
      <div
        style={{ maxWidth: "440px" }}
        className={`p-12 sidebar relative ${
          isSidebarVisible ? "block mt-0" : "hidden"
        } xl:block xl:h-full`}
      >
        <button onClick={handleShowInfo}>
          <div className="flex mt-16">
            <img src={Check} alt="" className="mr-4" />

            <h1 className="text-3xl custom-font">Instrucciones</h1>
          </div>
        </button>
        <div className="fixed overflow-scroll top-0 left-0 bottom-0 z-50">
          <InfoMobile />
        </div>

        <div className="kits mt-14 items-center">
          <h2 className=" text- text-left custom-font">ORDENA POR KIT:</h2>
          <div className="text-left text-sm mt-4">
            {filters.map((element) => (
              <div
                onClick={() => {
                  if (element.id === kitFilter) {
                    setKitFilter("");
                  } else setKitFilter(element.id);
                }}
                className={`py-4 mx-1 mr-2 mt-2 rounded-md cursor-pointer hover-box ${
                  !kitFilter || kitFilter === element.id
                    ? "opacity-100"
                    : "opacity-30"
                }`}
                style={{ backgroundColor: element.color }}
              >
                <div className="flex items-center relative">
                  <img className="ml-4 absolute" src={element.src} alt="" />
                  <div className="ml-24 text-base">{element.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" types w-96 mt-14">
          <div className="types-checkbox-parent">
            <div className=" ml-1 mr-12 rounded-md">
              <h2 className="text-xS mb-4 custom-font">ORDENA POR TIPO:</h2>
              {types.map((element) => (
                <div
                  onClick={() => {
                    if (typeFilter === element.typeId) {
                      setTypeFilter("");
                    } else setTypeFilter(element.typeId);
                  }}
                >
                  <div
                    className={`flex text-center py-4 text-white mt-2 items-center rounded-md cursor-pointer bg-checkbox hover-box ${
                      !typeFilter || typeFilter === element.typeId
                        ? "opacity-100:"
                        : "opacity-30"
                    }`}
                  >
                    <input
                      className="ml-6 mr-10 w-6 h-8"
                      type={element.type}
                      src={element.src}
                      alt={element.name}
                      id={element.name}
                      name={element.name}
                      value={element.name}
                    />
                    <div className="text-base">{element.name}</div>
                    <br />
                  </div>
                </div>
              ))}
            </div>
            {kitFilter === "" && typeFilter === "" && (
              <div className={`w-96 absolute bottom-10`}>
                <SocialMedia />
              </div>
            )}
            {(kitFilter !== "" || typeFilter !== "") && <SocialMedia />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
