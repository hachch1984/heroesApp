import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { DcScreen, DcScreen_Url } from "../components/dc/DcScreen";
import { HeroScreen, HeroScreen_Url } from "../components/heroes/HeroScreen";
import {
  MarvelScreen,
  MarvelScreen_Url,
} from "../components/marvel/MarvelScreen";
import {
  SearchScreen,
  SearchScreen_Url,
} from "../components/search/SearchScreen";
import { NavBar } from "../components/ui/NavBar";

export const DashboardRoutes = () => {
  return (
    <div>
      <NavBar />

      <div className="container mt-3">
        <Switch>
          <Route path={HeroScreen_Url()} component={HeroScreen} exact={true} />

          <Route
            path={MarvelScreen_Url}
            component={MarvelScreen}
            exact={true}
          />
          <Route
            path={SearchScreen_Url}
            component={SearchScreen}
            exact={true}
          />
          <Route path={DcScreen_Url} component={DcScreen} exact={true} />

          <Redirect to={MarvelScreen_Url} />
        </Switch>
      </div>
    </div>
  );
};
