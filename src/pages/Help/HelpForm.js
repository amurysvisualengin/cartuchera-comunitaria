import React from "react";
import "./HelpForm.css";
const HelpForm = () => {
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Enter your email..."
          className="w-full pl-4 lg:w-72 lg:mr-4 h-14 input-style"
        />
        <button className="w-full text-tiny leading-5 lg:w-32 text-center mt-4 mb-12 h-14 button-style custom-font">
          AVÍSAME
        </button>
      </form>
    </div>
  );
};

export default HelpForm;
