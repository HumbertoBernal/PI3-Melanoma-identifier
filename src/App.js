import React from 'react';
import './App.css';
import Checkout from "./Checkout";
import Segmentation from "./Segmentation";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {CSSReset, ThemeProvider} from "@chakra-ui/core";

function App({children}) {
  return (
      <ThemeProvider>
      <CSSReset/>
          {children}
      </ThemeProvider>
  );
}

export default App;
