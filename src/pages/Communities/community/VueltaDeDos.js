import React from "react";
import One from "../../../assets/icons/one.svg";
import Two from "../../../assets/icons/two.svg";
import Saw from "../../../assets/icons/saw.svg";

const VueltaDeDos = () => {
  return (
    <div>
      <div className="mx-4">
        <div className="lg:flex lg:justify-center lg:items-center">
          <h2 className="custom-font-shadow text-4xl lg:text-6xl lg:max-w-4xl mt-10 text-center">
            Vuelta del Dos, Los Guaretos + Los Padilla
          </h2>
        </div>
        <p className="text-xl text-center mt-10 custom-font hidden lg:block">
          Comerío, Puerto Rico
        </p>
        <p className="text-xl text-center mt-10 block lg:hidden">
          Comerío, Puerto Rico
        </p>
        <div className="lg:flex lg:justify-center">
          <p className="text-xl text-center mt-10 lg:max-w-3xl">
            Ubicada en la exuberante región montañosa de Comerío, la pintoresca
            comunidad de Vuelta del Dos, Los Guaretos y Los Padilla en el sector
            Palomas es el hogar de cientos de familias que sufrieron graves
            pérdidas durante el huracán María. La labor conjunta entre La Maraña
            y Brigada Palomas dio pie al desarrollo de Imaginación Post María,
            un modelo participativo de acción ciudadana para la recuperación
            post-desastre. El resultado de su aplicación incluyó la creación de
            un Plan Comunitario y la implementación de dos proyectos puntuales
            de infraestructura y construcción:
          </p>
        </div>
        <div className="mt-10 lg:mt-0 lg:flex lg:justify-center">
          <iframe
            src="https://www.youtube.com/embed/DG2rSpoWA_E"
            allowFullScreen
            frameborder="0"
            className="w-full h-52 lg:w-99.3 lg:h-90 lg:mt-10 rounded-lg"
          ></iframe>
        </div>
        <div className="lg:flex lg:justify-evenly lg:mt-24">
          <p className="text-xl text-center lg:text-left mt-10 lg:max-w-xl">
            Ubicada en la exuberante región montañosa de Comerío, la pintoresca
            comunidad de Vuelta del Dos, Los Guaretos y Los Padilla en el sector
            Palomas es el hogar de cientos de familias que sufrieron graves
            pérdidas durante el huracán María. La labor conjunta entre La Maraña
            y Brigada Palomas dio pie al desarrollo de Imaginación Post María,
            un modelo participativo de acción ciudadana para la recuperación
            post-desastre. El resultado de su aplicación incluyó la creación de
            un Plan Comunitario y la implementación de dos proyectos puntuales
            de infraestructura y construcción:{" "}
          </p>
          <div className=" mt-20 lg:mt-8 lg:max-w-lg">
            <div className="flex items-start">
              <img src={One} alt="" className="mr-4 mt-5" />
              <p className=" text-left mt-4">
                <strong>La Casa de Luis (2019):</strong> la comunidad eligió y
                participó en el rediseño y reconstrucción de una casa destruida
                por María.
              </p>
            </div>
            <div className="flex items-start mt-4">
              <img src={Two} alt="" className="mr-4 " />
              <p className=" text-left">
                <strong>Prende Palomas (2019):</strong> tras una serie de
                Recorridos Comunitarios y Talleres de Imaginario,la comunidad
                identificó y atendió el problema de la escasez de iluminación
                nocturna en un sector del pueblo.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-10 lg:my-16">
          <img src={Saw} alt="" />
        </div>
        <div className="flex justify-center text-center ">
          <p className="max-w-2xl">
            Además de estos proyectos, la comunidad{" "}
            <strong>
              {" "}
              se reunió para construir su Línea de Tiempo como parte de un
              Taller de Imaginario.
            </strong>{" "}
            Este documento que narra la historia de la comunidad e ilustra cómo
            utilizar la cartuchera para agenciar procesos como los que ellxs
            atravesaron. <strong>¡Chequéala aquí!</strong>
          </p>
        </div>
        <div className="flex justify-center my-10">CARRROUSEL</div>
      </div>
      <div
        className="w-full lg:h-90 px-4 lg:py-16 mb-10 lg:flex lg:justify-around"
        style={{ backgroundColor: "#BEBE3B" }}
      >
        <h2 className="custom-font-shadow text-4xl pt-10 ">Brigada Palomas</h2>
        <div className="text-xl mt-8 pb-8 lg:max-w-2xl">
          Parte imprescindible de los esfuerzos comunitarios de recuperación fue
          la acción proactiva de Brigada Palomas. Esta organización sin fines de
          lucro de base comunitaria y liderada por jóvenes busca impulsar la
          participación ciudadana en la resolución de asuntos relacionados a los
          derechos civiles, la tierra, la educación y la sostenibilidad.
        </div>
      </div>
    </div>
  );
};

export default VueltaDeDos;
