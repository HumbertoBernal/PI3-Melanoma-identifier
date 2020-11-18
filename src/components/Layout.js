import React from 'react';

import Navbar from './Navbar';

function Layout(props) {
  // const children = props.children;

  return (
    <React.Fragment>
      <Navbar salio={props.salio} isLoggedIn={props.user.isLoggedIn} email={props.user.email}/>
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
