// Admin.jsx
import React, { useEffect, useState } from "react";
import {
  getUsers,
  getCourses,
  deleteUser,
} from "../services/RESTService";
import { Table } from "../components/UI/Table/Table";
import { EliminaUtenteButton } from "../components/UI/Button/EliminaUtenteButton";
import { Card } from "../components/UI/Card/Card";
import styles from "./Admin.module.css";
import { NavLink } from "react-router-dom";

export const Admin = () => {
  const [users, setUsers] = useState([]);
  const [corsi, setCorsi] = useState([]);
  const [isNavScrolled, setIsNavScrolled] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await getUsers();
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getCourses();
        const data = await response.json();
        setCorsi(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }

    fetchData();
  }, []);

  const handleScroll = () => {
    setIsNavScrolled(true);
  };

  const handleMouseLeave = () => {
    setIsNavScrolled(false);
  };

  const handleDeleteUser = async (email) => {
    try {
      const response = await deleteUser(email);
      if (response.ok) {
        alert("Utente eliminato con successo");
        const updatedUsers = users.filter((user) => user.email !== email);
        setUsers(updatedUsers);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };


  return (
    <div className={styles.adminPage}>
      {/* Barra di navigazione */}
      <nav
        className={`${styles.navbar} ${isNavScrolled ? styles.scrolled : ""}`}
        onMouseEnter={handleScroll}
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="display-5 m-2">Controllo Utenti</h1>
        <p className="lead m-2">
          Da qui puoi controllare l'elenco degli utenti
        </p>
        <div className={styles.navbarContent}>
          <ul>
            {users.map((user, index) => (
              <div className={styles.card} key={index}>
                <Card
                  title={user.name}
                  content={user}
                  button={
                    <EliminaUtenteButton
                      onDelete={() => handleDeleteUser(user.email)}
                    />
                  }
                />
              </div>
            ))}
          </ul>
        </div>
      </nav>

      {/* Contenuto principale */}
      <div className={styles.mainContent}>
        <h1>Benvenuto nell'area amministrativa!</h1>
        <Table corsi={corsi} onUpdateCorsi={setCorsi} />{" "}
        {/* Utilizza il componente Tabella */}
      </div>

      {/* Pannello laterale */}
      <aside className={styles.sidebar}>
        <h3>Altre funzionalità</h3>

        <ul>
        <NavLink to="/newCorso">
        <li className="btn btn-primary" >Crea un nuovo Corso</li>
      </NavLink>
        </ul>
      </aside>
    </div>
  );
};
