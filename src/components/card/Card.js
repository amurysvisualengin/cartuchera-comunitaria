import React, { useContext, useState } from "react";
import CardContentAudio from "../cardContentAudio/CardContentAudio";
import CardContentPdf from "../cardContentPdf/CardContentPdf";
import CardContentText from "../cardContentText/CardContentText";
import CardListContext from "../../context/CardListContext";
import "./Card.css";
import "../../App.css";

const Card = (props) => {
  const [showExpand, setShowExpand] = useState(false);
  const { title, img, type, color, cardContent } = props;

  const handleShowExpand = () => {
    setShowExpand(!showExpand);
  };
  const { isMobile } = useContext(CardListContext);

  return (
    <React.Fragment>
      <div
        onClick={handleShowExpand}
        className="p-6 xl m-2 mr-4 text-center card-item cursor-pointer"
        style={{ backgroundColor: color, borderColor: color }}
      >
        <p style={{ maxWidth: "7.5rem" }} className="mb-4 custom-font">
          {title}
        </p>

        <img className="m-auto" src={img} alt="" srcSet="" />
        <p className="text-xs font-bold text-bold mt-4">{type}</p>
        <div
          className={` card-expand ${showExpand ? "card-expanded" : ""}`}
          style={{ backgroundColor: color }}
        >
          {type === "Audiovisual" && (
            <CardContentAudio
              cardContent={cardContent}
              img={img}
              title={title}
            />
          )}
          {type === "Herramientas" && (
            <CardContentPdf cardContent={cardContent} img={img} title={title} />
          )}
          {type === "Rompehielos" && (
            <CardContentText
              cardContent={cardContent}
              img={img}
              title={title}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
