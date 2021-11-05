import React from "react";
import "./SocialMedia.css";

import Linkedin from "../../assets/icons/Linkedin.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import Twitter from "../../assets/icons/Twitter.svg";

const SocialMedia = () => {
  return (
    <div className="social-media mt-10 w-100 items-start">
      <h2 className="text-xl custom-font">¡Ayúdanos a regar la voz!</h2>
      <p className="mt-2 width-text ">
        ¡Ayúdanos a regar la voz! Comparte esta historia en tus redes sociales y
        no olvides etiquetarnos{" "}
        <span className="font-bold custom-color">@la_marana_pr</span> y utilizar
        el hashtag <span className="font-bold">#cartucheracomunitaria.</span>{" "}
      </p>
      <ul className="flex mt-4 social-media">
        <li className="mr-5">
          <a
            href="https://www.linkedin.com/company/la-mara%C3%B1a-pr/about/"
            target="_blanck"
            rel="noopener"
          >
            <img src={Linkedin} alt="Link to Likedin" />
          </a>
        </li>
        <li className="mr-5">
          <a
            href="https://www.facebook.com/lamarana.pr"
            target="_blanck"
            rel="noopener"
          >
            <img src={Facebook} alt="Link to Facebook" />
          </a>
        </li>
        <li className="mr-5">
          <a
            href="https://twitter.com/la_marana_pr?lang=es"
            target="_blanck"
            rel="noopener"
          >
            <img src={Twitter} alt="Link to Twitter" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
