import React from "react";
import { Link } from "react-router";
import telegram from "../assets/telegram.svg";
function Nav() {
  return (
    <div className=" container">
      <nav className="  flex   m-auto justify-between ">
          <Link to="/home" className="">
            <p className="">Main</p>
          </Link>
          <Link to="/profil" className="">
            <p className="">About me</p>
          </Link>
          <Link to="/contact" className="">
            <p className="">Contakt</p>
          </Link>
      </nav>
    </div>
  );
}

export default Nav;
