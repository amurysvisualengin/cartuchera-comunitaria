import React from "react";
import { Link } from "react-router-dom";
import Play from "../../assets/icons/Audiovisuales.svg";
import Presentation from "../../assets/icons/presentacion.svg";
import Dona from "../../assets/icons/dona.svg";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import "./Home.css";

const Home = () => {
  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: "#F8F5ED" }}>
      <div className="">
        <Menu />
        <Header />
      </div>
      <div className="lg:flex lg:justify-center mt-20 lg:mt-0">
        <iframe
          src="https://player.vimeo.com/video/639634522?h=eebafcdd44"
          fullscreen
          frameborder="0"
          className="w-full h-52 lg:w-99 lg:h-90 lg:mt-44"
        ></iframe>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center px-4 lg:px-0 mt-10 lg:mt-20">
        <div>
          <ul className="lg:flex">
            <li className="">
              <a
                href="https://player.vimeo.com/video/639634522?h=eebafcdd44"
                target="_blank"
                rel="noreferrer"
                className="px-2 h-14 custom-font text-sm lg:w-90 flex items-center justify-center rounded-lg mb-4 lg:mr-6 box-hover cursor-pointer"
                style={{ backgroundColor: "#9BC2D4" }}
              >
                <img src={Play} alt="" className="filter invert mr-4" />
                ¡VE EL VÍDEO COMPLETO!
              </a>
            </li>
            <li>
              <Link
                to="/app"
                className="px-2 h-14  lg:w-90 flex items-center justify-center rounded-lg mb-4 lg:mr-6 box-hover custom-font  text-sm "
                style={{ backgroundColor: "#E1AC47" }}
              >
                <img
                  src={Presentation}
                  alt=""
                  className=" mr-4 filter invert"
                />
                ¡ABRE LA CARTUCHERA!
              </Link>
            </li>
            <li
            // className="px-2 h-14  lg:w-90 flex items-center justify-center rounded-lg box-hover"
            >
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=YVA6GKYHXCPGQ"
                target="_blank"
                rel="noreferrer"
                className="px-2 h-14  lg:w-90 flex items-center justify-center rounded-lg box-hover custom-font text-sm"
                style={{ backgroundColor: "#BCBC68" }}
              >
                <img src={Dona} alt="" className=" mr-4 " />
                ¡DONA!
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};
export default Home;
