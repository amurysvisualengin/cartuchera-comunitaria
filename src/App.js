import Sidebar from "./components/sidebar/Sidebar";
import CardGrid from "./components/cardgrid/CardGrid";

import CardListContext from "./context/CardListContext";
import "./App.css";
import { useEffect, useState } from "react";
import FilterMobile from "./components/filterMobile/FilterMobile";

function App() {
  const [kitFilter, setKitFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState("");
  const [isMobile, setIsMobile] = useState("");

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="block lg:flex">
      <CardListContext.Provider
        value={{
          kitFilter,
          setKitFilter,
          typeFilter,
          setTypeFilter,
          isSidebarVisible,
          setIsSidebarVisible,
          isMobile,
          setIsMobile,
        }}
      >
        <Sidebar />
        <CardGrid />
        {isMobile && <FilterMobile />}
      </CardListContext.Provider>
    </div>
  );
}

export default App;
