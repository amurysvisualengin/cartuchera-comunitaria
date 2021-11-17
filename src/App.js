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

function App() {
  const [kitFilter, setKitFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [isSidebarVisible, setIsSidebarVisible] = useState("");
  const [isMobile, setIsMobile] = useState("");
  const [isTablet, setIstablet] = useState("");
  const [isExpand, setIsExpand] = useState("");
  const [mobileList, setMobileList] = useState("");
  const [changeColorMobile, setChangeColorMobile] = useState("");
  const [typeMobile, setTypeMobile] = useState("");
  const [propTitle, setPropTitle] = useState("");
  const [cardInfo, setCardInfo] = useState({});
  const [showMenu, setShowMenu] = useState(false);
  const [showInformation, setShowInformation] = useState(false);

  //choose the screen size for mobile
  const handleResize = () => {
    if (window.innerWidth < 1224) {
      setIstablet(window.innerWidth);
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
    // handleTablet();
  }, []);

  return (
    <div className="block xl:flex">
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
          isTablet,
          setIstablet,
          isExpand,
          setIsExpand,
          mobileList,
          setMobileList,
          changeColorMobile,
          setChangeColorMobile,
          typeMobile,
          setTypeMobile,
          propTitle,
          setPropTitle,
          cardInfo,
          setCardInfo,
          showMenu,
          setShowMenu,
          showInformation,
          setShowInformation,
        }}
      >
        <Menu />
        {!isMobile && <Header />}

        <Sidebar />
        <CardGrid />
      </CardListContext.Provider>
    </div>
  );
}

export default App;
