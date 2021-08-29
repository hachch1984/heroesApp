import React from "react";
import { NavLink } from "react-router-dom";
import { HeroesApp_Url } from "../../HeroesApp";
import { DcScreen_Url } from "../dc/DcScreen";
import { LoginScreen_Url } from "../login/LoginScreen";
import { MarvelScreen_Url } from "../marvel/MarvelScreen";
import { SearchScreen_Url } from "../search/SearchScreen";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
        <a className="navbar-brand" href={'#'}>
          Heroes App
        </a>

        <div className="  navbar-collapse d-flex justify-content-between " id="navbarNav">
          <div className="navbar-nav  ">
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              to={DcScreen_Url}
            >
              DC
            </NavLink>

            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              to={MarvelScreen_Url}
            >
              MARVEL
            </NavLink>

            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              to={SearchScreen_Url}
            >
              Search
            </NavLink>
          </div>

          <div className="navbar-nav   ">
            <NavLink
              
              className="nav-item nav-link active"
              to={LoginScreen_Url}
            >
              Logout
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
