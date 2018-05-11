import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";


const UserNavbar = props => {
  return (
    <div className="header">
      <Link to="/">
        <div className="titleBox">
          <h1 className="titleText">ReLacks</h1>
        </div>
      </Link>
      <div className="routesBox">
        <Link to="/submit">
          <div className="routesHolder">
            <p>SUBMIT</p>
          </div>
        </Link>
        <Link to="/search">
          <div className="routesHolder">
            <p>SEARCH</p>
          </div>
        </Link>
        <Link to="/profile">
          <div className="routesHolder">
            <p>PROFILE</p>
          </div>
        </Link>
        <Link onClick={() => props.auth.logout()} to="#">
          <div className="routesHolder">
            <p>LOGOUT</p>
          </div>
        </Link>        
      </div>
    </div>
  )
}

export default UserNavbar;
