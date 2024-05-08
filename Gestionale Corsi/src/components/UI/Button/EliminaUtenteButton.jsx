import React from 'react';

export function EliminaUtenteButton( { onDelete}){
    const handleClick = () => {
        onDelete(); // Chiamata alla funzione onDelete passata come prop
      };


  return (
    <button className="btn btn-danger" onClick={handleClick}>
      Elimina Utente
    </button>
  );
}
