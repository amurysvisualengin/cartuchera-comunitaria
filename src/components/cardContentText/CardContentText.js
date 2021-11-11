import React, { useContext } from "react";
import SocialMedia from "../socialMedia/SocialMedia";
import CardListContext from "../../context/CardListContext";
const CardContentText = (props) => {
  const { cardContent, title, img, type, color, handleShowExpandFalse } = props;
  const { isMobile } = useContext(CardListContext);

  return (
    <div>
      {!isMobile && (
        <img
          src={img}
          alt=""
          className="opacity-10 filter invert fixed -z-10 transform w-100 scale-150 mt-10"
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
      <div className=" block lg:flex justify-center ">
        <img
          src={img}
          alt="rompehielos logo"
          className={`${isMobile ? "hidden" : "mr-16 w-60 ml-72 h-full mt-16"}`}
        />

        <div className="block mt-16 text-left ml-2 lg:ml-0">
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
                  <div
                    dangerouslySetInnerHTML={{ __html: element.actionSentence }}
                    className="m-4 lg:m-6 text-xs lg:text-base"
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
