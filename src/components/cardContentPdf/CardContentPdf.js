import React, { useContext } from "react";
import "./CardContentPdf.css";
import CardListContext from "../../context/CardListContext";

const CardContentPdf = (props) => {
  const { cardContent, title, img, color, handleShowExpandFalse } = props;
  const { isMobile } = useContext(CardListContext);

  return (
    <div>
      {!isMobile && (
        <img
          src={img}
          alt=""
          className="fixed -z-10 filter invert w-111 transform -rotate-12 opacity-10 scale-120 "
        />
      )}
      <div
        className="text-right mr-2 mt-4 lg:mt-4 lg:mr-10"
        onClick={() => {
          handleShowExpandFalse();
          console.log("hola");
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
        <div className="block w-96 ml-4 lg:mr-0 lg:w-104 ">
          <p
            className="bg-black w-24 lg:w-32 rounded px-2 py-1 text-xs lg:text-base "
            style={{ color: color }}
          >
            HERRAMIENTA
          </p>
          <h1 className="custom-font-shadow text-3xl lg:text-6xl mt-6 text-left lg:leading-11">
            {title}
          </h1>
          <div className="text-left mt-3">
            <h2
              className={` ${
                !isMobile
                  ? "custom-font lg:text-2xl w-111 mt-8"
                  : "text-base w-90"
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
              className={`lg:flex   lg:w-104 ${
                cardContent.beforeStarting.length > 3 && "lg:flex-wrap"
              }`}
            >
              {cardContent.beforeStarting.map((element, index) => (
                <div
                  className={`flex-wrap text-left text-xs border-2 rounded border-black mr-4 w-84 lg:w-96 mb-4 lg:mb-0 ${
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
                    className="text-base m-4"
                  ></div>
                  <div className="flex mb-3  mt-6 justify-center">
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

          <div className="lg:flex lg:w-104">
            {cardContent.allReady.map((element, index) => (
              <div className="block text-left border-2 border-black rounded w-84 lg:w-96 mr-4 flex-grow mt-4 lg:mt-0">
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
                <p className="m-4 text-xs lg:text-base ">{element.sentence}</p>
              </div>
            ))}
          </div>

          <div className=" text-left border-2 border-black w-84 lg:w-103 mt-4 mb-16 rounded">
            <h3
              className="custom-font text-xs bg-black p-3 "
              style={{ color: color }}
            >
              AL TERMINAR...{cardContent.finishAction}
            </h3>
            <div
              dangerouslySetInnerHTML={{ __html: cardContent.note1 }}
              className="mx-4 mb-4 mt-4 whitespace-pre-wrap text-xs lg:text-base"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContentPdf;
