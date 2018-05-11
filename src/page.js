import React, { Component } from 'react';
import './App.css';
import getCards from './components/get-cards'
import GuestNavbar from './components/navbar/nav'

class App extends Component {
  render() {
    return (
    <div>
      <GuestNavbar />
      <getCards />
     </div>
    );
  }
}