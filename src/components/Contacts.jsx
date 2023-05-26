import "./Contacts.css";
import {rubik} from './Header'

import React from "react";

function Contacts() {
  return (
    <section className="contact section-dark">
      <div className="container">
        <div className="container text-center rectangle d-flex justify-content-evenly">
          <div className="row">
            <div className={`col-12 col-md-4 section-title ${rubik.className}`}>!Hablemos</div>
            <div className="col-12 col-md-4 description">
                Contactame para iniciar tu proyecto de desarrollo web 
            
            </div>
            <div className="col-12 col-md-4 ">
                <a href="mailto: ing.amaury06@gmail.com ">
                    <button type="button">
                        Contactos
                        <i className="bi bi-envelope-check"></i>
                    </button>
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
