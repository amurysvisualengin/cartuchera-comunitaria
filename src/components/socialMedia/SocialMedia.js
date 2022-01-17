import React from "react";
import "./SocialMedia.css";

import Facebook from "../../assets/icons/Facebook.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Youtube from "../../assets/icons/youtube.svg";

const SocialMedia = () => {
  return (
    <div className="social-media mt-10 w-90 lg:w-96 items-start">
      <h2 className="text-base lg:text-xl custom-font">
        ¡Ayúdanos a regar la voz!
      </h2>
      <p className="mt-1 lg:mt-2 width-text ">
        ¡Ayúdanos a regar la voz! Comparte esta historia en tus redes sociales y
        no olvides etiquetarnos{" "}
        <span className="font-bold custom-color">@la_marana_pr</span> y utilizar
        el hashtag <span className="font-bold">#cartucheracomunitaria.</span>{" "}
      </p>
      <ul className="flex mt-4 social-media">
        <li className="mr-5">
          <a
            href="https://www.youtube.com/channel/UCKUy3fZFuIiynFWqP9zMiZg"
            target="_blank"
            rel="noreferrer"
          >
            <div className="border-2 border-black rounded-full w-9.5 h-9.5">
              <img
                src={Youtube}
                alt="youtube link"
                className="w-5 mt-2.45 ml-1.5 filter invert"
              />
            </div>
          </a>
        </li>
        <li className="mr-2 lg:mr-5">
          <a
            href="https://www.facebook.com/lamarana.pr"
            target="_blanck"
            rel="noopener"
          >
            <div className="rounded-full border-black border-2 h-9.5 w-9.5">
              <img
                src={Facebook}
                alt="Link to Facebook"
                className="filter invert m-2 ml-3 mt-2.45"
              />
            </div>
          </a>
        </li>
        <li className="mr-5">
          <div className="rounded-full border-black border-2 h-9.5 w-9.5">
            <a
              href="https://www.instagram.com/la_marana_pr/"
              target="_blanck"
              rel="noopener"
              className="mr-6"
            >
              <img src={Instagram} alt="Linkedin icon" className="w-4 m-2" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
