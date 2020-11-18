import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { logoutUser } from '../service/magic';
import { UserContext } from '../context/userContext';

import './styles/Navbar.css';

const Navbar = (props) => {
  let { email } = useContext(UserContext);
  const history = useHistory();

  const handleLogOut = async () => {
    try {
      await logoutUser();
      props.salio();
      history.replace('/');
    } catch (error) {
      console.error(error);
    }
  };


    return (
      <div className="Navbar">
        <div className="container-fluid d-flex justify-content-between">
          <Link className="Navbar__brand" to="/Checkout">
            <span className="font-weight-light h2">Melanoma</span>
            <span className="font-weight-bold h2">Detector</span>
          </Link>
          {props.isLoggedIn && (
              <div className="Navbar__brand text-align-right">
                 <p className="h5 mx-4" > {email}</p>
                 <button onClick={handleLogOut} > Cerrar sesión</button>
              </div>
          )}
    
        </div>
      </div>
    );
  
}

export default Navbar;
