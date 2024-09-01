import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
       <Link to={"/"} >TaskPage</Link>
       <Link to={"/contact"}>Contact</Link>
       <Link to={"/currency"}>Currency-Converter</Link>
      </nav>
    </header>
  );
};

export default Header;
