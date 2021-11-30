import React from "react";
import "./Mariana.css";
import Cube from "../../../assets/icons/cube.svg";
import Arecma from "../../../assets/imgs/arecma.png";
import Yellowshape from "../../../assets/icons/yellow-shape-complete.svg";

const Mariana = () => {
  return (
    <div>
      <div className="mx-4 text-center">
        <h1 className="custom-font-shadow text-4xl lg:text-6xl mb-10 lg:mt-24 ">
          Mariana
        </h1>
        <p className="text-xl custom-font text-center mt-10 mb-10 hidden lg:block">
          Humacao, Puerto Rico
        </p>
        <p className="text-xl text-center mt-10 mb-10 block lg:hidden">
          Humacao, Puerto Rico
        </p>

        <div className="lg:flex lg:justify-center">
          <p className="text-xl lg:text-base mb-10 lg:mb-0 lg:max-w-3xl">
            El barrio Mariana en la zona montañosa de Humacao ha atestiguado más
            de tres décadas de liderato y acción comunitaria. En medio de una
            fallida respuesta gubernamental tras el paso del Huracán María, el
            Proyecto de Apoyo Mutuo Mariana sirvió como epicentro de apoyo
            comunitario, ofreciendo energía solar para vecinos sin luz y
            compartiendo una cocina donde vecinxs voluntarixs sirvieron 350
            comidas diarias durante tres meses consecutivos.
          </p>
        </div>
        <div className="mt-10 lg:mt-0 lg:flex lg:justify-center">
          <iframe
            src="https://www.youtube.com/embed/DG2rSpoWA_E"
            allowFullScreen
            frameborder="0"
            className="w-full h-52 lg:w-99.5 lg:h-90 lg:mt-10 rounded-lg"
          ></iframe>
        </div>
        <div className="hidden lg:block">
          <img
            src={Yellowshape}
            alt=""
            className="absolute left-96 position-shape z-50"
          />
        </div>
        <div className="flex justify-center my-10">
          <img src={Cube} alt="" className="w-10 lg:w-20 lg:mt-10 lg:mb-20" />
        </div>

        <div className="lg:flex lg:justify-center">
          <p className="text-xl lg:text-base lg:max-w-4xl">
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
      <div className="flex justify-center my-10">CARROUSEL</div>
      <div
        className="w-full p-4 lg:py-24 lg:flex lg:justify-around"
        style={{ backgroundColor: "#F9A66B" }}
      >
        <div>
          <img
            src={Arecma}
            alt=""
            className="hidden lg:block lg:mb-4 lg:mt-6 lg:w-20"
          />
          <h2 className="custom-font-shadow  text-4xl lg:max-w-xl">
            ARECMA: Asociación Recreativa y Educativa Comunal del Barrio Mariana
          </h2>
        </div>
        <p className="text-xl lg:text-base my-14 lg:max-w-2xl">
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
