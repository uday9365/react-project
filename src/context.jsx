/* eslint-disable react/prop-types */
import React, {useContext, useReducer} from "react";
import reducer from "./reducer"

const AppContext = React.createContext();

const initialState = {
  name: "",
  image: "" 
};



const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        greet: "This is me",
        name: "Spider Man",
        image: "../images/miles-hero.png",
        para: `Spider Man age 21, life as Spider-Man is characterized by the transformation of a socially awkward high school student into a beloved superhero. After gaining superhuman powers from a radioactive spider bite, Miles learns the responsibility that comes with his abilities, driven by the tragic loss of his Father Jefferson Davis. Balancing his personal life, education, and crime-fighting duties in New York City becomes a constant challenge for our friendly neighbourhood Spider-Man.`
      }
    })
  }

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        greet: "Hello",
        name: "Miles Morales",
        image: "../images/about.png",
        para: "Friendly neighbourhood Spider-man Miles Morales, New York only spider-man. The biracial teenage son of an African-American father and a Puerto Rican mother, Miles Morales is the second Spider-Man to appear in Ultimate Marvel, an imprint with a separate continuity from the mainstream Marvel Universe called the Ultimate Universe."
      }
    })
  }

  return <AppContext.Provider value={{...state, updateHomePage, updateAboutPage}}>
    { children }
  </AppContext.Provider>
};

//global custom hook

const useGlobalContext = () =>{
  return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};