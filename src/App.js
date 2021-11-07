import Sidebar from "./components/sidebar/Sidebar";
import CardGrid from "./components/cardgrid/CardGrid";

import CardListContext from "./context/CardListContext";
import "./App.css";
import { useEffect, useState } from "react";
import FilterMobile from "./components/filterMobile/FilterMobile";
import Swiper from "./components/swiper/Swiper";

function App() {
  const [kitFilter, setKitFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState("");
  const [isMobile, setIsMobile] = useState("");
  const [isExpand, setIsExpand] = useState(false);
  const [mobileList, setMobileList] = useState("");
  const [changeColorMobile, setChangeColorMobile] = useState("");
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
  useEffect(() => {
    handleResize();
  }, []);

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
          isExpand,
          setIsExpand,
          mobileList,
          setMobileList,
          changeColorMobile,
          setChangeColorMobile,
        }}
      >
        <Sidebar />
        <CardGrid />
      </CardListContext.Provider>
    </div>
  );
}

export default App;
