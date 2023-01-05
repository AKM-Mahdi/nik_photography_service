import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logos/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerSection bg-base-200">
      <div className="navbar ">
        <div className="flex-1">
          <Link className="logo" to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}> HOME</Link>
            </li>
            <li>
              <Link to={"/about"}>ABOUT ME</Link>
            </li>
            <li>
              <Link to={"/services"}>SERVICES</Link>
            </li>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
