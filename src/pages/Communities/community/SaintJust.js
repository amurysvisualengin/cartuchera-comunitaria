import React from "react";
import TransparentShape from "../../../assets/icons/transparent-shape.svg";
import Parceleras from "../../../assets/icons/parceleras-afro-caribenas.svg";
import "../Communities.css";
import Carousel from "../../../components/carousel/Carousel";
import DataCarolinaPhotos from "../../../assets/data/DataCarolinaPhotos.json";
import CardListContext from "../../../context/CardListContext";
import { useContext } from "react";
import { useEffect } from "react";

const SaintJust = () => {
  const { setCarouselPhotosCarolina, isTablet } = useContext(CardListContext);

  useEffect(() => {
    setCarouselPhotosCarolina(DataCarolinaPhotos);
  });

  return (
    <div>
      <div className="lg:flex lg:justify-center lg:items-center lg:mt-48">
        <h1 className="custom-font-shadow text-4.5xl leading-10.5 lg:text-5.5xl lg:leading-11 lg:w-103 mt-32 lg:mt-10 text-center">
          Saint Just, Los Mirtos + San Antón
        </h1>
      </div>
      <p className="text-1.9xl custom-font text-center lg:mt-7 hidden lg:block">
        Carolina, Puerto Rico
      </p>
      <p className="text-lg leading-6 text-center mt-10 block lg:hidden">
        Carolina, Puerto Rico
      </p>
      <div className="xl:flex justify-center">
        <p className="text-xlLg leading-7 xl:text-base text-center mt-10 xl:max-w-2xl mx-4 xl:mx-0">
          Los barrios de San Antón y St. Just y el residencial Los Mirtos,
          localizados en la ruralía de Carolina, son hogar de una comunidad
          históricamente negra que ha atravesado la industrialización de su
          entorno y que lucha día a día contra la marginación racial. Desde el
          2011, las artistas Lydela y Michel Nonó han liderado un proyecto
          artístico de resistencia, educación emancipatoria y empoderamiento
          comunitario.
        </p>
      </div>
      <div className="mt-10 xl:flex xl:justify-center mx-4 xl:mx-0">
        <iframe
          title="Saint Just video"
          src="https://www.youtube.com/embed/DG2rSpoWA_E"
          allowFullScreen
          frameBorder="0"
          className={`w-full h-52 xl:w-99.3 xl:h-90 xl:mt-20 rounded-lg ${
            isTablet > 767 && isTablet < 1181 && "h-97"
          }`}
        ></iframe>
      </div>
      <div className="xl:flex xl:justify-center">
        <div className="xl:w-99.3 bg-black mt-10 p-4 rounded mx-4 xl:mx-0">
          <p
            className="text-xlLg leading-7 xl:text-base xl:leading-6 "
            style={{ color: "#EBE4CF" }}
          >
            El trabajo colaborativo entre su comunidad y La Maraña bajo la
            iniciativa Imaginación Post-María permitió la reconstrucción de la
            Casa de Iris y la reconstrucción del comedor de La Conde.
          </p>
        </div>
      </div>
      <div className="block xl:hidden">
        <img src={TransparentShape} alt="" className="absolute top-absolute" />
      </div>
      <div className="xl:mb-26 xl:mt-24 my-10 xl:my-0">
        <Carousel />
      </div>
      <div
        className="p-4 xl:flex justify-around"
        style={{ backgroundColor: "#9BC2D4" }}
      >
        <div className="">
          <img src={Parceleras} alt="" className="hidden xl:block xl:mt-24" />
          <h2 className="custom-font-shadow break-words text-4.5xl leading-10.5 xl:text-3xl xl:leading-9 mt-10 xl:max-w-lg ">
            PATBA: Parceleras Afrocaribeñas para la Transformación Barrial
          </h2>
        </div>
        <div className=" text-xl lg:text-base xl:leading-6 pt-10 xl:pt-24 xl:max-w-2xl xl:py-20">
          <p>
            PATBA - acrónimo de Parceleras Afrocaribeñas para la Transformación
            Barrial - es un grupo intergeneracional de vecinas de la comunidad
            comprometidas con el arte, la autogestión y sustentabilidad. Su
            lucha principal ha sido la rehabilitación de la Escuela Carlos Conde
            Marín, cerrada por el Departamento de Educación en el 2017, y su
            transformación en un epicentro de cultura, educación y agricultura
            por y para la comunidad.
          </p>
          <p className="mt-10 pb-10 xl:pb-0">
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
