import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { NavLink } from 'react-router-dom';
import styles from './ProfiloUtente.module.css'; // Importa il modulo CSS per lo stile

export const ProfiloUtente = () => {
  const { user } = useContext(AuthContext);

  // Estrai le informazioni dell'utente dal contesto
  const { firstName, lastName, email, isAuthorized } = user;

  return (
    <div className={`container mt-5 d-flex flex-column align-items-center ${styles.profileContainer}`}>
      <div className={`alert alert-success d-inline-flex flex-column align-items-center p-3 rounded-3 shadow ${styles.messageSection}`}>
        <div className="me-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
            <path d="M14.854 1.146a.5.5 0 0 1 0 .708l-8.5 8.5a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L6 9.793l8.146-8.147a.5.5 0 0 1 .708 0z"/>
          </svg>
        </div>
        <div className="text-center">
          <p className="mb-0 fs-5 fw-bold">Benvenuto {firstName} {lastName}</p>
          <p className="m-0">Benvenuto! Sei pronto per esplorare il nostro servizio.</p>
        </div>
      </div>
      <div className={`alert alert-success d-inline-flex flex-column align-items-center p-3 rounded-3 shadow ${styles.infoSection}`}>
        <div className="me-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
            <path d="M7.998 0C3.58 0 .012 3.582 0 8c.012 4.418 3.58 8 7.998 8 4.418 0 8-3.582 8-8 0-4.418-3.582-8-8-8zm0 1.333a6.666 6.666 0 1 1 0 13.334A6.666 6.666 0 0 1 7.998 1.333zM8 4.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5zm0 1.084a1.166 1.166 0 1 0 0 2.334 1.166 1.166 0 0 0 0-2.334z"/>
          </svg>
        </div>
        <div className="text-center">
          <p className="mb-0 fs-5 fw-bold">Info Utente</p>
          <ul className={`list-unstyled ${styles.infoList}`}>
            <li><strong>Nome:</strong> {firstName}</li>
            <li><strong>Cognome:</strong> {lastName}</li>
            <li><strong>Email:</strong> {email}</li>
          </ul>
        </div>
      </div>
      <div className={`mt-4 ${styles.buttonSection}`}>
        {/* Bottone per navigare alla pagina dei corsi */}
        <NavLink to="/didattica" className={`btn btn-primary me-2 ${styles.button}`}>
          Iscriviti ai corsi
        </NavLink>
        {/* Bottone per reindirizzare alla pagina di admin (condizionale) */}
        {isAuthorized && (
          <NavLink to="/admin" className={`btn btn-secondary ${styles.button}`}>
            Vai alla pagina di admin
          </NavLink>
        )}
      </div>
    </div>
  );
};
