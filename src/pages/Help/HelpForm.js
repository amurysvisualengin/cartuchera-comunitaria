import React from "react";
import "./HelpForm.css";
const HelpForm = () => {
  return (
    <div>
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
          placeholder="Enter your email..."
          className="w-full pl-4 lg:w-72 lg:mr-4 h-14 input-style"
          required
        />
        <button
          type="submit"
          className="w-full text-tiny leading-5 lg:w-32 text-center  mb-12 h-14 button-style custom-font"
        >
          AVÍSAME
        </button>
      </form>
    </div>
  );
};

export default HelpForm;
