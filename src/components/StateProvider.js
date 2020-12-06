import React, { useContext, useReducer, createContext } from "react";

// Prepares the Data Layer
export const StateContext = createContext();

// Wrap our App and Provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull Information from the Data Layer
export const useStateValue = () => useContext(StateContext);
