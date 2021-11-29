import React from "react";
import HeaderRoutes from "../../components/headerRoutes/HeaderRoutes";
import SaintJust from "./community/SaintJust";
import VueltaDeDos from "./community/VueltaDeDos";
import Mariana from "./community/Mariana";
import Footer from "../../components/footer/Footer";

const Communities = () => {
  return (
    <div>
      <div>
        <HeaderRoutes />
      </div>
      <div className="px-4">
        <SaintJust />
      </div>
      <div>
        <VueltaDeDos />
      </div>
      <div>
        <Mariana />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Communities;
