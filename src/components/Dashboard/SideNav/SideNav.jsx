import React from "react";
import { Link } from "react-router-dom";

const SideNav = ({ active, navType }) => {
  const UserNav = (
    <nav className="nav flex-column">
      <Link
        className={`nav-link text-light border-bottom ${
          active === "Profile" ? "bg-info" : "bg-dark"
        }`}
        aria-current="page"
        to="/dashboard/user"
      >
        <span className="px-3">
          <i className="fas fa-home"> </i>
        </span>
        Profile
      </Link>
      <Link
        className={`nav-link text-light border-bottom ${
          active === "my-order" ? "bg-info" : "bg-dark"
        }`}
        aria-current="page"
        to="/order"
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
        to="/order"
      >
        <span className="px-3">
          <i className="far fa-plus-square"></i>
        </span>
        Write Review
      </Link>
      <Link
        className={`nav-link text-light border-bottom ${
          active === "my-review" ? "bg-info" : "bg-dark"
        }`}
        aria-current="page"
        to="/myReview"
      >
        <span className="px-3">
          <i className="fas fa-th"></i>
        </span>
        My Review
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
          active === "add-package" ? "bg-info" : "bg-dark"
        }`}
        aria-current="page"
        to="/admin/newPackage"
      >
        <span className="px-3">
          <i className="far fa-plus-square"></i>
        </span>
        Add New Package
      </Link>
      <Link
        className={`nav-link text-light border-bottom ${
          active === "new-admin" ? "bg-info" : "bg-dark"
        }`}
        aria-current="page"
        to="/admin/newAdmin"
      >
        <span className="px-3">
          <i className="far fa-plus-square"></i>
        </span>
        Make Admin
      </Link>
      <Link
        className={`nav-link text-light border-bottom ${
          active === "manage-package" ? "bg-info" : "bg-dark"
        }`}
        aria-current="page"
        to="/admin/managePackage"
      >
        <span className="px-3">
          <i className="fas fa-th"></i>
        </span>
        Manage Package
      </Link>
      <Link
        className={`nav-link text-light border-bottom ${
          active === "admin-list" ? "bg-info" : "bg-dark"
        }`}
        aria-current="page"
        to="/admin/adminList"
      >
        <span className="px-3">
          <i className="fas fa-th"></i>
        </span>
        Admin List
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
