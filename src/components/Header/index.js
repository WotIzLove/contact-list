import React from "react";
import { Link } from "react-router-dom";

import './style.sass'


const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper wrapper">
        <Link to="/" className="header__logo">
          Contact Book
        </Link>
      </div>
    </div>
  );
};

export default Header;
