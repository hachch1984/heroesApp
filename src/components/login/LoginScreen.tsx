import React from "react";
import { useHistory } from "react-router";
 

export const LoginScreen = () => {
  const history = useHistory();
 

  function handleLogin() {
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
