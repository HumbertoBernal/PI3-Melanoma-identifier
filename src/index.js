/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {CSSReset} from "@chakra-ui/core";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Segmentation from "./Segmentation";
import Clasification from "./Clasification";
import Checkout from "./Checkout";

ReactDOM.render(
  <React.StrictMode>
      <App>
          <Router>
              <div className="App">
                  <Switch>
                      <Route path={"/segmentacion"}>
                          <Segmentation/>
                      </Route>
                      <Route path={"/clasificacion"}>
                          <Clasification/>
                      </Route>
                      <Route path={"/"}>
                          <Checkout />
                      </Route>
                  </Switch>
              </div>
          </Router>
      </App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const container = document.getElementById('root');

ReactDOM.render(<App />, container);