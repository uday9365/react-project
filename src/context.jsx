/* eslint-disable react/prop-types */
import React, {useContext} from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return ( 
  <AppContext.Provider value={{
    fname: "Miles Morales",
    age: "19",
  }}>
    { children }
  </AppContext.Provider>
  );
};

//global custom hook

const useGlobalContext = () =>{
  return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};