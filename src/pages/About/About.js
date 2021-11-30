import React from "react";
import HeaderRoutes from "../../components/headerRoutes/HeaderRoutes";
import DataAbout from "../../assets/data/DataAbout.json";
import Footer from "../../components/footer/Footer";
import "./About.css";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import DondeNace from "../../assets/imgs/donde-nace.png";
import DondeNace2 from "../../assets/imgs/donde-nace-2.png";
import Childs from "../../assets/imgs/childs.png";
import BlueShape from "../../assets/icons/blue-shape.svg";
import YellowShape from "../../assets/icons/yellow-shape.svg";

const About = () => {
  const types = DataAbout;
  return (
    <div className="h-full">
      <Header />
      <Menu />
      <div className="h-24" style={{ backgroundColor: "#F8F5ED" }}></div>
      <div className="hidden lg:absolute lg:-z-10 lg:top-0">
        <img src={BlueShape} alt="" />
      </div>
      <div className="px-4">
        <div className="lg:flex justify-around lg:px-26">
          <div>
            <h1 className="custom-font-shadow text-4xl mt-10 lg:text-6xl lg:max-w-lg lg:mb-10 lg:mt-26 leading-11">
              Sobre la cartuchera
            </h1>
            {/* no funciona lg:custom-font */}
            <p className="text-xl lg:text-base mb-10 lg:w-96 custom-font">
              Herramientas participativas para el desarrollo sostenible de
              nuestras islas y sus comunidades.
            </p>
          </div>
          <div className="lg:flex lg:justify-center">
            <iframe
              src="https://www.youtube.com/embed/DG2rSpoWA_E"
              allowFullScreen
              frameborder="0"
              className="w-full  h-52 lg:w-97.5 xl:w-100 lg:min-w-max lg:h-96 lg:mt-40"
            ></iframe>
          </div>
        </div>

        <div className="lg:flex lg:mt-48 lg:justify-center">
          <img
            src={Childs}
            alt=""
            className="hidden lg:flex lg:visible lg:mr-20"
          />
          <div>
            <h2 className="custom-font-shadow text-4xl  lg:text-6xl mt-10 ">
              ¿Qué es?
            </h2>
            <p className="text-xl lg:text-base mb-9 lg:w-98">
              Una cartuchera se utiliza para guardar lápices, sacapuntas y
              gomas, pero ésta es especial. En lugar de artículos escolares, la
              Cartuchera Comunitaria™ contiene herramientas colaborativas,
              diseñadas para facilitar la imaginación, planificación y ejecución
              de cambios positivos en comunidades como la tuya, a lo largo y
              ancho de nuestro archipiélago y más allá.
            </p>
          </div>
        </div>
        {/* CARROUSEL!!! */}
        <p className="lg:mt-26">CARROUSEL</p>

        <div className="lg:flex lg:justify-center lg:text-center">
          <div>
            <h2 className="custom-font-shadow  text-4xl lg:text-6xl mt-10">
              ¿Para quién es?
            </h2>
            <p className="text-xl lg:text-base lg:w-100 lg:mt-6">
              Toda persona, familia, grupo de vecinxs, organizaciones
              comunitarias o entidades que se atrevan a soñar y diseñar un mejor
              entorno puede usar esta cartuchera. ¡Es para todxs!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-9 lg:mt-24">
        <img
          src={DondeNace}
          alt="donde nace"
          className="w-full block  lg:hidden"
        />
        <div className="hidden lg:flex ">
          <img
            src={YellowShape}
            alt="shape"
            className="lg:absolute -z-10 right-0 top-shape"
          />
        </div>
        <img
          src={DondeNace2}
          alt="donde nace"
          className="w-full hidden lg:flex lg:visible"
        />
      </div>
      <div className="px-4">
        <div className="lg:flex lg:justify-around lg:mt-16">
          <div>
            <h2 className="custom-font-shadow text-4xl lg:text-6xl lg:w-97 mt-10 lg:mt-5 leading-11">
              ¿De dónde nace?
            </h2>
            {/* lg:custom-font no funciona */}
            <p className="text-xl lg:text-base lg:w-99 lg:mt-6 custom-font">
              Este recurso es producto del trabajo colaborativo entre La Maraña
              y tres comunidades puertorriqueñas como parte del proyecto
              Imaginación Post-María, sostenido entre el 2017 y el 2020.
            </p>
          </div>
          <p className="text-xl lg:text-base mt-10 lg:w-99">
            Los procesos de autogestión, trabajo colectivo y liderazgo vecinal
            de las comunidades San Antón, Saint Just y Los Mirtos en Carolina;
            Mariana y Jagüeyes en Humacao; y La Vuelta del Dos, Los Guaretos y
            Los Padillas en Comerío no sólo subrayaron el enorme poder de una
            comunidad unida y activa en la determinación de su entorno, sino que
            nos permitieron co-desarrollar herramientas para guiar a otras
            comunidades a través de Puerto Rico en su empoderamiento y
            autodeterminación. Aunque nuestra cartuchera nace a raíz de un
            contexto post-desastre, son herramientas que se pueden usar en
            cualquier circunstancia. ¿Cuál es el momento idóneo para usarlas?
            Siempre que haya un interés en conocer mejor tu comunidad para
            imaginar, agenciar y ejecutar espacios dignos y sostenibles para
            todxs.
          </p>
        </div>

        <div className="lg:flex lg:justify-center lg:text-center  lg:mt-48">
          <div className="">
            <h2 className="custom-font-shadow text-4xl lg:text-6xl mt-10">
              ¿Qué contiene?
            </h2>
            <p className="text-xl lg:text-base mt-10 lg:w-102 ">
              Los materiales y herramientas que componen la Cartuchera
              Comunitaria™ están categorizadas en cinco [5] grupos que llamamos
              kits. Cada kit, identificado con un color distinto, corresponde a
              una temática de actividades colectivas para la participación
              comunitaria. Cada grupo de tarjetas y herramientas tiene un líder
              comunitarix del Barrio Las Yautías de Puerto Rico, a quienes te
              presentamos a continuación:
            </p>
          </div>
        </div>

        {types.map((element, index) => (
          <div
            className={`mb-16 lg:flex justify-center lg:mt-72 lg:mb-28   ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            } `}
          >
            <div className="flex justify-center mt-10 mx-26 lg:h-96">
              <img src={element.img} alt="" />
            </div>

            <div className="">
              <h2 className="custom-font-shadow text-4xl lg:text-6xl mt-10 lg:w-97 leading-11">
                {element.title}
              </h2>
              <p className="text-xl lg:text-base mt-10 lg:w-97">
                {element.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default About;
