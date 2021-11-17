import React, { useContext } from "react";
import CardListContext from "../../context/CardListContext";

// import "./CardContentPresentation.css";
import Facebook from "../../assets/icons/Facebook.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import Linkedin from "../../assets/icons/Linkedin.svg";

const CardContentPresentation = (props) => {
  const { cardContent, title, img, color, handleShowExpandFalse } = props;
  const { isMobile, setIsExpand, isTablet } = useContext(CardListContext);

  return (
    <div style={{ backgroundColor: isMobile ? color : "" }}>
      <div
        className="text-right mr-2 pt-4 lg:pt-0 lg:mt-4 lg:mr-10"
        onClick={() => {
          handleShowExpandFalse();
          setIsExpand(false);
        }}
      >
        <button
          className="text-2xl bg-black w-10 h-10   rounded-full"
          style={{ color: color }}
        >
          X
        </button>
      </div>
      <div className="flex justify-center lg:mt-8 lg:mr-20 ">
        <div className={`block  ${isTablet < 767 ? "mr-14" : "mr-2"}`}>
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
              isTablet < 767 ? "w-72" : "w-100 "
            }`}
          >
            <h2 className="font-bold lg:text-lg">{cardContent.subTitle}</h2>
            <h2 className=" lg:text-lg mt-4">
              {cardContent.description}
              <span className="font-bold">{cardContent.sentence}</span>
            </h2>
            <div
              className={`border-4 border-black rounded-md mt-6 lg:w-100 mb-10 lg:mb-0 ${
                isTablet < 767 ? "w-72" : "w-100"
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
