import React, { useContext } from "react";
import "./CardContentPdf.css";
import CardListContext from "../../context/CardListContext";

const CardContentPdf = (props) => {
  const { cardContent, title, img, color } = props;
  const { isMobile } = useContext(CardListContext);

  return (
    <div className="flex justify-center  mt-8 lg:mt-20 ">
      {!isMobile && <img src={img} alt="" className="mr-16 w-32 h-12" />}
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
          <h2 className="lg:custom-font lg:text-2xl w-72">
            {cardContent.subTitle}
          </h2>
          <p className="custom-font text-xs lg:text-xs mt-6">
            ANTES DE EMPEZAR:
          </p>
        </div>

        {
          <div className="lg:flex lg:w-101">
            {cardContent.beforeStarting.map((element, index) => (
              <div className="block text-left text-xs border-2 rounded border-black mr-3 w-84 lg:w-60 mb-4 lg:mb-0 ">
                <div
                  className="flex lg:flex-grow bg-black custom-font p-2 "
                  style={{ color: color }}
                >
                  <h3
                    className="mr-4 text-black  rounded-full"
                    style={{ background: color }}
                  >
                    {element.step}
                  </h3>
                  <h3 className="items-center">
                    {element.statement.toUpperCase()}
                  </h3>
                </div>
                <p className="m-4 lg:text-base">{element.sentence}</p>
                <div className="flex mb-6 justify-center">
                  {element.pdf && (
                    <a
                      href={element.pdf}
                      className="bg-white p-3 px-8 custom-font rounded"
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

        <div className="lg:flex lg:w-101">
          {cardContent.allReady.map((element, index) => (
            <div className="block text-left border-2 border-black rounded w-84 mr-4 flex-grow mt-4 lg:mt-0">
              <div className="flex bg-black p-2">
                <h3
                  className="custom-font text-xs mr-4 "
                  style={{ color: color }}
                >
                  {element.step}
                </h3>
                <h3 className="custom-font text-xs" style={{ color: color }}>
                  {element.statement.toUpperCase()}
                </h3>
              </div>
              <p className="m-4 text-xs lg:text-base">{element.sentence}</p>
            </div>
          ))}
        </div>

        <div className=" text-left border-2 border-black w-84 lg:w-100.5 mt-4 mb-16 rounded">
          <h3
            className="custom-font text-xs bg-black p-3 "
            style={{ color: color }}
          >
            AL TERMINAR...{cardContent.finishAction}
          </h3>
          <p className="mx-4 mb-2 mt-2 whitespace-pre-wrap text-xs lg:text-base ">
            {cardContent.note1}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardContentPdf;
