import { useState } from "react";

import { NavLink } from "react-router-dom";
import { createCourse } from "../../services/RESTService";

export function CorsoForm() {
    // Definizione dello stato per i dati del form
    const [formData, setFormData] = useState({
        nomeCorso: "",
        descrizioneBreve: "",
        descrizioneCompleta: "",
        durata: "",
        categoria: "",
    });

// Definizione dello stato per la registrazione del corso
const [registrationState, setRegistrationState] = useState();

// Funzione per mostrare il messaggio di registrazione
function registrationMessage() {
    if (registrationState === true) {
        return (
            <div className="alert alert-success mt-4">
                Registrazione corso avvenuta con successo
            </div>
        );
    } else if (registrationState === false) {
        return (
            <div className="alert alert-danger mt-4">
                Errore nella registrazione del corso
            </div>
        );
    }
}

// Funzione per gestire il cambiamento dei valori del form
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

// Funzione per gestire la sottomissione del form
const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
        let response = await createCourse(formData);
        console.log(response);

        if (response.ok) {
            alert("Registrazione corso avvenuta con successo");
            setRegistrationState(true);
        } else {
            alert("Errore nella registrazione del corso");
            setRegistrationState(false);
        }

        setFormData({
            nomeCorso: "",
            descrizioneBreve: "",
            descrizioneCompleta: "",
            durata: "",
            categoria: "",
        });
    } catch (error) {
        console.error("Errore durante la registrazione del corso:", error);
        alert("Si è verificato un errore durante la registrazione del corso");
        setRegistrationState(false);
    }
};

return (
    <>
        {/* Form per la registrazione del corso */}
        <form onSubmit={handleSubmit} className="m-5">
            <h1>Registrazione Corso</h1>

            {/* Campo per il nome del corso */}
            <div className="form-group mt-3">
                <label htmlFor="nomeCorso">Nome Corso</label>
                <input
                    type="text"
                    className="form-control"
                    name="nomeCorso"
                    placeholder="Inserisci il nome del corso"
                    value={formData.nomeCorso}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Campo per la descrizione breve del corso */}
            <div className="form-group">
                <label htmlFor="descrizioneBreve">Descrizione Breve</label>
                <input
                    type="text"
                    className="form-control"
                    name="descrizioneBreve"
                    placeholder="Inserisci una breve descrizione del corso"
                    value={formData.descrizioneBreve}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Campo per la descrizione completa del corso */}
            <div className="form-group">
                <label htmlFor="descrizioneCompleta">Descrizione Completa</label>
                <textarea
                    className="form-control"
                    name="descrizioneCompleta"
                    placeholder="Inserisci una descrizione completa del corso"
                    value={formData.descrizioneCompleta}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Campo per la durata del corso */}
            <div className="form-group">
                <label htmlFor="durata">Durata (in ore)</label>
                <input
                    type="number"
                    className="form-control"
                    name="durata"
                    placeholder="Inserisci la durata del corso in ore"
                    value={formData.durata}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Bottone di submit */}
            <button type="submit" className="btn btn-primary">
                Invia
            </button>

            {/* Messaggio di registrazione */}
            <br />
            {registrationMessage()}
        </form>
    </>
);
}
