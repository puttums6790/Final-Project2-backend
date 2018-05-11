import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";

class GuestNavbar extends React.Component {
  login() {
    this.props.auth.login();
  }

  render() {
    return <div className="header">

    <Link to="/"><div className="titleBox">
      <h1 className="titleText">ReLacks</h1>
    </div></Link>
    <div className="routesBox">
      <Link onClick={this.login.bind(this)} to="#"><div className="routesHolder">
        <p>SIGN IN</p>
      </div></Link>
      
      <Link to="/register"><div className="routesHolder">
        <p>Not a member REGISTER</p>
      </div></Link>
    </div>
  </div>;
  }
}

export default GuestNavbar;