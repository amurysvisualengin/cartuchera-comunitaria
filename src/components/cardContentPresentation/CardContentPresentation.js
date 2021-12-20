import React, { useContext } from "react";
import CardListContext from "../../context/CardListContext";
import CloseButton from "../../assets/icons/close.svg";

import "../cardContentAudio/CardContentAudio.css";
import './CardContentPresentation.css'
// import "./CardContentPresentation.css";
import Facebook from "../../assets/icons/Facebook.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import Linkedin from "../../assets/icons/Linkedin.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Youtube from "../../assets/icons/youtube.svg";

const CardContentPresentation = (props) => {
  const { cardContent, img, color, handleShowExpandFalse } = props;
  const { isMobile, setIsExpand, isTablet } = useContext(CardListContext);

  return (
    <div className="pb-20 card-content-presentation" style={{ backgroundColor: isMobile ? color : "" }}>
      <div
        className="flex justify-end lg:mt-4 lg:mr-10 hover-button"
        onClick={() => {
          handleShowExpandFalse();
          setIsExpand(false);
        }}
      >
        <button
          className={` ${isTablet < 768 ? "mt-4 mr-4 w-12" : "mt-4 mr-4"}`}
        >
          <img src={CloseButton} alt="" />
        </button>
      </div>
      <div className="lg:flex lg:justify-center lg:mt-8 lg:mr-20 ">
        <div className={` ${isTablet < 768 ? "mr-3" : "mr-2"}`}>
          {!isMobile && (
            <div>
              <img src={cardContent.nameSvg} alt="name SVG" className="ml-52" />
              <img src={img} alt="icon type" className="pb-8 w-84 mr-20 " />
            </div>
          )}
        </div>
        <div className="block mx-4 lg:mx-0 ">
          <h2
            className="text-white rounded-md text-sm text-center bg-black w-32 mt-10 mb-6 py-1 px-1 inter-font "
            style={{ color: color }}
          >
            PRESENTACIÓN
          </h2>
          <h1
            className={`text-left custom-font-shadow lg:w-100 text-4.5xl leading-10.5 lg:text-5.5xl lg:leading-11 `}
          >
            {cardContent.presentationName}
          </h1>
          {isMobile && (
            <div
              className={`${
                isTablet > 767 && isMobile < 1024
                  ? "flex justify-center"
                  : "block"
              }`}
            >
              <div className="flex justify-center">
                <div>
                  <img
                    src={cardContent.nameSvg}
                    alt="name SVG"
                    className="mt-10 ml-28"
                  />
                  <img src={img} alt="icon type" className="ml-4 w-40 mr-4 " />
                </div>
              </div>
            </div>
          )}
          <div className={`mt-10 lg:mt-6 text-left w-full lg:w-100`}>
            <h2 className="font-bold text-xlLg lg:text-base lg:mt-10 inter-font">
              {cardContent.subTitle}
            </h2>
            <h2 className="text-xlLg lg:text-base mt-2 lg:mt-6 inter-font">
              {cardContent.description}
              <span className="font-bold">{cardContent.sentence}</span>
            </h2>
            <div
              className={`border-2 border-black rounded-md mt-10 w-full lg:w-100 lg:mb-0 `}
            >
              <h2
                className=" p-4 text-white text-sm text-base tracking-widest border-1 border-black bg-black custom-font"
                style={{ color: color }}
              >
                ¿CONOCES A ALGUIEN QUE SE PAREZCA A {cardContent.name}?
              </h2>
              <p
                className={`mt-4 px-4 text-xlLg lg:text-base w-fulll lg:w-99.5 `}
              >
                ¡Queremos conocerla! Escribe a{" "}
                <b>
                  <a href="mailto:info@cartucheracomunitaria.com">
                    info@cartucheracomunitaria.com
                  </a>
                </b>{" "}
                o accede a nuestras redes para contarnos quién es y cuál es su
                rol en la comunidad. ¡Recuerda taguearnos{" "}
                <b>
                  <a href="https://www.instagram.com/la_marana_pr/">
                    @LaMarana
                  </a>{" "}
                </b>{" "}
                y usar el hashtags{" "}
                <b>
                  <a href="https://www.instagram.com/explore/tags/cartucheracomunitaria/">
                    #cartucheracomunitaria!
                  </a>{" "}
                </b>{" "}
              </p>
              <div className="flex m-4">
                <a
                  href="https://www.youtube.com/channel/UCKUy3fZFuIiynFWqP9zMiZg"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-2"
                >
                  <img
                    src={Youtube}
                    alt="Facebook icon"
                    className="filter invert"
                  />
                </a>
                <a
                  href="https://www.facebook.com/lamarana.pr"
                  target="_blanck"
                  rel="noopener"
                  className="mr-2"
                >
                  <img src={Facebook} alt="Twitter icon" />
                </a>
                <a
                  href="https://www.instagram.com/la_marana_pr/"
                  target="_blanck"
                  rel="noopener"
                  className="mr-2"
                >
                  <img
                    src={Instagram}
                    alt="Linkedin icon"
                    className="filter invert"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContentPresentation;
