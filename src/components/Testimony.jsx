import React from "react";
import "./Testimony.css";
import { rubik } from "./Header";
import client1 from "../img/cliente1.svg";
import client2 from "../img/cliente2.svg";
import client3 from "../img/cliente3.svg";
import Image from "next/image";
import { Share_Tech_Mono } from "next/font/google";

export const share_tech = Share_Tech_Mono({
  subsets: ["latin"],
  weight: ["400"],
});


function Testimony() {
  return (
    <section className="testimony ligth-section">
      <h2 className={`section-title ${rubik.className}`}>Testimonio</h2>
      <h3 className="section-description text-center">
        Estos son algunos testimonios de mis clientes...
      </h3>
     
       <div id="testimony-carousel" className="carousel dark-carousel slide">
        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <Image
                className="testimony-img rounded-circle "
                src={client1}
                alt="cliente1"
              ></Image>
              <p className={`testimony-text ${share_tech.className}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                molestie fringilla felis, id bibendum purus volutpat eget.
              </p>

              <div className="testimony-info">
                <p className="client">Tete</p>
                <p className="position">Administrador de Sistemas</p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <Image
                className="testimony-img rounded-circle"
                src={client3}
                alt="cliente2"
              ></Image>
              <p className={`testimony-text ${share_tech.className}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                molestie fringilla felis, id bibendum purus volutpat eget.
              </p>

              <div className="testimony-info">
                <p className="client">Jose Manuel</p>
                <p className="position">Gerente de Contabilidad</p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <Image
                className="testimony-img rounded-circle"
                src={client2}
                alt="cliente2"
              ></Image>
              <p className={`testimony-text ${share_tech.className}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                molestie fringilla felis, id bibendum purus volutpat eget.
              </p>

              <div className="testimony-info">
                <p className="client">Yolaidy</p>
                <p className="position">sub-gerente de auditoria </p>
              </div>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev "
          type="button"
          data-bs-target="#testimony-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon " aria-hidden="true"></span>
          <span className="visually-hidden ">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimony-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> 
    </section>
  );
}

export default Testimony;
