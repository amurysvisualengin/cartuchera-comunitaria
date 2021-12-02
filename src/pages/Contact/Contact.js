import React from "react";
import HeaderRoutes from "../../components/headerRoutes/HeaderRoutes";
import Footer from "../../components/footer/Footer";
import "./Contact.css";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";

const Contact = () => {
  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: "#F8F5ED" }}>
      <div>
        <Menu />
        <Header />
      </div>
      <div className="lg:flex lg:justify-between lg:items-center shadow-box  pt-10 lg:mt-4">
        <div className="mx-4  lg:ml-40">
          <div>
            <h1 className="custom-font-shadow text-4.5xl lg:text-5.5xl">
              Contáctanos
            </h1>
            <p className="text-xlLg lg:text-base mt-4 lg:max-w-lg">
              <strong>La Maraña, Corp.</strong> es una organización
              puertorriqueña sin fines de lucro que trabaja para promover la
              transición de nuestras ciudades a entornos más habitables,
              participativos y sustentables para y por las comunidades de
              nuestro archipiélago caribeño.{" "}
            </p>
          </div>
        </div>
        <div
          className="w-full p-4 lg:pl-10 mt-10 lg:mt-10 lg:max-w-3xl"
          style={{ backgroundColor: "#EF604B" }}
        >
          <h2 className="custom-font-shadow text-lg lg:text-2xl mt-10">
            Qué te parece la Cartuchera Comunitaria? ¡Queremos saber de ti!
          </h2>
          <p className="text-lg font-bold my-4 lg:mt-8 ">
            Escríbenos aquí para ponernos en contacto:
          </p>
          <div>
            <form action="" className="pb-10 lg:pr-20 overflow-x-hidden">
              <input
                type="text"
                placeholder="Tu nombre"
                className="mb-4 w-full h-14 rounded px-4 border-form"
              />
              <input
                type="text"
                placeholder="Tu email"
                className="mb-4 w-full h-14 rounded px-4 border-form"
              />
              <input
                type="tel"
                placeholder="Tu teléfono (opcional)"
                className="mb-4 w-full h-14 rounded px-4 border-form"
              />
              <input
                type="text"
                placeholder="Mansaje (opcional)"
                className="mb-4 w-full pb-36 rounded px-4 border-form"
              />
              <button
                className="custom-font w-full text-sm lg:w-40 h-14 rounded shadow-box lg:mb-40"
                style={{ backgroundColor: "#9BC2D4" }}
              >
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
