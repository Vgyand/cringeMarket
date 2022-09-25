import React from "react";
import "../css/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-area">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="user-menu">
              <ul>
                <li>
                  <Link to="">
                    <i className="fa fa-user"></i> My Account
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa fa-heart"></i> Wishlist
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa fa-user"></i> My Cart
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa fa-user"></i> Checkout
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa fa-user"></i> Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
