import React, { useContext } from "react";
import "./CardContentPdf.css";
import CardListContext from "../../context/CardListContext";

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
        className=" text-right mr-2 pt-4 lg:pt-0 lg:mt-4 lg:mr-10"
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

      <div className="flex justify-center mt-8 lg:mt-14 ml-3 lg:ml-0 ">
        {!isMobile && (
          <img src={img} alt="" className="mr-16 w-32 h-12 float-left z-30" />
        )}
        <div
          className={`block  ml-4 lg:mr-0 lg:w-104  ${
            isTablet < 767 ? "w-96" : "w-99.5"
          }`}
        >
          <p
            className="bg-black w-24 lg:w-32 rounded px-2 py-1 text-xs lg:text-base "
            style={{ color: color }}
          >
            HERRAMIENTA
          </p>
          <h1
            className={`custom-font-shadow  lg:text-6xl mt-6 text-left lg:leading-11 ${
              isMobile ? (isTablet < 767 ? "text-3xl w-90" : "text-4xl") : ""
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
              className={`lg:flex w-97 lg:w-104 ${
                cardContent.beforeStarting.length > 3 && "lg:flex-wrap"
              }`}
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
                    className={` m-4 ${
                      isMobile
                        ? isTablet < 767
                          ? "text-sm"
                          : "text-base"
                        : "text-base"
                    }`}
                  ></div>
                  <div className="flex pb-10 mt-6 justify-center">
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

                  <h3 className="custom-font text-xs" style={{ color: color }}>
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
  );
};

export default CardContentPdf;
