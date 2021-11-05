import React, { useContext } from "react";
import SocialMedia from "../socialMedia/SocialMedia";
import CardListContext from "../../context/CardListContext";
import "./CardContentAudio.css";
const CardContentAudio = (props) => {
  const { cardContent, title, img, color } = props;
  const { isMobile } = useContext(CardListContext);
  return (
    <div className="flex justify-center lg:mt-10 ml-5">
      {!isMobile && (
        <img src={img} alt="play logo" className="mr-16 w-20 h-full mt-20" />
      )}
      <div className="block">
        <h2
          className="bg-black lg:text-lg mt-10 lg:mt-20 rounded item-center w-14 px-1"
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
                {element.question}
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
  );
};
export default CardContentAudio;
