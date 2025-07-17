import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
  const [menu, Setmenu] = useState("shop");
  return (
    <div className="Navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>TOKOMEDITASI</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            Setmenu("shop");
          }}
        >
          <Link
            className={menu === "shop" ? "active" : ""}
            style={{ textDecoration: "none" }}
            to="/"
          >
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            Setmenu("mens");
          }}
        >
          <Link
            className={menu === "mens" ? "active" : ""}
            style={{ textDecoration: "none" }}
            to="mens"
          >
            Men
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            Setmenu("womens");
          }}
        >
          <Link
            className={menu === "womens" ? "active" : ""}
            style={{ textDecoration: "none" }}
            to="womens"
          >
            Woman
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            Setmenu("kids");
          }}
        >
          <Link
            className={menu === "kids" ? "active" : ""}
            style={{ textDecoration: "none" }}
            to="kids"
          >
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
