import React from "react";
import "./FooterForm.css";
import CardListContext from "../../context/CardListContext";
import { useContext } from "react";

const FooterForm = () => {
  const { isMobile } = useContext(CardListContext);
  return (
    <div className=" ">
      <form
        action="https://lamarana.us16.list-manage.com/subscribe/post?u=016b489efc60473db149a1b90&amp;id=dac9f71c62"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        novalidate
        className="w-screen lg:w-98 pr-8 lg:pr-0 lg:flex "
      >
        <input
          id="mce-EMAIL"
          name="EMAIL"
          type="text"
          placeholder="Email"
          className="bg-white text-black w-full lg:w-97 h-11 rounded mt-4 mb-3 lg:mb-0 lg:mr-3 pl-5 inter-font"
          required
        />

        <button
          type="submit"
          className={`w-full lg:w-28 lg:mt-4 h-11 rounded items-center text-smTiny leading-7 suscribe-button ${
            !isMobile && "font-bold"
          }`}
          // style={{ backgroundColor: "#37B0FF" }}
        >
          <p className="">Subscríbete</p>
        </button>
      </form>
    </div>
  );
};

export default FooterForm;
