import React from "react";
import CartucheraLogo from "../../assets/icons/cartuchera-logo.svg";
import Hamburguer from "../../assets/icons/hamburguer.svg";

import "./HeaderRoutes.css";

const HeaderRoutes = () => {
  return (
    <div className=" w-full h-24 flex justify-between items-center px-4 lg:px-14 bottom-shadow">
      <img src={CartucheraLogo} alt="logo" className="w-24 h-12 ml-2 lg:ml-0" />
      <div>
        <button>
          <img src={Hamburguer} alt="hamburguer button" className="max-w-md" />
        </button>
      </div>
    </div>
  );
};

export default HeaderRoutes;
