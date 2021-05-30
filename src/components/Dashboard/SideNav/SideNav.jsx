import React from "react";
import { Link } from "react-router-dom";

const SideNav = ({ active, navType }) => {
  const UserNav = (
    <nav className="nav flex-column">
      <Link
        className={`nav-link text-light border-bottom ${
          active === "User Profile" ? "bg-info" : "bg-dark"
        }`}
        aria-current="page"
        to="/dashboard/user"
      >
        <span className="px-3">
          <i className="fas fa-home"> </i>
        </span>
        User Profile
      </Link>
      <Link
        className={`nav-link text-light border-bottom ${
          active === "My Order" ? "bg-info" : "bg-dark"
        }`}
        aria-current="page"
        to="/dashboard/order"
      >
        <span className="px-3">
          <i className="far fa-plus-square"></i>
        </span>
        My Order
      </Link>
      <Link
        className={`nav-link text-light border-bottom ${
          active === "write-review" ? "bg-info" : "bg-dark"
        }`}
        aria-current="page"
        to="/dashboard/review"
      >
        <span className="px-3">
          <i className="far fa-plus-square"></i>
        </span>
        Write Review
      </Link>
    </nav>
  );

  const AdminNav = (
    <nav className="nav flex-column">
      <Link
        className={`nav-link text-light border-bottom ${
          active === "manageUser" ? "bg-info" : "bg-dark"
        }`}
        aria-current="page"
        to="/dashboard/admin"
      >
        <span className="px-3">
          <i className="fas fa-home"> </i>
        </span>
        Manage User
      </Link>
      <Link
        className={`nav-link text-light border-bottom ${
          active === "manageOrder" ? "bg-info" : "bg-dark"
        }`}
        aria-current="page"
        to="/dashboard/manageOrder"
      >
        <span className="px-3">
          <i className="far fa-plus-square"></i>
        </span>
        Manage Order
      </Link>
    </nav>
  );

  return (
    <div className="">
      <nav className="navbar navbar-dark bg-dark border-bottom">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand " href="/">
            Book Room
          </a>
        </div>
      </nav>
      {navType === "admin" ? AdminNav : UserNav}
    </div>
  );
};

export default SideNav;
