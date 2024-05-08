// EliminaCorso.jsx
import { deleteCourse } from "../../../services/RESTService";

export function EliminaCorsoButton({ id, onDeleteCourse }) {

  const handleDeleteCourse = async () => {
    try {
      const responseDelete = await deleteCourse(id);
      if (responseDelete.ok) {
        alert("Corso eliminato con successo");
        onDeleteCourse(id); // Aggiorna la lista dei corsi
      } else {
        console.error("Errore durante l'eliminazione del corso:", id);
      }
    } catch (error) {
      console.error("Errore durante la chiamata di eliminazione del corso:", error);
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleDeleteCourse}>
      Elimina Corso
    </button>
  );
}
