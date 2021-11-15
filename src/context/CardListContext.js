import { createContext } from "react";

const CardListContext = createContext({
  isMobile: "",
  setIsMobile: (mobile) => {},
  isTablet: "",
  setIsTablet: (tablet) => {},
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
  typeMobile: "",
  setTypeMobile: (typeFilter) => {},
  isExpand: "",
  setIsExpand: (expand) => {},
  propTitle: "",
  setPropTitle: (title) => {},
  cardInfo: "",
  setCardInfo: (card) => {},
});

export default CardListContext;
