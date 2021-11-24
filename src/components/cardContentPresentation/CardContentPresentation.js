import React, { useContext } from "react";
import CardListContext from "../../context/CardListContext";
import CloseButton from "../../assets/icons/close.svg";

import "../cardContentAudio/CardContentAudio.css";

// import "./CardContentPresentation.css";
import Facebook from "../../assets/icons/Facebook.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import Linkedin from "../../assets/icons/Linkedin.svg";

const CardContentPresentation = (props) => {
  const { cardContent, img, color, handleShowExpandFalse } = props;
  const { isMobile, setIsExpand, isTablet } = useContext(CardListContext);

  return (
    <div style={{ backgroundColor: isMobile ? color : "" }}>
      <div
        className="flex justify-end  lg:mt-4 lg:mr-10 hover-button"
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
      <div className="flex justify-center lg:mt-8 lg:mr-20 ">
        <div className={`block  ${isTablet < 767 ? "mr-3" : "mr-2"}`}>
          {!isMobile && (
            <div>
              <img src={cardContent.nameSvg} alt="name SVG" className="ml-44" />
              <img src={img} alt="icon type" className="pb-8 w-84 mr-4 " />
            </div>
          )}
        </div>
        <div className="block ">
          <h2
            className="text-white rounded-md text-xs lg:text-sm bg-black w-24 lg:w-28 mt-10 mb-6 py-1 px-1 "
            style={{ color: color }}
          >
            PRESENTACIÓN
          </h2>
          <h1
            className={`text-left custom-font-shadow lg:w-100 lg:text-5xl ${
              isTablet < 767 ? "text-3xl" : "text-4xl "
            }`}
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
              <div>
                <img
                  src={cardContent.nameSvg}
                  alt="name SVG"
                  className="mt-10 ml-28"
                />
                <img src={img} alt="icon type" className="ml-4 w-40 mr-4 " />
              </div>
            </div>
          )}
          <div
            className={`mt-6 text-left lg:w-100 ${
              isTablet < 767 ? "w-90" : "w-100 "
            }`}
          >
            <h2 className="font-bold lg:text-lg">{cardContent.subTitle}</h2>
            <h2 className=" lg:text-lg mt-4">
              {cardContent.description}
              <span className="font-bold">{cardContent.sentence}</span>
            </h2>
            <div
              className={`border-4 border-black rounded-md mt-6 lg:w-100 mb-10 lg:mb-0 ${
                isTablet < 767 ? "w-90" : "w-100"
              }`}
            >
              <h2
                className=" text-white text-sm tracking-widest border-2 border-black bg-black py-2 px-2 custom-font"
                style={{ color: color }}
              >
                ¿CONOCES A ALGUIEN QUE SE PAREZCA A {cardContent.name}?
              </h2>
              <p
                className={`mt-4 ml-4 mr-4 lg:text-lg  lg:w-99.5 ${
                  isTablet < 767 ? "w-48" : "w-99.5"
                }`}
              >
                ¡Queremos conocerla! Escribe a{" "}
                <b>info@cartucheracomunitaria.com</b> o accede a nuestras redes
                para contarnos quién es y cuál es su rol en la comunidad.
                ¡Recuerda taguearnos <b>@LaMarana</b> y usar el hashtags{" "}
                <b>#cartucheracomunitaria!</b>{" "}
              </p>
              <div className="flex m-4">
                <a
                  href="https://www.facebook.com/lamarana.pr"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-2"
                >
                  <img src={Facebook} alt="Facebook icon" />
                </a>
                <a
                  href="https://twitter.com/la_marana_pr?lang=es"
                  target="_blanck"
                  rel="noopener"
                  className="mr-2"
                >
                  <img src={Twitter} alt="Twitter icon" />
                </a>
                <a
                  href="https://www.linkedin.com/company/la-mara%C3%B1a-pr/about/"
                  target="_blanck"
                  rel="noopener"
                  className="mr-2"
                >
                  <img src={Linkedin} alt="Linkedin icon" />
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
