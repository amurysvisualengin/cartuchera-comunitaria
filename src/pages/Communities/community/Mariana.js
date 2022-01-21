import React from "react";
import "./Mariana.css";
import Cube from "../../../assets/icons/cube.svg";
import Arecma from "../../../assets/imgs/arecma.png";
import Yellowshape from "../../../assets/icons/yellow-shape-complete.svg";
import CarouselHumacao from "../../../components/carousel/CarouselHumacao";

import CardListContext from "../../../context/CardListContext";
import { useContext } from "react";
import DataHumacaoPhotos from "../../../assets/data/DataHumacaoPhotos.json";

const Mariana = () => {
  const { setCarouselPhotosHumacao, isTablet } = useContext(CardListContext);
  return (
    <div className="overflow-hidden">
      <div className="mx-4 text-center">
        <h1 className="custom-font-shadow text-4.5xl xl:text-5.5xl  xl:mt-24 ">
          Mariana
        </h1>
        <p className="xl:text-1.9xl custom-font text-center mt-5 mb-12 hidden xl:block">
          Humacao, Puerto Rico
        </p>
        <p className="text-lg text-center mt-10 mb-10 block xl:hidden">
          Humacao, Puerto Rico
        </p>

        <div className="xl:flex xl:justify-center">
          <p className="text-xlLg xl:text-base mb-10 xl:mb-0 xl:max-w-3xl">
            El barrio Mariana en la zona montañosa de Humacao ha atestiguado más
            de tres décadas de liderato y acción comunitaria. En medio de una
            fallida respuesta gubernamental tras el paso del Huracán María, el
            Proyecto de Apoyo Mutuo Mariana sirvió como epicentro de apoyo
            comunitario, ofreciendo energía solar para vecinos sin luz y
            compartiendo una cocina donde vecinxs voluntarixs sirvieron 350
            comidas diarias durante tres meses consecutivos.
          </p>
        </div>
        <div className="mt-10 xl:mt-0 xl:flex xl:justify-center">
          <iframe
            src="https://www.youtube.com/embed/DG2rSpoWA_E"
            allowFullScreen
            frameborder="0"
            className={`w-full h-52 xl:w-99.5 xl:h-90 xl:mt-10 rounded-lg ${
              isTablet > 767 && isTablet < 1181 && "h-97"
            }`}
          ></iframe>
        </div>
        <div className="hidden xl:block">
          <img
            src={Yellowshape}
            alt=""
            className="absolute left-96 position-shape z-0"
          />
        </div>
        <div className="flex justify-center my-10">
          <img src={Cube} alt="" className="w-10 xl:w-20 xl:mt-10 xl:mb-20" />
        </div>

        <div className="xl:flex xl:justify-center mx-1 xl:mx-0">
          <p className="text-xlLg  xl:text-base xl:max-w-4xl">
            Bajo la sombrilla del proyecto Imaginación Post-María, La Maraña
            colaboró en el desarrollo de dos proyectos de autogestión
            comunitaria: el Parque Mis Panitas en la Loma de la Niña Mariana y
            la infraestructura comunitaria Agua para Todxs. Además, realizaron
            un Taller de Imaginario que rindió como resultado una hermosa Línea
            de Tiempo que narra la historia de la comunidad e ilustra cómo
            utilizsar la cartuchera para agenciar procesos como los que ellxs
            atravesaron. ¡Chequéala aquí!
          </p>
        </div>
      </div>
      <div className="xl:mb-32 my-10 xl:my-0 xl:mt-16">
        {setCarouselPhotosHumacao(DataHumacaoPhotos)}
        <CarouselHumacao />
      </div>

      <div
        className="w-full p-4 xl:py-24 xl:flex xl:justify-around"
        style={{ backgroundColor: "#F9A66B" }}
      >
        <div>
          <img
            src={Arecma}
            alt=""
            className="hidden xl:block xl:mb-7 xl:mt-6 xl:w-20"
          />
          <h2 className="custom-font-shadow pt-10 xl:pt-0  text-4.5xl leading-10.5 xl:text-3xl xl:leading-9 xl:max-w-lg">
            ARECMA: Asociación Recreativa y Educativa Comunal del Barrio Mariana
          </h2>
        </div>
        <p className="text-xlLg xl:text-base my-8 xl:my-4 xl:max-w-xl">
          La Asociación Recreativa y Educativa Comunal del Barrio Mariana es una
          organización sin fines de lucro de base comunitaria que desde el 1982
          ha trabajado por el bienestar y desarrollo integral del barrio.
          <br /> <br /> ARECMA ha autogestionado un sinnúmero de proyectos,
          incluyendo la rehabilitación de la antigua escuela Juan de Dios, la
          Celebración de 27 Festivales de la Pana y la adquisición de 11 cuerdas
          de terreno que hoy albergan su centro comunitario.
          <br /> <br /> Además del co-diseño y construcción del Parque Mis
          Panitas en la Loma, La Maraña contribuyó en el hincado de tres pozos
          que, al funcionar por gravedad, permiten el acceso gratuito a agua
          potable para toda la comunidad.
        </p>
      </div>
    </div>
  );
};

export default Mariana;
