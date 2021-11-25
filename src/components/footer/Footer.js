import React from "react";
import FooterImg from "../../assets/imgs/footer-img.png";
import FooterForm from "./FooterForm";
import CardListContext from "../../context/CardListContext";

import Instagram from "../../assets/icons/instagram.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Facebook from "../../assets/icons/Facebook.svg";

export const Footer = () => {
  return (
    <div className="bg-black h-full w-full overflow-x-hidden">
      <div>
        <img src={FooterImg} alt="" className="w-full h-full" />
      </div>

      <div className="w-full lg:flex lg:justify-between text-white mt-10 text-xl mx-4 lg:mx-0 lg:px-20">
        <div className="lg:w-98">
          <h1 className="font-bold ">La Cartuchera Comunitaria</h1>
          <p className="mt-4 mr-6 text-tiny ">
            La Cartuchera Comunitaria™ ha sido posible gracias a las tres
            comunidades aliadas al proyecto Imaginación Post-María, el apoyo de
            nuestros donantes, y la aportación ciudadana.
          </p>

          <div className="mt-4 text-tiny">
            <a href="https://www.youtube.com" className="underline  ">
              www.cartucheracomunitaria.com
            </a>
            <p>lamarana.pr@gmail.com</p>
            <p>San Juan, Puerto Rico</p>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 font-bold">
          <h2>Subscríbete</h2>

          <div>
            <FooterForm />
            <a
              href="https://www.youtube.com"
              className="text-xs font-thin "
              style={{ color: "#FFFFFF" }}
            >
              Aceptar terminos y condiciones{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-20 lg:mb-9 px-5 lg:px-20">
        <hr />
      </div>

      <div className="lg:flex lg:justify-between items-center lg:mr-20">
        <ul className="lg:flex items-center px-20 hidden lg:visible ">
          <li className="mr-4">
            <a href="">
              <img src={Instagram} alt="instagram link" />
            </a>
          </li>
          <li className="mr-4">
            <a href="">
              <img
                src={Facebook}
                alt="Facebook link"
                className="filter invert"
              />
            </a>
          </li>
          <li className="">
            <a href="">
              <img src={Youtube} alt="youtube link" />
            </a>
          </li>
        </ul>
        <p className="text-xs text-white font-thin ml-5 mb-4">
          © 2021 La Cartuchera Comunitaria. All rights reserved{" "}
          {/* Falta ocultar span en mobile */}
          <span className="hidden lg:inline">
            | Designed & Developed with love by{" "}
            <span className="underline">Mitimiti Estudio</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
