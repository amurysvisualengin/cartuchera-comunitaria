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
      <div className="xl:flex xl:justify-center mt-20 md:mt-0 xl:mt-0">
        <iframe
          title="Animated video"
          src="https://player.vimeo.com/video/639634522?h=eebafcdd44"
          fullscreen
          frameBorder="0"
          className="w-full h-52 md:w-full md:h-99 md:px-4 md:mt-0 lg:w-full lg:h-99 lg:mt-20 xl:w-99 xl:h-90 xl:mt-44"
        ></iframe>
      </div>
      <div className="xl:flex xl:justify-center xl:items-center px-4 xl:px-0 mt-10 xl:mt-20">
        <div>
          <ul className="xl:flex">
            <li className="">
              <a
                href="https://player.vimeo.com/video/639634522?h=eebafcdd44"
                target="_blank"
                rel="noreferrer"
                className="px-2 h-14 custom-font text-sm xl:w-90 flex items-center justify-center rounded-lg mb-4 xl:mr-6 box-hover cursor-pointer"
                style={{ backgroundColor: "#9BC2D4" }}
              >
                <img src={Play} alt="" className="filter invert mr-4" />
                ¡VE EL VÍDEO COMPLETO!
              </a>
            </li>
            <li>
              <Link
                to="/juegodecartas"
                className="px-2 h-14  xl:w-90 flex items-center justify-center rounded-lg mb-4 xl:mr-6 box-hover custom-font  text-sm "
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
            <li>
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=YVA6GKYHXCPGQ"
                target="_blank"
                rel="noreferrer"
                className="px-2 h-14  xl:w-90 flex items-center justify-center rounded-lg box-hover custom-font text-sm"
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
