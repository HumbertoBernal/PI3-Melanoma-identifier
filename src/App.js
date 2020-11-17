/*import React from 'react';
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
*/

import React, { useState, useEffect } from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { UserContext } from './context/userContext';
import { checkUser } from './service/magic';
import Authenticate from './components/Authenticate';
import Dashboard from './components/DashBoard';
import PrivateRoute from './components/PrivateRoute';
import Checkout from './Checkout'

const App = () => {

  const [user, setUser] = useState({ isLoggedIn: null, email: '' });
  const [loading, setLoading] = useState();

  useEffect(() => {
    const validateUser = async () => {
      setLoading(true);
      try {
        await checkUser(setUser);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    validateUser();
  }, [user.isLoggedIn]);
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '100vh' }}
      >
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <UserContext.Provider value={user}>
      <Router>
        {user.isLoggedIn && <Redirect to={{ pathname: '/checkout' }} />}
        <Switch>
          <Route exact path="/" component={Authenticate} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/checkout" component={Checkout} />

        </Switch>
      </Router>
    </UserContext.Provider>
  );
};
export default App;