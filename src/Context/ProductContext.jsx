import React, { createContext, useEffect, useReducer } from "react";
// import Data from "../API/products.json";
import axios from "axios";
import reducer from "../Reducer/ProductReducer";

const AppContext = createContext();
const API = "https://dev-krv9yget2a9na8l.api.raw-labs.com/mock/json-api";

const initialState = {
  isLoading: false,
  isError: false,
  product: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(Data);
  const getProductData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      // console.log(products);
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {}
    dispatch({ type: "SET_ERROR" });
  };

  useEffect(() => {
    getProductData(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export { AppProvider };
