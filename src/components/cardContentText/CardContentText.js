import React, { useContext } from "react";
import SocialMedia from "../socialMedia/SocialMedia";
import CardListContext from "../../context/CardListContext";
const CardContentText = (props) => {
  const { cardContent, title, img, type, color } = props;
  const { isMobile } = useContext(CardListContext);

  return (
    <div className=" block lg:flex justify-center ">
      <img
        src={img}
        alt="rompehielos logo"
        className={`${isMobile ? "hidden" : "mr-16 w-60 ml-72 h-full mt-20"}`}
      />

      <div className="block mt-20 text-left ml-2 lg:ml-0">
        <h2
          className="bg-black lg:text-xl rounded lg:px-1 lg:pb-1 text-center w-24 lg:w-32"
          style={{ color: color }}
        >
          {cardContent.nameType}
        </h2>
        <h1 className="text-4xl lg:text-6xl mt-4 custom-font-shadow">
          {cardContent.nameType}
        </h1>
        <h2 className=" lg:text-2xl mt-3 custom-font">
          {cardContent.kitType}{" "}
        </h2>

        <div className="flex flex-wrap mt-11">
          {cardContent.actionTitle.map((element, index) => (
            <div className="flex border-2 rounded border-black mr-3 w-97 mb-8">
              <div className="block ">
                <div className="flex items-center bg-black p-1 lg:p-3">
                  <img src={element.icon} alt="" className="ml-2 lg:ml-0" />
                  <h2
                    className="font-custom font-bold pl-4"
                    style={{ color: color }}
                  >
                    {element.subTitle}
                  </h2>
                </div>
                <p className=" m-4 lg:m-6 text-xs lg:text-base ">
                  {element.actionSentence}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContentText;
