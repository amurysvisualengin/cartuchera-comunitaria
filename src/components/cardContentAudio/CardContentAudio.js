import React from "react";
import SocialMedia from "../socialMedia/SocialMedia";

const cardContentAudio = (props) => {
  const { cardContent, title, img } = props;

  return (
    <div className="m-8 ">
      <div className="flex flex-col justify-center items-center mt-10">
        <div>
          <div className="flex">
            <img src={img} alt="icon type" className="pb-8" />

            <div className="block text-left ml-8">
              <h2 className="font-bold mt-0">Audiovisuales</h2>
              <h1 className=" text-black text-6xl leading-11 custom-font">
                {title}
              </h1>
              <h2 className="mt-8">{cardContent.subTitle}</h2>
            </div>
          </div>
          {/* dangerouslySetInnerHTML={{ __html: "Hello" }} */}
          <div dangerouslySetInnerHTML={{ __html: cardContent.url }}></div>
          <div className="text-left w-102">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};
export default cardContentAudio;
