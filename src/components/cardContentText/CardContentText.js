import React, { useContext } from "react";
import CloseButton from "../../assets/icons/close.svg";
import CardListContext from "../../context/CardListContext";
const CardContentText = (props) => {
  const { cardContent, title, img, type, color, handleShowExpandFalse } = props;
  const { isMobile, setIsExpand, isTablet } = useContext(CardListContext);

  return (
    <div
      className={`lg:h-full pb-10 pl-3 lg:pl-0 ${isTablet < 1024 ? "pb-20" : "pb-0"}`}
      style={{ backgroundColor: isMobile ? color : "transparent" }}
    >
      {!isMobile && (
        <img
          src={img}
          alt=""
          className="opacity-10 filter invert fixed -z-10 transform w-100 scale-150 mt-10"
        />
      )}
      <div
        className="text-right lg:mt-4 lg:mr-10"
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
      <div className="flex justify-center items-start">
        <img
          src={img}
          alt="rompehielos logo"
          className={`${isMobile ? "hidden" : "mr-20 w-28 h-full mt-16"}`}
        />
        <div>
          <div className="bg-black inter-font lg:text-xs text-center p-2 rounded w-32 lg:w-28 lg:mt-14 ">
            <h2 style={{ color: color }}>
              {cardContent.nameType.toUpperCase()}
            </h2>
          </div>
          <h1 className="custom-font-shadow text-4.5xl lg:text-5.5xl mt-4 lg:mt-6 text-left">
            {cardContent.nameType}{" "}
          </h1>
          {!isMobile && (
            <h2 className={"text-left custom-font text-1.9xl mt-6"}>
              {cardContent.kitType}
            </h2>
          )}

          {isMobile && (
            <h2 className={"text-left inter-font text-1.9xl mt-4"}>
              {cardContent.kitType}
            </h2>

          )}
          <div className = "flex flex-wrap lg:max-w-5xl mt-10">
            
          {cardContent.actionTitle.map((element, index) => (
              <div
                className={`flex border-2 rounded border-black mr-3 w-full lg:w-97 mb-4 lg:mb-8 `}
              >
                <div className="block ">
                  <div className="flex items-center bg-black p-1 lg:p-3">
                    <div
                      className="w-8 h-8 rounded-full flex justify-center items-center ml-2"
                      style={{ background: color }}
                    >
                      <img
                        src={element.icon}
                        alt=""
                        className=" lg:ml-0 w-5 h-5 items-center "
                      />
                    </div>
                    <h2
                      className="custom-font text-base lg:text-sm pl-4"
                      style={{ color: color }}
                    >
                      {element.subTitle}
                    </h2>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: element.actionSentence }}
                    className={`m-4 lg:m-6 inter-font text-xlLg lg:text-base}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="block lg:flex lg:justify-center ">
        <img
          src={img}
          alt="rompehielos logo"
          className={`${isMobile ? "hidden" : "mr-16 w-60 h-full mt-16"}`}
        />

        <div className={`block mt-16 text-left ml-3 lg:ml-0`}>
          <div
            className={`bg-black lg:text-xl rounded lg:px-1 lg:pb-1 text-center lg:w-36
            ${
              isMobile
                ? isTablet > 767 && isTablet < 1024
                  ? "ml-11 text-2xl w-40 h-10 text-center items-center"
                  : "ml-0 text-base py-1 w-26  text-center items-center"
                : ""
            }
            `}
            style={{ color: color }}
          >
            <h2>{cardContent.nameType.toUpperCase()}</h2>
          </div>
          <h1
            className={`lg:text-6xl mt-4 custom-font-shadow ${
              isTablet < 767 ? "text-4xl" : "text-5xl"
            }
            ${isMobile && isTablet > 767 && isTablet < 1024 ? "ml-11" : "ml-0"}
            `}
          >
            {cardContent.nameType}
          </h1>
          <h2
            className={`lg:text-2xl mt-3  
             ${isMobile && isTablet < 767 ? "text-xl" : "custom-font"}

            ${
              isMobile && isTablet > 767 && isTablet < 1024 ? "ml-11" : "ml-0"
            }`}
          >
            {cardContent.kitType}{" "}
          </h2>

          <div
            className={`flex flex-wrap mt-11 ${
              isMobile
                ? isTablet > 767 && isTablet < 1024
                  ? "justify-center"
                  : ""
                : ""
            }`}
          >
            {cardContent.actionTitle.map((element, index) => (
              <div
                className={`flex border-2 rounded border-black mr-3 w-97 mb-8 ${
                  isTablet > 767 && isTablet < 1024 ? "w-99.5" : ""
                }`}
              >
                <div className="block ">
                  <div className="flex items-center bg-black p-1 lg:p-3">
                    <div
                      className="w-8 h-8 rounded-full flex justify-center items-center ml-2"
                      style={{ background: color }}
                    >
                      <img
                        src={element.icon}
                        alt=""
                        className=" lg:ml-0 w-5 h-5 items-center "
                      />
                    </div>
                    <h2
                      className="custom-font text-smTiny lg:text-sm font-bold pl-4"
                      style={{ color: color }}
                    >
                      {element.subTitle}
                    </h2>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: element.actionSentence }}
                    className={`m-4 lg:m-6 inter-font text-xlLg lg:text-base}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CardContentText;
