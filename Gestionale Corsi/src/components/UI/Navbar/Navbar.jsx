import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CondizionalButton } from "../Button/CondizionalButton";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";

function profilo() {
  const {user} = useContext(AuthContext);

  if(user.isLogged){
    return(
      <li className="nav-item">
      <NavLink className="nav-link" to="profiloUtente/">
        Profilo Utente
      </NavLink>
    </li>
    )
  }
}

function admin() {
  const {user} = useContext(AuthContext);

  if(user.isAuthorized){
    return(
      <li className="nav-item">
      <NavLink className="nav-link" to="admin/">
        Amministratore
      </NavLink>
    </li>
    )
  }
}

export const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="mx-auto" style={{ marginLeft: '20px' }}>
          <h1 className="navbar-brand m-2">Gestionale Corsi</h1>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="">
              <i className="bi bi-bank" />
                Home <span className="sr-only"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/didattica">
                Didattica
              </NavLink>
            </li>
            {profilo()}
            {admin()}
            
          </ul>
        </div>
        <div className="ml-auto">
          <CondizionalButton />
          <span style={{ marginRight: '10px' }} />
        </div>
      </nav>
    );
};
