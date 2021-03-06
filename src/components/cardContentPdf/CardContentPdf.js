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
        className="flex justify-end  xl:mt-4 xl:mr-10 xl:hover-button"
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

      <div className="xl:flex xl:justify-center xl:items-start mt-2 xl:mt-20  xl:ml-0 ">
        {!isMobile && <img src={img} alt="" className="mr-20 w-44" />}
        <div className="flex justify-center items-center">
          <div className={`block mx-4 xl:mx-0 w-full xl:w-104`}>
            <div>
              <p
                className={`bg-black rounded text-xs font-bold tracking-special text-center px-2 py-2 w-32 `}
                style={{ color: color }}
              >
                HERRAMIENTA
              </p>
            </div>
            <h1
              className={`custom-font-shadow text-4.5xl leading-10.5 xl:text-5.5xl mt-6 text-left xl:leading-11 `}
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
              >
                {cardContent.subTitle}
              </h2>
              <p className="custom-font text-xs xl:text-sm mt-10 xl:mt-6 mb-2">
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
                    : "xl:flex  xl:w-104"
                } ${cardContent.beforeStarting.length > 3 && "xl:flex-wrap"}`}
              >
                {cardContent.beforeStarting.map((element, index) => (
                  <div
                    key={index}
                    className={`flex-wrap text-left text-xs border-2 rounded border-black mr-4 mb-4 xl:mb-0
                ${isMobile ? (isTablet < 767 ? "w-full" : "w-full") : "w-96"}
                ${
                  cardContent.beforeStarting.length > 3
                    ? "xl:w-96.5 xl:mb-4"
                    : "xl:w-96"
                } `}
                  >
                    <div
                      className="flex bg-black custom-font p-4 "
                      style={{ color: color }}
                    >
                      <div className="w-10">
                        <div
                          className="circle  mr-4"
                          style={{ background: color }}
                        >
                          <h3 className="text-black text-sm text-center ">
                            {element.step}
                          </h3>
                        </div>
                      </div>
                      <h3 className="items-center text-sm">
                        {element.statement.toUpperCase()}
                      </h3>
                    </div>

                    <div
                      dangerouslySetInnerHTML={{ __html: element.sentence }}
                      className={`p-4 inter-font  text-xlLg xl:text-base`}
                    ></div>
                    <div className={`flex mt-6 px-4  ${element.pdf && "pb-4"}`}>
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
              ??YA ESTOY LISTX!
            </p>

            <div className="xl:flex ">
              {cardContent.allReady.map((element, index) => (
                <div
                  key={index}
                  className={`block text-left border-2 border-black rounded mr-4 flex-grow mt-4 xl:mt-0
              ${isMobile ? (isTablet < 767 ? "w-full" : "w-full") : "w-96"}
              `}
                >
                  <div className="flex bg-black p-4">
                    <div className="w-10">
                      <div
                        className="circle  mr-4"
                        style={{ background: color }}
                      >
                        <h3 className="text-black text-sm text-center custom-font">
                          {element.step}
                        </h3>
                      </div>
                    </div>

                    <h3
                      className="custom-font text-sm"
                      style={{ color: color }}
                    >
                      {element.statement.toUpperCase()}
                    </h3>
                  </div>
                  <p className={`p-4 inter-font text-xlLg xl:text-base`}>
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
                className={`p-4 inter-font whitespace-pre-wrap text-xlLg xl:text-base`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContentPdf;
