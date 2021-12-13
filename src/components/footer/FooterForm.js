import React from "react";

const FooterForm = () => {
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
        {/*  <input type="email" value="" name="EMAIL"  placeholder="Email"
          className="bg-white text-black w-full lg:w-97 h-11 rounded mt-4 mb-3 lg:mb-0 lg:mr-3 pl-5 inter-font"  /> */}
        <input
          id="mce-EMAIL"
          name="EMAIL"
          type="text"
          placeholder="Email"
          className="bg-white text-black w-full lg:w-97 h-11 rounded mt-4 mb-3 lg:mb-0 lg:mr-3 pl-5 inter-font"
        />

        <button
          type="submit"
          className="w-full lg:w-28 lg:mt-4 h-11 rounded items-center font-bold text-smTiny leading-7"
          style={{ backgroundColor: "#37B0FF" }}
        >
          <p>Subscríbete</p>
        </button>
      </form>
    </div>
  );
};

export default FooterForm;
