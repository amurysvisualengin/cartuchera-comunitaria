import React from "react";
import FooterImg from "../../assets/imgs/footer-img.png";
import FooterForm from "./FooterForm";

export const Footer = () => {
  return (
    <div className="bg-black h-full w-full pb-20 overflow-x-hidden">
      <div>
        <img src={FooterImg} alt="" className="w-full " />
      </div>
      <div className="w-full text-white mt-10 text-xl mx-4">
        <h1 className="font-bold ">La Cartuchera Comunitaria</h1>
        <p className="mt-4 mr-6">
          La Cartuchera Comunitaria™ ha sido posible gracias a las tres
          comunidades aliadas al proyecto Imaginación Post-María, el apoyo de
          nuestros donantes, y la aportación ciudadana.
        </p>
        <div className="mt-4">
          <a href="https://www.youtube.com" className="underline ">
            www.cartucheracomunitaria.com
          </a>
          <p>lamarana.pr@gmail.com</p>
          <p>San Juan, Puerto Rico</p>
        </div>
        <div className="mt-10 font-bold">
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
            <div className="mt-10 mb-20">
              <hr />
            </div>
            <p className="text-xs font-thin">
              © 2021 La Cartuchera Comunitaria. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
