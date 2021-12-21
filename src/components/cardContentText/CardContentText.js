import React, { useContext } from "react";
import CloseButton from "../../assets/icons/close.svg";
import CardListContext from "../../context/CardListContext";
const CardContentText = (props) => {
  const { cardContent, title, img, type, color, handleShowExpandFalse } = props;
  const { isMobile, setIsExpand, isTablet } = useContext(CardListContext);

  return (
    <div
      className={`lg:h-full pb-10 pl-3 lg:pl-0 ${
        isTablet < 1024 ? "pb-20" : "pb-0"
      }`}
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
          <div>
            <h2
              className="bg-black inter-font font-bold text-xs tracking-special p-2 rounded w-32 lg:mt-14 "
              style={{ color: color }}
            >
              {cardContent.nameType.toUpperCase()}
            </h2>
          </div>
          <h1 className="custom-font-shadow text-4.5xl lg:text-5.5xl mt-4 lg:mt-6 text-left">
            {cardContent.nameType}{" "}
          </h1>
          {!isMobile && (
            <h2 className={"text-left custom-font text-1.9xl mt-6 mb-10"}>
              {cardContent.kitType}
            </h2>
          )}

          {isMobile && (
            <h2 className={"text-left inter-font text-lg mt-4"}>
              {cardContent.kitType}
            </h2>
          )}
          <div className="flex flex-wrap lg:max-w-5xl mt-10 lg:mb-20">
            {cardContent.actionTitle.map((element, index) => (
              <div
                className={`flex border-2 rounded border-black mr-3 w-full lg:w-97 mb-4 lg:mb-8 `}
              >
                <div className="block ">
                  <div className="flex items-center bg-black p-1 py-1.5 lg:p-3">
                    <div
                      className="w-8 h-8 rounded-full flex justify-center  items-center ml-2"
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
                    className={`m-4 lg:m-6 inter-font text-left text-base lg:text-xlLg}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContentText;
