// Table.jsx
import React from 'react';
import { EliminaCorsoButton } from '../Button/EliminaCorsoButton';

export function Table({ corsi, onUpdateCorsi }) {
  const handleDeleteCourse = async (id) => {
    try {
      const updatedCorsi = corsi.filter((corso) => corso.id !== id);
      onUpdateCorsi(updatedCorsi);
    } catch (error) {
      console.error("Errore durante l'aggiornamento della lista dei corsi:", error);
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nome Corso</th>
          <th>Descrizione Breve</th>
          <th>Descrizione Completa</th>
          <th>Durata</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {corsi.map((corso, index) => (
          <tr key={index}>
            <td>{corso.nomeCorso}</td>
            <td>{corso.descrizioneBreve}</td>
            <td>{corso.descrizioneCompleta}</td>
            <td>{`${corso.durata} ore`}</td>
            <td>
              <EliminaCorsoButton id={corso.id} onDeleteCourse={handleDeleteCourse} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
