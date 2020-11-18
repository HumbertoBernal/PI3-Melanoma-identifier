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
    <UserContext.Provider value={user}>
      <Router>
      {user.isLoggedIn && <Redirect to='/checkout' />}
        <Layout salio={salio} user={user}>
        <Switch>
          <Route exact path="/" component={Authenticate} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/checkout" component={Checkout} />
          <Route component={NotFound} />
        </Switch>
        </Layout>
      </Router>
    </UserContext.Provider>
  );
};
export default App;