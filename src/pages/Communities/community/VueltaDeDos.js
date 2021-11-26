import React from "react";
import One from "../../../assets/icons/one.svg";
import Two from "../../../assets/icons/two.svg";

const VueltaDeDos = () => {
  return (
    <div>
      <h2 className="custom-font-shadow text-4xl mt-10 text-center">
        Vuelta del Dos, Los Guaretos + Los Padilla
      </h2>
      <p className="text-xl text-center mt-10">Comerío, Puerto Rico</p>
      <p className="text-xl text-center mt-10">
        Ubicada en la exuberante región montañosa de Comerío, la pintoresca
        comunidad de Vuelta del Dos, Los Guaretos y Los Padilla en el sector
        Palomas es el hogar de cientos de familias que sufrieron graves pérdidas
        durante el huracán María. La labor conjunta entre La Maraña y Brigada
        Palomas dio pie al desarrollo de Imaginación Post María, un modelo
        participativo de acción ciudadana para la recuperación post-desastre. El
        resultado de su aplicación incluyó la creación de un Plan Comunitario y
        la implementación de dos proyectos puntuales de infraestructura y
        construcción:
      </p>
      <div className="mt-10 lg:flex lg:justify-center">
        <iframe
          src="https://www.youtube.com/embed/DG2rSpoWA_E"
          allowFullScreen
          frameborder="0"
          className="w-full h-52 lg:w-99 lg:h-90 lg:mt-20 rounded-lg"
        ></iframe>
      </div>
      <p className="text-xl text-center mt-10">
        Ubicada en la exuberante región montañosa de Comerío, la pintoresca
        comunidad de Vuelta del Dos, Los Guaretos y Los Padilla en el sector
        Palomas es el hogar de cientos de familias que sufrieron graves pérdidas
        durante el huracán María. La labor conjunta entre La Maraña y Brigada
        Palomas dio pie al desarrollo de Imaginación Post María, un modelo
        participativo de acción ciudadana para la recuperación post-desastre. El
        resultado de su aplicación incluyó la creación de un Plan Comunitario y
        la implementación de dos proyectos puntuales de infraestructura y
        construcción:{" "}
      </p>
      <div>
        <div className="flex items-center">
          <img src={One} alt="" className="mr-4 mt-2" />
          <p className=" text-left mt-20">
            <strong>La Casa de Luis (2019):</strong> la comunidad eligió y
            participó en el rediseño y reconstrucción de una casa destruida por
            María.
          </p>
        </div>
        <div className="flex justify- items-center mt-10">
          <img src={Two} alt="" className="mr-4" />
          <p className=" text-left">
            <strong>Prende Palomas (2019):</strong> tras una serie de Recorridos
            Comunitarios y Talleres de Imaginario,la comunidad identificó y
            atendió el problema de la escasez de iluminación nocturna en un
            sector del pueblo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VueltaDeDos;
