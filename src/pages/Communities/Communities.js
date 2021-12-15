import React from "react";
import HeaderRoutes from "../../components/headerRoutes/HeaderRoutes";
import SaintJust from "./community/SaintJust";
import VueltaDeDos from "./community/VueltaDeDos";
import Mariana from "./community/Mariana";
import Footer from "../../components/footer/Footer";

import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";

const Communities = () => {
  return (
    <div className="overflow-hidden">
      <div>
        <Menu />
        <Header />
      </div>

      <div>
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
