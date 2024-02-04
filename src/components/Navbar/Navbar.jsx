import React, { useEffect, useState } from 'react';
import style from "./Navbar.module.css";
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  let [navPadd, setNavPadd] = useState("py-4");
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setNavPadd("");
      } else {
        setNavPadd("py-4");
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === "" || location.pathname === "/home";

  return (
    <nav className={`${style.mainNav} navbar navbar-expand-lg fixed-top ${navPadd}`}>
      <div className="container">
        <Link to={""} className="navbar-brand text-white text-uppercase fw-bolder fs-2">Start Framework</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <NavLink to={""} className={`nav-link text-white text-uppercase fw-bold rounded-3 ${isHomePage ? "active" : ""}`}>Home</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink to={"about"} className="nav-link text-white text-uppercase fw-bold rounded-3">About</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink to={"portfolio"} className="nav-link text-white text-uppercase fw-bold rounded-3">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"contact"} className="nav-link text-white text-uppercase fw-bold rounded-3">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
