import React, { useContext } from "react";
import "./CardContentPdf.css";
import CardListContext from "../../context/CardListContext";
import CloseButton from "../../assets/icons/close.svg";

const CardContentPdf = (props) => {
  const { cardContent, title, img, color, handleShowExpandFalse } = props;
  const { isMobile, setIsExpand, isTablet } = useContext(CardListContext);

  return (
    <div style={{ backgroundColor: isMobile ? color : "" }}>
      {!isMobile && (
        <img
          src={img}
          alt=""
          className="fixed -z-10 filter invert w-111 transform -rotate-12 opacity-10 scale-120 "
        />
      )}

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

      <div className="flex justify-center mt-8 lg:mt-14 ml-4 lg:ml-0 ">
        {!isMobile && (
          <img src={img} alt="" className="mr-16 w-32 h-12 float-left z-30" />
        )}
        <div className="flex justify-center items-center">
          <div
            className={`block   ${
              isTablet ? (isTablet < 767 ? "w-96 ml-4" : "w-99.5") : "w-104"
            }`}
          >
            <div
              className={`bg-black  rounded lg: ${
                isMobile
                  ? "ml-0 text-base w-26 py-1 text-center items-center"
                  : "w-36 py-1 text-xl"
              }`}
              style={{ color: color }}
            >
              <p>HERRAMIENTA</p>
            </div>
            <h1
              className={`custom-font-shadow  lg:text-6xl mt-6 text-left lg:leading-11 ${
                isMobile ? (isTablet < 767 ? "text-4xl w-90" : "text-4xl") : ""
              }`}
            >
              {title}
            </h1>
            <div className="text-left mt-3">
              <h2
                className={` ${
                  !isMobile
                    ? "custom-font lg:text-2xl w-111 mt-8"
                    : isTablet < 767
                    ? "text-xl w-90"
                    : "custom-font text:base w-100"
                }`}
              >
                {cardContent.subTitle}
              </h2>
              <p className="custom-font text-xs lg:text-xs mt-6 mb-2">
                ANTES DE EMPEZAR:
              </p>
            </div>

            {
              <div
                className={` ${
                  isMobile
                    ? isTablet < 768
                      ? "w-97"
                      : "w-99.5"
                    : "lg:flex  lg:w-104"
                } ${cardContent.beforeStarting.length > 3 && "lg:flex-wrap"}`}
              >
                {cardContent.beforeStarting.map((element, index) => (
                  <div
                    className={`flex-wrap text-left text-xs border-2 rounded border-black mr-4 mb-4 lg:mb-0
                ${isMobile ? (isTablet < 767 ? "w-90" : "w96") : "w-96"}
                ${
                  cardContent.beforeStarting.length > 3
                    ? "lg:w-96.5 lg:mb-4"
                    : "lg:w-96"
                } `}
                  >
                    <div
                      className="flex bg-black custom-font p-4 "
                      style={{ color: color }}
                    >
                      <div
                        className="rounded-full w-4 h-4 text-center mr-4"
                        style={{ background: color }}
                      >
                        <h3 className="text-black  ">{element.step}</h3>
                      </div>
                      <h3 className="items-center">
                        {element.statement.toUpperCase()}
                      </h3>
                    </div>

                    <div
                      dangerouslySetInnerHTML={{ __html: element.sentence }}
                      className={`m-4 ${
                        isMobile
                          ? isTablet < 767
                            ? "text-sm "
                            : "text-base"
                          : "text-base"
                      }`}
                    ></div>
                    <div
                      className={`flex mt-6 justify-center ${
                        element.pdf && "pb-10"
                      }`}
                    >
                      {element.pdf && (
                        <a
                          href={element.pdf}
                          className="bg-white p-3 px-8 custom-font rounded black-shadow"
                        >
                          {element.pdfButton}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            }

            <p className="custom-font text-xs text-left mt-6 mb-1">
              ¡YA ESTOY LISTX!
            </p>

            <div className="lg:flex ">
              {cardContent.allReady.map((element, index) => (
                <div
                  className={`block text-left border-2 border-black rounded   mr-4 flex-grow mt-4 lg:mt-0
              ${isMobile ? (isTablet < 767 ? "w-90" : "w-99.4") : "w-96"}
              `}
                >
                  <div className="flex bg-black p-4">
                    <div
                      className="rounded-full w-4 h-4 mr-4 text-center px-1"
                      style={{ background: color }}
                    >
                      <h3 className="custom-font text-black text-xs">
                        {element.step}
                      </h3>
                    </div>

                    <h3
                      className="custom-font text-xs"
                      style={{ color: color }}
                    >
                      {element.statement.toUpperCase()}
                    </h3>
                  </div>
                  <p
                    className={`m-4   ${
                      isMobile ? (isTablet < 767 ? "text-sm" : "") : "text-base"
                    } `}
                  >
                    {element.sentence}
                  </p>
                </div>
              ))}
            </div>

            <div
              className={`text-left border-2 border-black mt-8 mb-16 rounded  ${
                isMobile ? (isTablet < 767 ? "w-90" : "w-99.4") : "w-103"
              }`}
            >
              <h3
                className="custom-font text-xs bg-black p-3 "
                style={{ color: color }}
              >
                AL TERMINAR...{cardContent.finishAction}
              </h3>
              <div
                dangerouslySetInnerHTML={{ __html: cardContent.note1 }}
                className={`mx-4 mb-4 mt-4 whitespace-pre-wrap   ${
                  isMobile
                    ? isTablet < 767
                      ? "text-sm"
                      : "text-base"
                    : "text-base"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContentPdf;
