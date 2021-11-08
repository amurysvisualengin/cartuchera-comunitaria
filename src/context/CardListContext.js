import { createContext } from "react";

const CardListContext = createContext({
  isMobile: "",
  setIsMobile: (mobile) => {},
  kitFilter: "",
  setKitFilter: (kit) => {},
  typeFilter: "",
  setTypeFilter: (type) => {},
  isSidebarVisible: "",
  setIsSidenarVisible: (visible) => {},
  buttonCardMobile: "",
  setButtonCardMobile: (buttoncard) => {},
  changeColorMobile: "",
  setChangeColorMobile: (changeColor) => {},
});

export default CardListContext;
