import React from "react";
import "./HelpForm.css";
const HelpForm = () => {
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="   Enter your email..."
          className="w-full lg:w-72 lg:mr-4 h-14 input-style"
        />
        <button className="w-full lg:w-32 text-center mt-4 mb-12 h-14 button-style custom-font">
          AVÍSAME
        </button>
      </form>
    </div>
  );
};

export default HelpForm;
