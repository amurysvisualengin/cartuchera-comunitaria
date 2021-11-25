import React from "react";

const FooterForm = () => {
  return (
    <div className=" ">
      <form action="" className="w-screen lg:w-98 pr-8 lg:pr-0 lg:flex ">
        <input
          type="text"
          placeholder="Email"
          className="bg-white w-full lg:w-97 h-11 rounded mt-4 mb-3 lg:mb-0 lg:mr-3 pl-5"
        />

        <button
          className="w-full lg:w-28 lg:mt-4 h-11 rounded items-center font-bold text-base"
          style={{ backgroundColor: "#37B0FF" }}
        >
          Subscríbete
        </button>
      </form>
    </div>
  );
};

export default FooterForm;
