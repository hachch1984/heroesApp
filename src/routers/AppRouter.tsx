import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";
import { DcScreen, DcScreen_Url } from "../components/dc/DcScreen";
import { LoginScreen, LoginScreen_Url } from "../components/login/LoginScreen";
import {
  MarvelScreen,
  MarvelScreen_Url,
} from "../components/marvel/MarvelScreen";
import { NavBar } from "../components/ui/NavBar";
import { HeroesApp, HeroesApp_Url } from "../HeroesApp";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route
              exact={true}
              path={LoginScreen_Url}
              component={LoginScreen}
            />
             <Route    path={'/'} component={DashboardRoutes} />

             <Redirect to={LoginScreen_Url} />
            {/*
          
*/}
           
          </Switch>
        </div>
      </Router>
    </div>
  );
};
