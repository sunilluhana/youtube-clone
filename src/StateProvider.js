import React, { createContext, useContext, useReducer } from "react";
//prepare the data layer
export const StateContext = createContext();
console.log(StateContext);
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// hook which allows us to pull information from data layer
export const useStateValue = () => useContext(StateContext);
