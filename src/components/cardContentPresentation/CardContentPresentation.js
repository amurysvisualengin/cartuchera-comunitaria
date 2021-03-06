import React, { useContext } from "react";
import CardListContext from "../../context/CardListContext";
import CloseButton from "../../assets/icons/close.svg";

import "../cardContentAudio/CardContentAudio.css";
import "./CardContentPresentation.css";
import Facebook from "../../assets/icons/Facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Youtube from "../../assets/icons/youtube.svg";

const CardContentPresentation = (props) => {
  const { cardContent, img, color, handleShowExpandFalse } = props;
  const { isMobile, setIsExpand, isTablet } = useContext(CardListContext);

  return (
    <div
      className="pb-20 card-content-presentation overflow-x-hidden"
      style={{ backgroundColor: isMobile ? color : "" }}
    >
      <div
        className="flex justify-end xl:mt-4 2xl:mt-8 xl:mr-10 2xl:mr-14 xl:hover-button"
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
      <div className="xl:flex xl:justify-center xl:mt-8 xl:mr-20 ">
        <div className={` ${isTablet < 768 ? "mr-3" : "mr-2"}`}>
          {!isMobile && (
            <div className={`2xl:mt-6`}>
              <img
                src={cardContent.nameSvg}
                alt="name SVG"
                className={`mr-20 ${
                  cardContent.name === "DOÑA LUZ"
                    ? "-mt-10"
                    : cardContent.name === "MARISA"
                    ? "-mt-8"
                    : cardContent.name === "TONY"
                    ? "-mt-5"
                    : cardContent.name === "SUSANA"
                    ? "-mt-5"
                    : cardContent.name === "DÉ"
                    ? "-mt-8"
                    : ""
                }`}
              />
            </div>
          )}
        </div>
        <div className="block mx-4 xl:mx-0 2xl:mt-4 ">
          <h2
            className="text-white rounded text-xs font-bold leading-4 tracking-special text-center bg-black w-32 mt-10 mb-6 p-2 inter-font "
            style={{ color: color }}
          >
            PRESENTACIÓN
          </h2>
          <h1
            className={`text-left custom-font-shadow xl:w-100 text-4.5xl leading-10.5 xl:text-5.5xl xl:leading-11 mb-10 xl:mb-0 `}
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
              <div className="flex justify-center mb-10 xl:mb-0">
                <img
                  src={cardContent.nameSvg}
                  alt="name SVG"
                  className="hidden xl:flex xl:mt-10 ml-28"
                />
                <img
                  src={img}
                  alt="icon type"
                  className={`ml-4  mr-4 ${
                    isTablet > 767 && isTablet < 11814 ? "h-96.5" : "w-40"
                  }`}
                />
              </div>
            </div>
          )}
          <div className={`mt-10 xl:mt-6 text-left w-full xl:w-100`}>
            <h2 className="font-bold text-xlLg xl:text-base xl:mt-10 inter-font">
              {cardContent.subTitle}
            </h2>
            <h2 className="text-xlLg xl:text-base mt-2 xl:mt-6 inter-font">
              {cardContent.description}
              <span className="font-bold">{cardContent.sentence}</span>
            </h2>
            <div
              className={`border-2 border-black rounded-md mt-10 w-full xl:w-100 lg:mb-0 `}
            >
              <h2
                className=" text-white  text-base tracking-shuffle xl:text-sm  border-1 border-black bg-black p-4 custom-font"
                style={{ color: color }}
              >
                ¿CONOCES A ALGUIEN QUE SE PAREZCA A {cardContent.name}?
              </h2>
              <p
                className={`mt-4 px-4 text-xlLg xl:text-base w-fulll xl:w-99.5 `}
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
                  className="mr-6"
                >
                  <div className="border-2 border-black rounded-full w-9.5 h-9.5">
                    <img
                      src={Youtube}
                      alt="youtube link"
                      className="w-5 mt-2.45 ml-1.5 filter invert"
                    />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/lamarana.pr"
                  target="_blanck"
                  rel="noopener"
                  className="mr-6"
                >
                  <div className="rounded-full border-black border-2 h-9 w-9">
                    <img
                      src={Facebook}
                      alt="Twitter icon"
                      className="filter invert m-2 ml-3 mt-2"
                    />
                  </div>
                </a>
                <div className="rounded-full border-black border-2 h-9 w-9">
                  <a
                    href="https://www.instagram.com/la_marana_pr/"
                    target="_blanck"
                    rel="noopener"
                    className="mr-6"
                  >
                    <img
                      src={Instagram}
                      alt="Linkedin icon"
                      className="w-4 m-2"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContentPresentation;
