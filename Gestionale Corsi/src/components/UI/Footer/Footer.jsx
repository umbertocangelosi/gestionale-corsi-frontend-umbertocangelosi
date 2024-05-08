import React from "react";

export const Footer = () => {
  return (
    <footer className="footer bg-primary text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contatti</h5>
            <p>Indirizzo: Via dei Test, 123 - 00123 Città, Stato</p>
            <p>Email: info@example.com</p>
            <p>Telefono: +123 456 7890</p>
          </div>
          <div className="col-md-2">
            <h5>Link Utili</h5>
            <ul className="list-unstyled text-white">
              <li ><a className="text-white" href="#">Home</a></li>
              <li><a className="text-white" href="#">Servizi</a></li>
              <li><a className="text-white" href="#">Chi siamo</a></li>
              <li><a className="text-white" href="#">Contatti</a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col">
            <p className="text-center">© 2024 Portale Studenti. Tutti i diritti riservati.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
