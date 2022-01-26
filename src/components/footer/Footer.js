import React from "react";
import FooterImg from "../../assets/imgs/footer-img.png";
import FooterImgMobile from "../../assets/imgs/footer-img-mobile.png";
import FooterForm from "./FooterForm";

import Instagram from "../../assets/icons/instagram.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Facebook from "../../assets/icons/Facebook.svg";

export const Footer = () => {
  return (
    <div className="bg-black pb-20 lg:pb-0">
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
                href="https://www.cartucheracomunitaria.org"
                target="_blank"
                rel="noreferrer"
                className="underline inter-font break-all"
              >
                www.cartucheracomunitaria.com
              </a>
            </div>
            <a href="mailto:lamarana.pr@gmail.com?subject=Mail from our Website">
              <p>lamarana.pr@gmail.com</p>
            </a>
            <p>San Juan, Puerto Rico</p>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 font-bold text-base leading-7">
          <h2 className="inter-font">Subscríbete</h2>

          <div>
            <FooterForm />
            <p
              className="lg:max-w-sm text-xs lg:leading-4 mt-2 lg:mt-4 mr-7 lg:mr-0 font-thin inter-font"
              style={{ color: "#FFFFFF" }}
            >
              Añade tu correo electrónico para recibir las últimas noticias
              sobre la Cartuchera Comunitaria y otros proyectos de La Maraña.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-6 lg:mb-9 px-5 lg:px-20">
        <hr style={{ backgroundColor: " #474646", height: "1px", border: 0 }} />
      </div>

      <div className="lg:flex lg:justify-between lg:items-start lg:mr-20">
        <ul className="flex items-center lg:px-20 mb-6 lg:mb-20 ">
          <li className="mr-4 ml-4 lg:ml-0">
            <div
              className="rounded-full border-2 h-9.5 w-9.5"
              style={{ borderColor: "#474646" }}
            >
              <a
                href="https://www.instagram.com/la_marana_pr/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Instagram}
                  alt="instagram link"
                  className="filter invert w-4 mt-2.4 ml-2"
                />
              </a>
            </div>
          </li>
          <li className="mr-4">
            <a
              href="https://www.facebook.com/lamarana.pr/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="border-2 rounded-full w-9.5 h-9.5"
                style={{ borderColor: "#474646" }}
              >
                <img
                  src={Facebook}
                  alt="Facebook link"
                  className="filter m-2 ml-3 mt-2.5"
                />
              </div>
            </a>
          </li>
          <li className="">
            <a
              href="https://www.youtube.com/channel/UCKUy3fZFuIiynFWqP9zMiZg"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="border-2 rounded-full w-9.5 h-9.5"
                style={{ borderColor: "#474646" }}
              >
                <img
                  src={Youtube}
                  alt="youtube link"
                  className="w-5 mt-2.45 ml-1.5"
                />
              </div>
            </a>
          </li>
        </ul>
        <p className="text-xs text-white font-thin ml-5 mb-4 mt-2">
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
