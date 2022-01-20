import React from "react";
import CardListContext from "../../context/CardListContext";
import HelpForm from "./HelpForm";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import { InlineShareButtons } from "sharethis-reactjs";

import Family from "../../assets/icons/family-white.svg";
import Paypal from "../../assets/imgs/paypal.png";
import CreditCards from "../../assets/imgs/credit-cards.png";
import Ath from "../../assets/imgs/ath-movil.png";
import Facebook from "../../assets/icons/Facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Youtube from "../../assets/icons/youtube.svg";
import GirlWhite from "../../assets/icons/girl-white.svg";
import shape from "../../assets/icons/gray-shape.svg";
import { useContext } from "react";

const Help = () => {
  const { isMobile } = useContext(CardListContext);

  return (
    <div className="overflow-x-hidden">
      <div>
        <Menu />
        <Header />
      </div>
      <div className="mx-4 mt-8">
        <h1 className="custom-font-shadow text-4.5xl leading-10.5 lg:text-5.5xl lg:leading-11 lg:w-99.4 lg:ml-28 mt-32 lg:mt-48">
          ¿Cómo apoyo este proyecto?
        </h1>
      </div>
      {/*  */}
      <div className="hidden lg:flex">
        <img src={shape} alt="" className="lg:absolute -z-10 right-3 top-96 " />
      </div>
      <div className="mx-4 lg:mx-56">
        <div className="lg:flex lg:justify-between ">
          <div className="lg:mt-32">
            <div className="custom-font text-sm leading-5 p-4 text-center flex justify-center items-center mt-12 mb-4 lg:mb-6 lg:w-72 bg-black text-white h-9 lg:h-12 rounded">
              <h2>COMPRA UNA Y REGALA UNA</h2>
            </div>
            <div className="   lg:max-w-md">
              <p className="text-xlLg leading-7 lg:text-base lg:leading-6 lg:max-w-lg">
                Aspiramos a que la Cartuchera Comunitaria llegue a cada
                rinconcito de nuestro archipiélago y más allá. ¡Ayúdanos a
                lograrlo! Con la compra de una cartuchera para ti, estarás
                auspiciando la producción y envío de otra cartuchera a una
                comunidad puertorriqueña.
              </p>
            </div>
            <div className="flex justify-center lg:hidden mt-12 mb-12">
              <img src={Family} alt="toni y adriana" />
            </div>
            <h2 className="custom-font text-sm leading-5 mb-5 lg:mt-6 lg:w-96">
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
        <div className="lg:flex ">
          <div className="lg:mr-32">
            <div className="custom-font text-sm leading-5 text-center flex justify-center items-center mt-12 mb-4 lg:mb-6 bg-black text-white h-9 rounded lg:w-60 lg:h-12">
              <h2>DONA LA MARAÑA</h2>
            </div>
            <p className="text-xlLg leading-7 lg:text-base lg:leading-6 lg:max-w-lg">
              La Maraña es una organización sin fines de lucro que ha logrado
              sostener sus labores gracias al apoyo económico de decenas de
              entidades y aliados, incluyendo donativos de personas como tú. No
              hay aportación pequeña: ¡dona hoy!
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <div className="lg:flex lg:mt-16">
              <div className="lg:mr-6 lg:mt-8">
                <div className="flex justify-center">
                  <a
                    href="https://www.paypal.com/donate/?hosted_button_id=YVA6GKYHXCPGQ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Paypal} alt="paypal" className="w-64 mb-1" />
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <img src={Ath} alt="ath" className=" w-60 h-24 mt-4 lg:mt-9" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:mt-20 lg:mb-32">
          <img
            src={GirlWhite}
            alt=""
            className="hidden lg:flex lg:mr-20 lg:ml-6"
          />
          <div className="">
            <div className="custom-font text-sm leading-5 text-center flex justify-center items-center mt-12 mb-4 bg-black text-white h-9 rounded lg:w-36 lg:h-12">
              <h2>¡COMPARTE!</h2>
            </div>
            <div className="flex lg:hidden">
              <p className="text-xlLg leading-7">
                ¡Ayúdanos a regar la voz! Comparte esta página en tus redes
                sociales y no olvides etiquetarnos @la_marana_pr y utilizar el
                hashtag #cartucheracomunitaria.
              </p>
            </div>
            <div className="hidden lg:flex lg:max-w-smMd">
              <p className="text-base leading-6">
                ¡Ayúdanos a regar la voz! Comparte esta página en tus redes
                sociales y no olvides etiquetarnos{" "}
                <strong>@la_marana_pr</strong> y utilizar el hashtag{" "}
                <strong>#cartucheracomunitaria.</strong>
              </p>
            </div>
            {!isMobile && (
              <div className="mt-6 -ml-2 ">
                <InlineShareButtons
                  config={{
                    alignment: "center", // alignment of buttons (left, center, right)
                    color: "social", // set the color of buttons (social, white)
                    enabled: true, // show/hide buttons (true, false)
                    font_size: 10, // font size for the buttons
                    // labels: "cta", // button labels (cta, counts, null)
                    language: "en", // which language to use (see LANGUAGES)
                    networks: [
                      // which networks to include (see SHARING NETWORKS)
                      "facebook",
                      "twitter",
                      "pinterest",
                      "email",
                      "telegram",
                      "whatsapp",
                      "linkedin",
                      "messenger",
                    ],
                    padding: 12, // padding within buttons (INTEGER)
                    radius: 4, // the corner radius on each button (INTEGER)

                    size: 35, // the size of each button (INTEGER)
                  }}
                />
              </div>
            )}
            {isMobile && (
              <div className="mt-4 mb-10 ">
                <InlineShareButtons
                  config={{
                    alignment: "center", // alignment of buttons (left, center, right)
                    color: "social", // set the color of buttons (social, white)
                    enabled: true, // show/hide buttons (true, false)
                    font_size: 10, // font size for the buttons
                    // labels: "cta", // button labels (cta, counts, null)
                    language: "en", // which language to use (see LANGUAGES)
                    networks: [
                      // which networks to include (see SHARING NETWORKS)
                      "facebook",
                      "twitter",
                      "pinterest",
                      "email",
                      "sms",
                      "telegram",
                      "whatsapp",
                      "linkedin",
                      "messenger",
                    ],
                    padding: 10, // padding within buttons (INTEGER)
                    radius: 10, // the corner radius on each button (INTEGER)
                    size: 35, // the size of each button (INTEGER)
                  }}
                />
              </div>
            )}

            {/* <div className="mt-4 mb-10 lg:mb-0 lg:mt-6 lg:-ml-5">
              <div className="sharethis-inline-share-buttons"></div>
            </div> */}

            {/* <div className="flex justify-center lg:block mt-4 mb-10">
              <ul className="flex">
                <li className="mr-4">
                  <a
                    href="https://www.instagram.com/la_marana_pr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={Instagram}
                      alt="instagram"
                      className="filter invert"
                    />
                  </a>
                </li>
                <li className="mr-4">
                  <a
                    href="https://www.facebook.com/lamarana.pr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Facebook} alt="facebook" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCKUy3fZFuIiynFWqP9zMiZg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Youtube} alt="" className="filter invert  w-9" />
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Help;
