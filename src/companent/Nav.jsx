import React from "react";
import { Link } from "react-router";
import telegram from "../assets/telegram.svg";
function Nav() {
  return (
    <div className=" container">
      <nav className="  flex justify-between">
        <h1 className=" text-3xl font-bold font-mono">Ozodbek</h1>
        <div className=" flex m-auto gap-32 text-center">
          <Link to="/home" className="">
            <p className="">Main</p>
          </Link>
          <Link to="/contact" className="">
            <p className="">Contakt</p>
          </Link>
          <Link to="/profil" className="">
            <p className="">Profil</p>
          </Link>
        </div>
      <a href="https://t.me/developerOzodbek">
      <img className=" w-12" src={telegram} alt="" />
      </a>
      </nav>
    </div>
  );
}

export default Nav;
