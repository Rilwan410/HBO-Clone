import React, { useContext, useEffect, useState } from "react";
import ls from "local-storage";
export const StateContext = React.createContext();

export function useStateContext() {
  return useContext(StateContext);
}

const thumbnailSizes = ["large-v", "small-v", "small-h", "large-h"];

export default function HBOProvider({ children }) {
  
  const userImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuHpYdTO2AVMG7_D7XsaSc5hM_XrUdot54Q&usqp=CAU";
  const [sideNav, setSideNav] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [user, setUser] = useState("");
  const [accountOpen, setAccountOpen] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [watchlist, setWatchlist] = useState(ls.get("myList"));



  const circleColors = {
    colorOne:
      "bg-[linear-gradient(312deg,rgba(26,39,103)0%,rgba(48,20,94,1)45%,rgba(0,0,0,1)100%)]",
    colorTwo:
      "bg-[linear-gradient(135deg,rgba(195,139,34,1)2%,rgba(15,33,181,1)71%)]",
    colorThree:
      "bg-[linear-gradient(135deg,rgba(167,195,34,1)22%,rgba(15,181,174,1)71%)]",
    colorFour:
      "bg-[linear-gradient(135deg,rgba(40,195,34,1)27%,rgba(104,15,181,1)71%)]",
    colorFive:
      "bg-[linear-gradient(135deg,rgba(55,34,195,1)27%,rgba(181,15,74,1)71%)]",
  };
  
  const [colors, setColors] = useState(circleColors.colorOne)
  
  function watchAdded() {
    if (!accountOpen) {
      setAccountOpen(true);
      
      setTimeout(() => {
        setAccountOpen(false);
      }, 10000);
    }
  }
  
  function addToList(video) {
    let myList;
    
    if (ls("myList") != null) {
      myList = ls.get("myList");
      myList.push(video);
      ls.set("myList", myList);
      setWatchlist(myList);
    } else {
      ls.set("myList", [video]);
    }
    
    // watchAdded();
  }

  function removeFromList(id) {
    let myList = ls("myList");
    myList = myList.filter((items) => {
      return items.id != id;
    });

    ls.set("myList", myList);
    setWatchlist(myList);
  }

  useEffect(() => {
    setLoadingData(false);
  });

  function createUser(e) {
    setUser(e.target.value);
    ls.set("user", user);
    console.log(user);
  }

  
  function pickColor(color) {
    setColors(color)
    return colors;
  }

  function newColor(newColor) {


   setColors(newColor)
  }


  function setBackground(e) {}

  return (
    <StateContext.Provider
      value={{
        user,
        userImage,
        setUser,
        createUser,
        circleColors,
        setBackground,
        sideNav,
        setSideNav,
        searchModal,
        setSearchModal,
        accountOpen,
        setAccountOpen,
        loadingData,
        setLoadingData,
        thumbnailSizes,
        removeFromList,
        addToList,
        watchlist,
        watchAdded,
        pickColor,
        newColor,
        colors, 
        setColors
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
