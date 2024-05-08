import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import styles from "./Corsi.module.css";
import { getCourses } from "../../services/RESTService";
import { Card } from "../UI/Card/Card";
import { SubscribeButton } from "../UI/Button/SubscribeButton";

export function Corsi({ Titolo }) {
  // Recupera i dati dell'utente dal contesto di autenticazione
  const { user } = useContext(AuthContext);

  // Dichiara le variabili di stato corsi e loading
  const [corsi, setCorsi] = useState([]);
  const [loading, setLoading] = useState(true);

  // Utilizza l'hook useEffect per effettuare una chiamata asincrona ai corsi
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getCourses(); // Chiama la funzione getCourses per ottenere i corsi
        const data = await response.json(); // Parsa i dati di risposta come JSON
        console.log(data); // Stampa i dati sulla console
        setCorsi(data); // Imposta i corsi ottenuti nello stato
        setLoading(false); // Imposta lo stato di caricamento a false
      } catch (error) {
        console.error("Errore durante il recupero dei corsi:", error); // Stampa eventuali errori durante il recupero
        setLoading(false); // Imposta lo stato di caricamento a false
      }
    }

    fetchData(); // Chiama la funzione fetchData quando il componente viene montato
  }, []);

  // Ritorna il componente Corsi, costituito da un titolo, un messaggio di avviso nel caso in cui l'utente non sia loggato e una lista di card dei corsi.
  return (
    <div className="container mt-5 mb-5">
      <h2 className="mb-4">{Titolo}</h2> // Mostra il titolo passato come prop
      {!user.isLogged && (
        <div className="alert alert-warning">
          <p>
            Per visualizzare ed iscriverti ai corsi devi prima effettuare il
            login.
          </p>
        </div>
      )}
      {!user.isLogged && (
        <NavLink to="/login">
          <button className="btn btn-primary">Login</button>
        </NavLink>
      )}
      <div className={`grid-container ${!user.isLogged ? styles.blur : ""}`}>
        {loading ? (
          <p>Caricamento...</p>
        ) : (
          corsi.map((corso, index) => (
            <div key={index} className={`card ${styles.card}`}>
              <div className="card-body">
                <Card
                  title={corso.nomeCorso}
                  content={{
                    descrizioneBreve: corso.descrizioneBreve,
                    descrizioneCompleta: corso.descrizioneCompleta,
                    durata: `${corso.durata} ore`,
                  }}
                  button={<SubscribeButton disabled={!user.isLogged} />}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
