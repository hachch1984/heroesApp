import React, { useContext, useReducer } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../auth/AuthContext";
import { ActionType, authReducer, IState } from "../../auth/authReducer";

export const LoginScreen = () => {
  const history = useHistory();

const context = useContext(AuthContext)

  function handleLogin() {
    context.
    dispatch({
      type: ActionType.login,
      payload: { name: "henry alberto", logged: true },
    });

    history.replace({ pathname: "/" });
  }

  return (
    <div className="container mt-5 ">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Ingresar
      </button>
    </div>
  );
};

export const LoginScreen_Url = "/loginScreen";
