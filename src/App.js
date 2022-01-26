import Sidebar from "./components/sidebar/Sidebar";
import CardGrid from "./components/cardgrid/CardGrid";

import CardListContext from "./context/CardListContext";
import "./App.css";
import { useEffect, useState } from "react";
import FilterMobile from "./components/filterMobile/FilterMobile";
import Swiper from "./components/swiper/Swiper";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import InfoMobile from "./components/infoMobile/InfoMobile";
import { useContext } from "react";

function App() {
  //choose the screen size for mobile
  const { isExpand } = useContext(CardListContext);
  return (
    <div className="block xl:flex background-html">
      <Menu />
      <Header />
      <Sidebar />
      <CardGrid />
    </div>
  );
}

export default App;
