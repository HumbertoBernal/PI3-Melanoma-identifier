import React, { useState, useEffect } from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import Spinner from 'react-bootstrap/Spinner';
import { UserContext } from '../context/userContext';
import { checkUser } from '../service/magic';

import Authenticate from './Authenticate';
import Dashboard from './DashBoard';
import PrivateRoute from './PrivateRoute';
import Layout from './Layout';

import Checkout from '../pages/Checkout'
import NotFound from '../pages/NotFound';
import Segmentation from "../pages/Segmentation";
import Clasification from "../pages/Clasification";
import ThemeProvider from "@chakra-ui/core/dist/ThemeProvider";
import {CSSReset} from "@chakra-ui/core";

const App = () => {

  const [user, setUser] = useState({ isLoggedIn: null, email: '' , hasData: null});
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

  const salio = () => {
    setUser(
      {isLoggedIn: null,  email: ''}
    );
  }

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
      <ThemeProvider>
        <CSSReset/>
        <UserContext.Provider value={user}>
          <Router>
          {user.hasData ? <Redirect to={'/segmentacion'}/> : user.isLoggedIn && <Redirect to='/checkout' />}
            <Layout salio={salio} user={user}>
            <Switch>
              <Route exact path="/" component={Authenticate} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/checkout" component={Checkout} />
              <PrivateRoute path="/segmentacion" component={Segmentation} />
              <PrivateRoute path="/clasificacion" component={Clasification} />
              <Route component={NotFound} />
            </Switch>
            </Layout>
          </Router>
        </UserContext.Provider>
        </ThemeProvider>
  );
};
export default App;