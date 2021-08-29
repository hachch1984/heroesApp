import React, { useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer, IState } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";

export const HeroesApp = () => {

  const init = (): IState => {
    return JSON.parse(localStorage.getItem("user")!) || { logged: false,  name:'' };
  };

  const [user] = useReducer(authReducer, {} as IState, init);

  return (
    <div>
      <AuthContext.Provider value={user}>
        <AppRouter />
      </AuthContext.Provider>
    </div>
  );
};

export const HeroesApp_Url = "/";
