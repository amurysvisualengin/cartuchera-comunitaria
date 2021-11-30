import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Help from "./pages/Help/Help";
import Communities from "./pages/Communities/Communities";

import CardListContext from "./context/CardListContext";

const Routess = () => {
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
  const [mobileHeight, SetMobileHeight] = useState("");
  const [firstTouch, setFirstTouch] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 1224) {
      setIstablet(window.innerWidth);
      setIsMobile(true);
      SetMobileHeight(window.innerHeight);
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
        mobileHeight,
        SetMobileHeight,
        firstTouch,
        setFirstTouch
      }}
    >
      <BrowserRouter basename="cartuchera-comunitaria">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/app" element={<App />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/como-ayudar" element={<Help />} />
          <Route path="/tres-comunidades" element={<Communities />} />
        </Routes>
      </BrowserRouter>
    </CardListContext.Provider>
  );
};

export default Routess;
