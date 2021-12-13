import React from "react";
import FooterImg from "../../assets/imgs/footer-img.png";
import FooterImgMobile from "../../assets/imgs/footer-img-mobile.png";
import FooterForm from "./FooterForm";

import Instagram from "../../assets/icons/instagram.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Facebook from "../../assets/icons/Facebook.svg";

export const Footer = () => {
  return (
    <div className="bg-black pb-20  ">
      <div>
        <img src={FooterImg} alt="" className="w-full h-full hidden lg:flex" />
        <img
          src={FooterImgMobile}
          alt=""
          className="w-full h-full block lg:hidden"
        />
      </div>

      <div className="w-full lg:flex lg:justify-between  text-white mt-10  mx-4 lg:mx-0 lg:px-20">
        <div className="lg:max-w-xl">
          <h1 className="font-bold text-base leading-7 mb-4 inter-font">
            La Cartuchera Comunitaria
          </h1>
          <p className="mt-4 pr-10 text-base leading-6">
            La Cartuchera Comunitaria™ ha sido posible gracias a las tres
            comunidades aliadas al proyecto Imaginación Post-María, el apoyo de
            nuestros donantes, y la aportación ciudadana.
          </p>

          <div className="mt-4 text-base leading-6">
            <div className="mr-10">
              <a
                href="https://www.youtube.com"
                className="underline inter-font break-all"
              >
                www.cartucheracomunitaria.com
              </a>
            </div>
            <p>lamarana.pr@gmail.com</p>
            <p>San Juan, Puerto Rico</p>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 font-bold text-base leading-7">
          <h2 className="inter-font">Subscríbete</h2>

          <div>
            <FooterForm />
            <a
              href="https://www.youtube.com"
              className="text-xs font-thin "
              style={{ color: "#FFFFFF" }}
            >
              <p className="block lg:hidden">Aceptar terminos y condiciones</p>
              <p
                className="hidden lg:block lg:max-w-sm lg:text-xs lg:leading-4 lg:mt-4"
                style={{ color: "#FFFFFF" }}
              >
                Añade tu correo electrónico para recibir las últimas noticias
                sobre la Cartuchera Comunitaria y otros proyectos de La Maraña.
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-20 lg:mb-9 px-5 lg:px-20">
        <hr style={{ backgroundColor: " #474646", height: "1px", border: 0 }} />
      </div>

      <div className="lg:flex lg:justify-between items-center lg:mr-20">
        <ul className="lg:flex items-center px-20 hidden lg:visible lg:mb-20 ">
          <li className="mr-4">
            <a
              href="https://www.instagram.com/la_marana_pr/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Instagram} alt="instagram link" />
            </a>
          </li>
          <li className="mr-4">
            <a
              href="https://www.facebook.com/lamarana.pr/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Facebook}
                alt="Facebook link"
                className="filter invert"
              />
            </a>
          </li>
          <li className="">
            <a
              href="https://www.youtube.com/channel/UCKUy3fZFuIiynFWqP9zMiZg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Youtube} alt="youtube link" />
            </a>
          </li>
        </ul>
        <p className="text-xs text-white font-thin ml-5 mb-4">
          © 2021 La Cartuchera Comunitaria. All rights reserved{" "}
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
