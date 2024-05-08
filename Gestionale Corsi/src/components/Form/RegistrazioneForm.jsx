import { useState } from "react";
import { RegistrazioneUtente } from "../../services/RESTService";
import { NavLink } from "react-router-dom";
import { isValidEmail, isValidName, isValidPassword } from "../../services/validationUtils";

export function RegistrazioneForm() {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
  });

  const [loginState, setloginState] = useState();

  function registrationMessage() {
    if (loginState === true) {
      return (
        <div className="alert alert-success mt-4 d-inline-block">
          <p style={{ display: "inline-block", marginRight: "10px" }}>
            Registrazione avvenuta con successo
          </p>
          <NavLink to="/login">
            <button className="btn btn-sm btn-primary">
              Nuovo Bottone
            </button>{" "}
          </NavLink>
        </div>
      );
    } else if (loginState === false) {
      return (
        <p className="alert alert-danger mt-4">Errore nella registrazione</p>
      );
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!isValidEmail(formData.email) || !isValidPassword(formData.password) || !isValidName(formData.nome) || !isValidName(formData.cognome)){
      setloginState(false);
      setFormData({
        nome: "",
        cognome: "",
        email: "",
        password: "",
        message: "",
      })
      return (
        <p className="alert alert-danger mt-4">Errore di registrazione: campi non validi</p>
      );
    }
    console.log(formData);

    let response = await RegistrazioneUtente(formData);
    console.log(response);

    if (response.ok) {
      setloginState(true);
    } else {
      setloginState(false);
    }

    setFormData({
      nome: "",
      cognome: "",
      email: "",
      password: "",
      message: "",
    });
  };

  return (
    <>
      
      <form onSubmit={handleSubmit} className="m-5">
      <h1 className="display-5">Registrazione Utente</h1>
        
        <div className="form-group mt-3">
          <label className="lead" htmlFor="exampleInputEmail1">Nome</label>
          <input
            type="text"
            className="form-control"
            name="nome"
            placeholder="nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="lead" htmlFor="exampleInputPassword1">Cognome</label>
          <input
            type="text"
            className="form-control"
            name="cognome"
            placeholder="cognome"
            value={formData.cognome}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="lead" htmlFor="exampleInputPassword1">Email</label>
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
        <p className="lead"> La password deve contenere almeno 8 caratteri, una lettera maiuscola, un numero e un simbolo</p>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <br></br>
        {registrationMessage()}
      </form>
    </>
  );
}
