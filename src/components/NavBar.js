import React from "react";
import "../style/NavBar.scss";
import logo from "../img/wondeLogo.png";

export default function NavBar() {
  return (
    <div className='nav-bar'>
      <img src={logo} />
      <div className='nav-tab'>
        <ul>
          <li>React</li>
          <li>Webpack</li>
          <li>Babel</li>
          <li>Scss</li>
        </ul>
      </div>
    </div>
  );
}
