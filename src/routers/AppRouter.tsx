import React from "react";
import {
  BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import { LoginScreen, LoginScreen_Url } from "../components/login/LoginScreen";
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
            <Route path={"/"} component={DashboardRoutes} />

            <Redirect to={LoginScreen_Url} />
            {/*
          
*/}
          </Switch>
        </div>
      </Router>
    </div>
  );
};
