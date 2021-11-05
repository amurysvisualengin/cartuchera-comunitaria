import React from "react";
import SocialMedia from "../socialMedia/SocialMedia";

const cardContentText = (props) => {
  const { cardContent, title, img } = props;

  return (
    <div className="flex justify-center items-center mt-28 m-8">
      <div className="flex">
        <img src={img} alt="icon type" className="w-96 mr-20" />
        <div className="text-left mt-24 w-104">
          <h2 className="font-bold">Rompehielos</h2>
          <h1 className="text-black text-6xl leading-11 w-96 custom-font">
            {title}
          </h1>
          <h2 className="mb-8">{cardContent.subTitle}</h2>
          <h2>
            <span className="font-bold">Text</span> {cardContent.text}
          </h2>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default cardContentText;
