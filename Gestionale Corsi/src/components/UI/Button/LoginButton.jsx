import React from "react";
import { NavLink } from "react-router-dom";

export const LoginButton = () => {
  return (
    <>
      <NavLink to="/login">
        <button className="btn btn-light">Login</button>
      </NavLink>
      <span style={{ marginRight: '10px' }} />
      <NavLink className="btn btn-dark" to="registrazione/">
        Registrazione
      </NavLink>
    </>
  );
};
