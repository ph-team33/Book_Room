import { faBars, faCartPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../../../Firebase/FirebaseAuthentication";
import "./Header.css";
const Header = () => {
  const loggedInUserInfo = useSelector((state) => state.auths);
  const carts = useSelector((state) => state.carts.carts);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  let navbarClasses = ["header-section"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <header className={navbarClasses.join(" ")}>
      <div className="navbar">
        <div className="navbar-container">
          <div className="brand">
            <Link to="/">BookRoom</Link>
          </div>
          <nav className="nav">
            <ul className={click ? "nav-menu" : "nav-menu active"}>
              <li>
                <Link to="/category">Category</Link>
              </li>
              <li>
                <Link to="/books">Books</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {loggedInUserInfo.isLoggedIn ? (
                <>
                  {loggedInUserInfo.isAdmin ? (
                    <li>
                      <Link to="/dashboard/admin">Dashboard</Link>
                    </li>
                  ) : (
                    <li>
                      <Link to="/dashboard/user">Dashboard</Link>
                    </li>
                  )}
                  <li>
                    <img
                      style={{ height: "50px" }}
                      className="rounded-circle"
                      src={loggedInUserInfo.userInfo.image}
                      alt=""
                    />
                  </li>
                  <li>{loggedInUserInfo.userInfo.role}</li>
                  <li>
                    <button
                      onClick={() => signOut()}
                      className="btn btn-danger"
                    >
                      Sign out
                    </button>
                  </li>
                  {loggedInUserInfo.isAdmin ? null : (
                    <li>
                      <Link to="/cart">
                        {" "}
                        <FontAwesomeIcon icon={faCartPlus} />{" "}
                        <strong> {carts.length} </strong>
                      </Link>
                    </li>
                  )}
                </>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </nav>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
