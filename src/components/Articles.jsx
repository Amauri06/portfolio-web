import "./Articles.css";

import React from "react";

function Articles() {
  return (
    <section className="articles d-flex justify-content-start">
      <h2 className="section-title">Articulos</h2>

      <div className="card">
        <div className="card-header">Mas recientes</div>

        <ul className="list-group list-group-flush">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <li className="list-group-item">
              EL decoderador @property en javascript - como usarlo y sus
              ventajas
            </li>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <li className="list-group-item">
             javascript tutorial ciclos while - while ejemplos de sintaxix
            </li>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <li className="list-group-item">
              Chatgpt No reemplazara a los programadores
            </li>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <li className="list-group-item">
              nextjs se ha vuelto en el framework mas utilizado
            </li>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <li className="list-group-item">
              udemi lanza un lenguaje de programacion
            </li>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <li className="list-group-item">
             las ventajas de ser programador
            </li>
          </a>
        </ul>
      </div>

      <a href='https://github.com/' target='_blank' rel='noopener noreferrer'>
      <button type="button" className="btn btn-info">
           Ver mas Arituclos
         <i className="bi bi-arrow-right-circle-fill"></i>
      </button>
      </a>
    </section>
  );
}

export default Articles;
