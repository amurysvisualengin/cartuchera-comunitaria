import React from "react";
import TransparentShape from "../../../assets/icons/transparent-shape.svg";
import Parceleras from "../../../assets/icons/parceleras-afro-caribenas.svg";
import "../Communities.css";

const SaintJust = () => {
  return (
    <div>
      <div className="lg:flex lg:justify-center lg:items-center">
        <h1 className="custom-font-shadow text-4xl lg:text-6xl lg:w-103 mt-10 text-center">
          Saint Just, Los Mirtos + San Antón
        </h1>
      </div>
      <p className="text-xl custom-font text-center mt-10 hidden lg:block">
        Carolina, Puerto Rico
      </p>
      <p className="text-xl text-center mt-10 block lg:hidden">
        Carolina, Puerto Rico
      </p>
      <div className="lg:flex justify-center">
        <p className="text-xl text-center mt-10 lg:max-w-2xl">
          Los barrios de San Antón y St. Just y el residencial Los Mirtos,
          localizados en la ruralía de Carolina, son hogar de una comunidad
          históricamente negra que ha atravesado la industrialización de su
          entorno y que lucha día a día contra la marginación racial. Desde el
          2011, las artistas Lydela y Michel Nonó han liderado un proyecto
          artístico de resistencia, educación emancipatoria y empoderamiento
          comunitario.
        </p>
      </div>
      <div className="mt-10 lg:flex lg:justify-center">
        <iframe
          src="https://www.youtube.com/embed/DG2rSpoWA_E"
          allowFullScreen
          frameborder="0"
          className="w-full h-52 lg:w-99.3 lg:h-90 lg:mt-20 rounded-lg"
        ></iframe>
      </div>
      <div className="lg:flex lg:justify-center">
        <div className="lg:w-1/2 bg-black text-white mt-10 p-4 rounded">
          <p className="text-xl">
            El trabajo colaborativo entre su comunidad y La Maraña bajo la
            iniciativa Imaginación Post-María permitió la reconstrucción de la
            Casa de Iris y la reconstrucción del comedor de La Conde.
          </p>
        </div>
      </div>
      <div className="block lg:hidden">
        <img src={TransparentShape} alt="" className="absolute top-absolute" />
      </div>
      <div className="mt-10">Carrousel</div>
      <div
        className="p-4 lg:flex justify-around"
        style={{ backgroundColor: "#9BC2D4" }}
      >
        <div>
          <img src={Parceleras} alt="" className="hidden lg:block lg:mt-32" />
          <h2 className="custom-font-shadow text-3xl mt-10 lg:max-w-lg ">
            PATBA: Parceleras Afrocaribeñas para la Transformación Barrial
          </h2>
        </div>
        <div className="text-xl mt-8 lg:max-w-2xl lg:py-20">
          <p>
            PATBA - acrónimo de Parceleras Afrocaribeñas para la Transformación
            Barrial - es un grupo intergeneracional de vecinas de la comunidad
            comprometidas con el arte, la autogestión y sustentabilidad. Su
            lucha principal ha sido la rehabilitación de la Escuela Carlos Conde
            Marín, cerrada por el Departamento de Educación en el 2017, y su
            transformación en un epicentro de cultura, educación y agricultura
            por y para la comunidad.
          </p>
          <p className="mt-4">
            La labor conjunta PATBA y La Maraña permitió la reconstrucción del
            comedor escolar. Este espacio no sólo permitirá la distribución de
            comidas calientes a la comunidad durante periodos de emergencia,
            sino que constituye un eje fundamental de la plataforma
            agro-educativa de La Conde. Logo PATBA
          </p>
        </div>
      </div>
    </div>
  );
};

export default SaintJust;
