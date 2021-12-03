import React, { useContext } from "react";
import CloseButton from "../../assets/icons/close.svg";
import CardListContext from "../../context/CardListContext";
import "./CardContentAudio.css";
const CardContentAudio = (props) => {
  const { cardContent, title, img, color, handleShowExpandFalse } = props;
  const { isMobile, isTablet } = useContext(CardListContext);
  const { setIsExpand } = useContext(CardListContext);

  return (
    <div
      className="h-screem overflow-hidden"
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
        className={`flex justify-end  lg:mt-4 lg:mr-10 ${
          !isMobile && "hover-button"
        } `}
        onClick={() => {
          handleShowExpandFalse();
          setIsExpand(false);
        }}
      >
        <button
          className={` ${isTablet < 768 ? "mt-4 mr-4 w-12" : "mt-4 mr-4 "} `}
        >
          <img src={CloseButton} alt="" className=" " />
        </button>
      </div>
      <div className="lg:flex lg:justify-center lg:mt-14 lg:mr-5 pb-20 ">
        {!isMobile && (
          <img src={img} alt="play logo" className="mr-16 w-20 h-full " />
        )}
        <div className="lg:flex lg:justify-center mx-4 lg:mx-0">
          <div className={`block `}>
            <h2
              className="bg-black inter-font text-xs text-center w-16 lg:w-20 p-2 rounded item-center"
              style={{ color: color }}
            >
              VIDEO
            </h2>
            <h1
              className={`custom-font-shadow mt-6 text-left text-4.5xl  lg:text-5.5xl lg:leading-11`}
            >
              Videogalería
            </h1>
            <h2
              className={`text-left mt-6 lg:mt-10 ${
                isMobile ? "inter-font text-xlLg" : "custom-font text-1.9xl"
              } `}
            >
              {cardContent.videoType}
            </h2>
            {cardContent.videoInfoContainer.map((element, index) => (
              <div className="overflow-hidden">
                {!isMobile && (
                  <div className={`text-left items-center mt-10 w-100`}>
                    <div className="border-2 rounded border-black">
                      <h2
                        className="custom-font bg-black lg:text-sm p-4 "
                        style={{ color: color }}
                      >
                        {element.question.toUpperCase()}
                      </h2>
                      <p className={`p-4 text-base`}>{element.answer}</p>
                    </div>
                    <div className="mt-4">
                      <iframe
                        src={element.url}
                        frameborder="0"
                        allowFullScreen
                        title="video"
                        className={`w-100 h-90`}
                      ></iframe>
                    </div>
                  </div>
                )}
                {isMobile && (
                  <div className={`text-left mt-10 `}>
                    <div className="mt-4">
                      <iframe
                        src={element.url}
                        frameborder="0"
                        allowFullScreen
                        title="video"
                        className={`w-full h-48 rounded-md`}
                      ></iframe>
                    </div>
                    <div className="border-2 rounded border-black mt-6">
                      <h2
                        className="custom-font bg-black text-sm leading-5 p-4 "
                        style={{ color: color }}
                      >
                        {element.question.toUpperCase()}
                      </h2>
                      <p className={`p-4 text-xlLg`}>{element.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardContentAudio;
