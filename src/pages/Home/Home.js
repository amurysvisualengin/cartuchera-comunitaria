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
      <div className="lg:flex lg:justify-center">
        <iframe
          src="https://www.youtube.com/embed/DG2rSpoWA_E"
          allowFullScreen
          frameborder="0"
          className="w-full h-52 lg:w-99 lg:h-90 lg:mt-44"
        ></iframe>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center px-4 lg:px-0 mt-10 lg:mt-20">
        <div>
          <ul className="lg:flex">
            <li
              className="px-2 h-14  lg:w-90 flex items-center justify-center rounded-lg mb-4 box-hover"
              style={{ backgroundColor: "#9BC2D4" }}
            >
              <a
                href=""
                className="flex justify-center items-center custom-font mx-4 text-sm"
              >
                <img src={Play} alt="" className="filter invert mr-4" />
                ¡VE EL VÍDEO COMPLETO!
              </a>
            </li>
            <li
              className="px-2 h-14  lg:w-90 flex items-center justify-center rounded-lg mb-4 box-hover"
              style={{ backgroundColor: "#E1AC47" }}
            >
              <Link
                to="/app"
                className="flex justify-center custom-font  text-sm "
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
              className="px-2 h-14  lg:w-90 flex items-center justify-center rounded-lg box-hover"
              style={{ backgroundColor: "#BCBC68" }}
            >
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=YVA6GKYHXCPGQ"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center custom-font mx-4 text-sm lg:w-84"
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
