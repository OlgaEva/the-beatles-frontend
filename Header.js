import React from 'react';
import './App.css';

class Header extends React.Component {
  render() {
    console.log(this.props.bandName)
      return (
        <div>
          <h1>{this.props.bandName}</h1>
         <marquee><h2>The most influential popular music group of the rock era.</h2></marquee>
        </div>
    );
  }
}

export default Header;