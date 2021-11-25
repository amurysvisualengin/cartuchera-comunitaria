import React from "react";
import { Link } from "react-router-dom";
import Play from "../../assets/icons/Audiovisuales.svg";
import Presentation from "../../assets/icons/presentacion.svg";
import Dona from "../../assets/icons/dona.svg";
import CardListContext from "../../context/CardListContext";
import HeaderRoutes from "../../components/headerRoutes/HeaderRoutes";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#E5E5E5" }} className="overflow-x-scroll ">
      <div className="flex h-20 ">
        <HeaderRoutes />
      </div>
      <div className="lg:flex lg:justify-center">
        <iframe
          src="https://www.youtube.com/embed/DG2rSpoWA_E"
          allowFullScreen
          frameborder="0"
          className="w-full h-52 lg:w-99 lg:h-90 lg:mt-20"
        ></iframe>
      </div>
      <div className="flex justify-center items-center mt-10 lg:mt-20">
        <div>
          <ul className="lg:flex">
            <li
              className="px-2 h-14 mx-4 lg:w-90 flex items-center justify-center rounded-lg mb-4"
              style={{ backgroundColor: "#9BC2D4" }}
            >
              <a href="" className="flex custom-font mx-4 text-base">
                <img src={Play} alt="" className="filter invert mr-4" />
                ¡VE EL VÍDEO COMPLETO!
              </a>
            </li>
            <li
              className="px-2 h-14 mx-4 flex items-center justify-center rounded-lg mb-4"
              style={{ backgroundColor: "#E1AC47" }}
            >
              <Link to="/app" className="flex custom-font mx-4 text-base">
                <img
                  src={Presentation}
                  alt=""
                  className=" mr-4 filter invert"
                />
                ¡ABRE LA CARTUCHERA!
              </Link>
            </li>
            <li
              className="px-2 h-14 mx-4 lg:w-90 flex items-center justify-center rounded-lg"
              style={{ backgroundColor: "#BEBE3B" }}
            >
              <a href="" className="flex custom-font mx-4 text-base">
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
