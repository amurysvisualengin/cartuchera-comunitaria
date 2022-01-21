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
        className="w-screen xl:w-98 pr-8 xl:pr-0 xl:flex "
      >
        <input
          id="mce-EMAIL"
          name="EMAIL"
          type="text"
          placeholder="Enter your email..."
          className="w-full pl-4 xl:w-72 xl:mr-4 h-14 input-style"
          required
        />
        <button
          type="submit"
          className={`w-full text-tiny mt-4 xl:mt-0 leading-5 xl:w-32 text-center mb-12 h-14 button-style custom-font`}
        >
          AVÍSAME
        </button>
      </form>
    </div>
  );
};

export default HelpForm;
