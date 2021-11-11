import React, { useContext } from "react";
import SocialMedia from "../socialMedia/SocialMedia";
import CardListContext from "../../context/CardListContext";
import "./CardContentAudio.css";
const CardContentAudio = (props) => {
  const { cardContent, title, img, color, handleShowExpandFalse } = props;
  const { isMobile } = useContext(CardListContext);
  return (
    <div>
      {!isMobile && (
        <img
          src={img}
          alt=""
          className="opacity-10 filter invert fixed -z-10 w-107 ml-44 mb-111 transform scale-150"
        />
      )}
      <div
        className="text-right mr-2 mt-2 lg:mt-2 lg:mr-10"
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
      <div
        className="flex justify-center  mt-16 lg:mr-5 mb-20"
        /* draggable="false"
        ondragstart="event.preventDefault(); event.stopPropagation();" */
      >
        {!isMobile && (
          <img src={img} alt="play logo" className="mr-16 w-20 h-full " />
        )}
        <div className="block">
          <h2
            className="bg-black lg:text-lg mt-10 lg:mt-0 rounded item-center w-14 px-1"
            style={{ color: color }}
          >
            VIDEO
          </h2>
          <h1 className="custom-font-shadow mt-4  text-left text-4xl lg:text-6xl">
            Videogalería
          </h1>
          <h2 className="custom-font text-xs lg:text-xl text-left mt-4">
            {cardContent.videoType}
          </h2>
          {cardContent.videoInfoContainer.map((element, index) => (
            <div className="w-84 lg:w-100 text-left items-center mt-10">
              <div className="border-4 rounded border-black">
                <h2
                  className="custom-font bg-black  text-xs lg:text-sm p-2 lg:pl-4 lg:py-2"
                  style={{ color: color }}
                >
                  {element.question.toUpperCase()}
                </h2>
                <p className="m-2 text-sm lg:text-base">{element.answer}</p>
              </div>
              <div className="mt-4">
                <iframe
                  src={element.url}
                  frameborder="0"
                  allowFullScreen
                  title="video"
                  className=" w-84 lg:w-100 h-64 lg:h-90"
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
