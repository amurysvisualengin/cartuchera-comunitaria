import React from "react";
import HeaderRoutes from "../../components/headerRoutes/HeaderRoutes";
import HelpForm from "./HelpForm";
import Footer from "../../components/footer/Footer";

import Family from "../../assets/icons/family-white.svg";
import Paypal from "../../assets/imgs/paypal.png";
import CreditCards from "../../assets/imgs/credit-cards.png";
import Ath from "../../assets/imgs/ath-movil.png";
import SocialNetworks from "../../assets/imgs/social-networks.png";
import GirlWhite from "../../assets/icons/girl-white.svg";
import shape from "../../assets/icons/gray-shape.svg";

const Help = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <HeaderRoutes />
      </div>
      <div className="mx-4 mt-8">
        <h1 className="custom-font-shadow text-4xl lg:text-6xl lg:w-99.4 lg:ml-28 lg:mt-24">
          ¿Cómo apoyo este proyecto?
        </h1>
      </div>
      {/*  */}
      <div>
        <img src={shape} alt="" className="lg:absolute right-3 " />
      </div>
      <div className="mx-4 lg:mx-56 ">
        <div className="lg:flex ">
          <div className="lg:mt-32">
            <div className="custom-font text-center flex justify-center items-center mt-12 mb-4 lg:mb-6 lg:w-80 bg-black text-white h-9 lg:h-12 rounded">
              <h2>COMPRA UNA Y REGALA UNA</h2>
            </div>
            <p className="text-xl lg:max-w-lg">
              Aspiramos a que la Cartuchera Comunitaria llegue a cada rinconcito
              de nuestro archipiélago y más allá. ¡Ayúdanos a lograrlo! Con la
              compra de una cartuchera para ti, estarás auspiciando la
              producción y envío de otra cartuchera a una comunidad
              puertorriqueña.
            </p>
            <div className="flex justify-center lg:hidden mt-12 mb-12">
              <img src={Family} alt="toni y adriana" />
            </div>
            <h2 className="custom-font mb-5 lg:mt-6 lg:w-96">
              PRÓXIMAMENTE DISPONIBLES, APÚNTATE Y NOSOTROS TE AVISAMOS
            </h2>
            <div>
              <HelpForm />
            </div>
          </div>
          <div className="hidden lg:flex lg:w-84 lg: ml-20 ">
            <img src={Family} alt="toni y adriana" />
          </div>
        </div>
        {/*  */}
        <div className="lg:flex">
          <div className="lg:mr-20">
            <div className="custom-font text-center flex justify-center items-center mt-12 mb-4 bg-black text-white h-9 rounded lg:w-60 lg:h-12">
              <h2>DONA LA MARAÑA</h2>
            </div>
            <p className="text-xl lg:max-w-lg">
              La Maraña es una organización sin fines de lucro que ha logrado
              sostener sus labores gracias al apoyo económico de decenas de
              entidades y aliados, incluyendo donativos de personas como tú. No
              hay aportación pequeña: ¡dona hoy!
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <div className="lg:flex lg:mt-16">
              <div className="lg:mr-5 lg:mt-8">
                <div className="flex justify-center">
                  <img src={Paypal} alt="paypal" className="w-52 mb-1" />
                </div>
                <div className="flex justify-center">
                  <img
                    src={CreditCards}
                    alt="credit cards"
                    className="w-32 mb-1"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <img src={Ath} alt="ath" className=" w-36 h-16 mt-4 lg:mt-9" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:mt-16 lg:mb-32">
          <img src={GirlWhite} alt="" className="hidden lg:flex lg:mr-20" />
          <div className="max-w-lg">
            <div className="custom-font text-center flex justify-center items-center mt-12 mb-4 bg-black text-white h-9 rounded lg:w-36 lg:h-12">
              <h2>¡COMPARTE!</h2>
            </div>
            <p className="text-xl">
              ¡Ayúdanos a regar la voz! Comparte esta página en tus redes
              sociales y no olvides etiquetarnos @la_marana_pr y utilizar el
              hashtag #cartucheracomunitaria.
            </p>
            <div className="flex justify-center lg:block mt-4 mb-10">
              <img src={SocialNetworks} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Help;
