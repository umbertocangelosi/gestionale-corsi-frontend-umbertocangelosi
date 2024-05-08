import React, { useState, useContext } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { LoginUtente } from "../../services/RESTService";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export function LoginForm() {
  const { login } = useContext(AuthContext); // Otteniamo la funzione di login dal contesto di autenticazione

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginState, setLoginState] = useState();

  function loginMessage() {
    if (loginState == true) {
      return <Navigate to="/profiloUtente" />; // Reindirizzamento alla pagina del profilo utente dopo il login
    } else if (loginState === false) {
      return (
        <div className="alert alert-danger mt-4">
          <p>Credenziali non valide. Riprova.</p>
        </div>
      );
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = await LoginUtente(formData);

    if (response.ok) {
      alert("Login effettuato con successo!");
      setLoginState(true);
      const data = await response.json();
      const token = data.token;
      Cookies.set("token", token, { expires: 7 });

      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      const isAdmin =decodedToken.ruoli.includes("Admin");
      console.log("1");
      console.log(isAdmin); // Output: true

      // Aggiorna lo stato dell'autenticazione nel contesto
      login(decodedToken);
    } else {
      alert("Credenziali non valide. Riprova.");
      setLoginState(false);
    }
    setFormData({
      email: "",
      password: "",
    });
    
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="m-5">
        <h1 className="display-5">Login Utente</h1>

        <div className="form-group mt-3">
          <label className="lead" htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="lead" htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <br></br>
        {loginMessage()}
        <p>
          Non hai un account?{" "}
          <NavLink to="/registrazione">Registrati qui</NavLink>
        </p>
      </form>
    </>
  );
}
