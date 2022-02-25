import React, { useContext } from "react";
import One from "../../../assets/icons/one.svg";
import Two from "../../../assets/icons/two.svg";
import Saw from "../../../assets/icons/saw.svg";
import YellowShape from "../../../assets/icons/yellow-shape-left.svg";
import "./VueltaDeDos.css";
import CarouselComerio from "../../../components/carousel/CarouselComerio";
import DataComerioPhotos from "../../../assets/data/DataComerioPhotos.json";
import CardListContext from "../../../context/CardListContext";

const VueltaDeDos = () => {
  const { setCarouselPhotosComerio, isTablet } = useContext(CardListContext);

  return (
    <div>
      <div>
        <div className="mx-4">
          <div className="xl:flex xl:justify-center xl:items-center">
            <h2 className="custom-font-shadow text-4.5xl leading-10.5 xl:text-5.5xl xl:leading-11 xl:max-w-4xl mt-10 xl:mt-24 text-center">
              Vuelta del Dos, Los Guaretos + Los Padilla
            </h2>
          </div>
          <p className="text-1.9xl text-center xl:mt-7 custom-font hidden xl:block">
            Comerío, Puerto Rico
          </p>
          <p className="text-lg text-center mt-10 block xl:hidden">
            Comerío, Puerto Rico
          </p>
          <div className="xl:flex xl:justify-center mx-4">
            <div className="hidden xl:flex">
              <p className="text-xlLg xl:text-base xl:leading-6 text-center mt-10 xl:mt-12 xl:max-w-2xl">
                Ubicada en la exuberante región montañosa de Comerío, la
                pintoresca comunidad de Vuelta del Dos, Los Guaretos y Los
                Padilla en el sector Palomas es el hogar de cientos de familias
                que sufrieron graves pérdidas durante el huracán María. La labor
                conjunta entre La Maraña y Brigada Palomas dio pie al desarrollo
                de Imaginación Post María, un modelo participativo de acción
                ciudadana para la recuperación post-desastre. El resultado de su
                aplicación incluyó la creación de un Plan Comunitario y la
                implementación de dos proyectos puntuales de infraestructura y
                construcción:
              </p>
            </div>
          </div>
          <div className="mt-10 xl:mt-0 xl:flex xl:justify-center">
            <iframe
              title="Vuelta del dos video"
              src="https://www.youtube.com/embed/DG2rSpoWA_E"
              allowFullScreen
              frameborder="0"
              className={`w-full h-52 xl:w-99.3 xl:h-90 xl:mt-10 rounded-lg ${
                isTablet > 767 && isTablet < 1181 && "h-97"
              }`}
            ></iframe>
          </div>
          <div className="hidden xl:block">
            <img
              src={YellowShape}
              alt=""
              className="absolute transform right-0 w-106.5 shape-position"
            />
          </div>
          <div className="xl:flex xl:justify-evenly xl:mt-10">
            <div className="hidden xl:flex">
              <p className="text-base xl:max-w-lg ">
                Ubicada en la exuberante región montañosa de Comerío, la
                pintoresca comunidad de{" "}
                <strong>Vuelta del Dos, Los Guaretos y Los Padilla </strong>
                en el sector Palomas es el hogar de cientos de familias que
                sufrieron graves pérdidas durante el huracán María. La labor
                conjunta entre La Maraña y Brigada Palomas dio pie al desarrollo
                de Imaginación Post María, un modelo participativo de acción
                ciudadana para la recuperación post-desastre. El resultado de su
                aplicación incluyó la creación de un Plan Comunitario y la
                implementación de dos proyectos puntuales de infraestructura y
                construcción:{" "}
              </p>
            </div>
            <div className="flex lg:hidden ">
              <p className="text-xlLg mt-10">
                Ubicada en la exuberante región montañosa de Comerío, la
                pintoresca comunidad de Vuelta del Dos, Los Guaretos y Los
                Padilla en el sector Palomas es el hogar de cientos de familias
                que sufrieron graves pérdidas durante el huracán María. La labor
                conjunta entre La Maraña y Brigada Palomas dio pie al desarrollo
                de Imaginación Post María, un modelo participativo de acción
                ciudadana para la recuperación post-desastre. El resultado de su
                aplicación incluyó la creación de un Plan Comunitario y la
                implementación de dos proyectos puntuales de infraestructura y
                construcción:{" "}
              </p>
            </div>
            <div className=" mt-20 xl:mt-0  xl:max-w-lg">
              <div className="flex items-start">
                <img src={One} alt="" className="mr-4 mt-2" />
                <p className="text-left xl:mt-1 text-xlLg xl:text-base">
                  <strong>La Casa de Luis (2019):</strong> la comunidad eligió y
                  participó en el rediseño y reconstrucción de una casa
                  destruida por María.
                </p>
              </div>
              <div className="flex items-start mt-4">
                <img src={Two} alt="" className="mr-4 mt-2 xl:mt-0 " />
                <p className=" text-left text-xlLg xl:text-base">
                  <strong>Prende Palomas (2019):</strong> tras una serie de
                  Recorridos Comunitarios y Talleres de Imaginario,la comunidad
                  identificó y atendió el problema de la escasez de iluminación
                  nocturna en un sector del pueblo.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-10 xl:my-10">
            <img src={Saw} alt="" />
          </div>
          <div className="flex justify-center text-center ">
            <p className="max-w-2xl xl:text-base">
              Además de estos proyectos, la comunidad{" "}
              <strong>
                {" "}
                se reunió para construir su Línea de Tiempo como parte de un
                Taller de Imaginario.
              </strong>{" "}
              Este documento que narra la historia de la comunidad e ilustra
              cómo utilizar la cartuchera para agenciar procesos como los que
              ellxs atravesaron. <strong>¡Chequéala aquí!</strong>
            </p>
          </div>
        </div>
        <div className="my-10 xl:my-0 xl:mt-14 xl:mb-26">
          {setCarouselPhotosComerio(DataComerioPhotos)}
          <CarouselComerio />
        </div>
      </div>
      <div
        className="w-full xl:h-90 px-4 xl:py-16 mb-10 xl:flex xl:justify-around"
        style={{ backgroundColor: "#BEBE3B" }}
      >
        <h2 className="custom-font-shadow text-4.5xl leading-10.5 xl:text-3xl pt-10 ">
          Brigada Palomas
        </h2>
        <div className="text-xlLg pb-16 xl:text-base mt-8 xl:pb-8 xl:max-w-2xl">
          <p>
            Parte imprescindible de los esfuerzos comunitarios de recuperación
            fue la acción proactiva de Brigada Palomas. Esta organización sin
            fines de lucro de base comunitaria y liderada por jóvenes busca
            impulsar la participación ciudadana en la resolución de asuntos
            relacionados a los derechos civiles, la tierra, la educación y la
            sostenibilidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VueltaDeDos;
