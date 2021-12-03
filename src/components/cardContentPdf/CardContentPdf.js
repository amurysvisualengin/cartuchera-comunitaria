import React, { useContext } from "react";
import "./CardContentPdf.css";
import CardListContext from "../../context/CardListContext";
import CloseButton from "../../assets/icons/close.svg";

const CardContentPdf = (props) => {
  const { cardContent, title, img, color, handleShowExpandFalse } = props;
  const { isMobile, setIsExpand, isTablet } = useContext(CardListContext);

  return (
    <div
      style={{ backgroundColor: isMobile ? color : "" }}
      className="relative overflow-hidden"
    >
      {/* background image desktop */}
      {!isMobile && (
        <img
          src={img}
          alt=""
          className="absolute -z-10 filter invert w-111 transform -rotate-12 opacity-10 scale-120 "
        />
      )}

      <div
        className="flex justify-end  lg:mt-4 lg:mr-10 hover-button"
        onClick={() => {
          handleShowExpandFalse();
          setIsExpand(false);
        }}
      >
        {/* close button */}
        <button
          className={` ${isTablet < 768 ? "mt-4 mr-4 w-12" : "mt-4 mr-4"}`}
        >
          <img src={CloseButton} alt="" />
        </button>
      </div>

      <div className="lg:flex lg:justify-center lg:items-start mt-8 lg:mt-20  lg:ml-0 ">
        {!isMobile && <img src={img} alt="" className="mr-20 w-44" />}
        <div className="flex justify-center items-center">
          <div className={`block mx-4 lg:mx-0 w-full lg:w-104`}>
            <div
              className={`bg-black rounded text-xs text-center px-2 py-2 w-28 `}
              style={{ color: color }}
            >
              <p>HERRAMIENTA</p>
            </div>
            <h1
              className={`custom-font-shadow text-4.5xl leading-10.5 lg:text-5.5xl mt-6 text-left lg:leading-11 `}
            >
              {title}
            </h1>
            <div className="text-left mt-3">
              <h2
                className={`${
                  isMobile
                    ? "inter-font text-lg mt-6"
                    : "custom-font text-1.9xl mt-10"
                } `}
                /* className={` ${
                  !isMobile
                    ? "custom-font lg:text-1.9xl w-111 mt-10"
                    : isTablet < 767
                    ? "text-xl w-90"
                    : "custom-font text:base w-100"
                }`} */
              >
                {cardContent.subTitle}
              </h2>
              <p className="custom-font text-xs lg:text-sm mt-6 mb-2">
                ANTES DE EMPEZAR:
              </p>
            </div>

            {
              <div
                className={` ${
                  isMobile
                    ? isTablet < 768
                      ? "w-full"
                      : "w-full"
                    : "lg:flex  lg:w-104"
                } ${cardContent.beforeStarting.length > 3 && "lg:flex-wrap"}`}
              >
                {cardContent.beforeStarting.map((element, index) => (
                  <div
                    className={`flex-wrap text-left text-xs border-2 rounded border-black mr-4 mb-4 lg:mb-0
                ${isMobile ? (isTablet < 767 ? "w-full" : "w-full") : "w-96"}
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
                        className="rounded-full w-5 h-5  mr-4"
                        style={{ background: color }}
                      >
                        <h3 className="text-black text-sm text-center ">
                          {element.step}
                        </h3>
                      </div>
                      <h3 className="items-center text-sm">
                        {element.statement.toUpperCase()}
                      </h3>
                    </div>

                    <div
                      dangerouslySetInnerHTML={{ __html: element.sentence }}
                      className={`p-4 inter-font  text-xlLg lg:text-base`}
                    ></div>
                    <div
                      className={`flex mt-6 px-4  ${element.pdf && "pb-10"}`}
                    >
                      {element.pdf && (
                        <a
                          href={element.pdf}
                          className="bg-white p-3 w-full text-center custom-font rounded black-shadow"
                        >
                          {element.pdfButton}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            }

            <p className="custom-font text-sm text-left mt-6 mb-1">
              ¡YA ESTOY LISTX!
            </p>

            <div className="lg:flex ">
              {cardContent.allReady.map((element, index) => (
                <div
                  className={`block text-left border-2 border-black rounded mr-4 flex-grow mt-4 lg:mt-0
              ${isMobile ? (isTablet < 767 ? "w-full" : "w-full") : "w-96"}
              `}
                >
                  <div className="flex bg-black p-4">
                    <div
                      className="rounded-full w-5 h-5 mr-4 text-center px-1"
                      style={{ background: color }}
                    >
                      <h3 className="custom-font text-black text-sm">
                        {element.step}
                      </h3>
                    </div>

                    <h3
                      className="custom-font text-sm"
                      style={{ color: color }}
                    >
                      {element.statement.toUpperCase()}
                    </h3>
                  </div>
                  <p className={`p-4 inter-font text-xlLg lg:text-base`}>
                    {element.sentence}
                  </p>
                </div>
              ))}
            </div>

            <div
              className={`text-left border-2 border-black mt-8 mb-16 rounded  ${
                isMobile ? (isTablet < 767 ? "w-full" : "w-full") : "w-103"
              }`}
            >
              <h3
                className="custom-font text-sm bg-black p-3 "
                style={{ color: color }}
              >
                AL TERMINAR...{cardContent.finishAction}
              </h3>
              <div
                dangerouslySetInnerHTML={{ __html: cardContent.note1 }}
                className={`p-4 inter-font whitespace-pre-wrap text-xlLg lg:text-base`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContentPdf;
