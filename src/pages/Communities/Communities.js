import React from "react";
import HeaderRoutes from "../../components/headerRoutes/HeaderRoutes";
import SaintJust from "./community/SaintJust";
import VueltaDeDos from "./community/VueltaDeDos";

const Communities = () => {
  return (
    <div>
      <div>
        <HeaderRoutes />
      </div>
      <div className="px-4">
        <SaintJust />
        <VueltaDeDos />
      </div>
    </div>
  );
};
export default Communities;
