import React, { useContext } from "react";
import SocialMedia from "../socialMedia/SocialMedia";
import CardListContext from "../../context/CardListContext";
import "./CardContentAudio.css";
const CardContentAudio = (props) => {
  const { cardContent, title, img, color, handleShowExpandFalse } = props;
  const { isMobile, isTablet } = useContext(CardListContext);
  const { setIsExpand } = useContext(CardListContext);

  return (
    <div
      className="h-screem"
      style={{ backgroundColor: isMobile ? color : "transparent" }}
    >
      {!isMobile && (
        <img
          src={img}
          alt=""
          className="opacity-10 filter invert fixed -z-10 w-107 ml-44 mb-111 transform scale-150"
        />
      )}

      <div
        className="text-right mr-2 pt-2 lg:mt-2 lg:mr-10"
        onClick={() => {
          handleShowExpandFalse();
          console.log(handleShowExpandFalse);
          setIsExpand(false);
        }}
      >
        <button
          className="text-2xl bg-black w-10 h-10 mt-2 mr2  rounded-full"
          style={{ color: color }}
        >
          X
        </button>
      </div>
      <div className="flex justify-center lg:mt-16 lg:mr-5 pb-20 ">
        {!isMobile && (
          <img src={img} alt="play logo" className="mr-16 w-20 h-full " />
        )}
        <div
          className={`block ${
            isMobile ? (isTablet < 768 ? "w-full mx-5" : "") : ""
          }`}
        >
          <h2
            className="bg-black lg:text-lg mt-10 lg:mt-0 rounded item-center w-14 px-1"
            style={{ color: color }}
          >
            VIDEO
          </h2>
          <h1
            className={`custom-font-shadow mt-4 text-left  ${
              isTablet > 767 && isTablet < 1024
                ? "text-6xl"
                : "text-4xl lg:text-6xl"
            }`}
          >
            Videogalería
          </h1>
          <h2
            className={`  text-left mt-4 ${
              isMobile
                ? isTablet > 767 && isTablet < 1024
                  ? "text-xl custom-font"
                  : "text-xl w-72 "
                : "text-xl custom-font"
            }`}
          >
            {cardContent.videoType}
          </h2>
          {cardContent.videoInfoContainer.map((element, index) => (
            <div
              className={` text-left items-center mt-10 ${
                isTablet > 767 && isTablet < 1024 ? "w-100" : "w-90 lg:w-100"
              }`}
            >
              <div className="border-4 rounded border-black">
                <h2
                  className="custom-font bg-black  text-xs lg:text-sm p-2 lg:pl-4 lg:py-2"
                  style={{ color: color }}
                >
                  {element.question.toUpperCase()}
                </h2>
                <p
                  className={`m-2 ${isTablet < 768 ? "text-sm" : "text-base"}`}
                >
                  {element.answer}
                </p>
              </div>
              <div className="mt-4">
                <iframe
                  src={element.url}
                  frameborder="0"
                  allowFullScreen
                  title="video"
                  className={` ${
                    isTablet > 767 && isTablet < 1024
                      ? "w-100 h-97"
                      : "w-90 lg:w-100 h-64 lg:h-90"
                  }`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CardContentAudio;
