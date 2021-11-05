import React from "react";
import SocialMedia from "../socialMedia/SocialMedia";
import "./CardContentPdf.css";

const cardContentPdf = (props) => {
  const { cardContent, title, img } = props;
  return (
    <div className="flex justify-center items-center mt-24 m-4 mb-8">
      <div className="flex">
        <img src={img} alt="icon type" className="w-96  " />
        <div className="block text-left ml-14 mt-12">
          <h2 className="font-bold">Herramientas</h2>
          <br />
          <h1 className="text-black text-6xl leading-11 w-96 custom-font">
            {title}
          </h1>
          <h2 className="subtitle-width w-102">{cardContent.subTitle}</h2>
          {/* <h2>{cardContent.pdf}</h2> */}
          <div className="flex">
            {cardContent.pdf.map((e, index) => (
              <a
                key={index}
                href={e.url}
                target="_blank"
                rel="noreferrer"
                className="border-2 border-black px-3 p-2 flex text-white mt-8 rounded-md button-color mr-10"
              >
                <img src={e.pdfIcon} alt="" className="mr-3" />
                {e.name}
              </a>
            ))}
          </div>

          <div className="text-left items-start mt-16 container w-full">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default cardContentPdf;
