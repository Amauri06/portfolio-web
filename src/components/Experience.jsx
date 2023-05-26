import React from "react";
import './Experience.css'



function Experience() {

  return (
   
    <section className="experience section-ligth">
      
      <div className="container text-center">

        <div className="row">
          <div className="column col-12 col-md-4">
            <i className="bi bi-laptop"></i>
            <p className="experience-title"> Desarrollo Web </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              molestie fringilla felis, id bibendum purus volutpat eget. 
            </p>
            <div className="badges-container">
              <span className="badge text-bg-primary">HTML</span>
              <span className="badge text-bg-primary">CSS</span>
              <span className="badge text-bg-primary">javaScript</span>
              <span className="badge text-bg-primary">React</span>
            </div>
          </div>

          <div className="column col-12 col-md-4">
            <i className="bi bi-laptop"></i>
            <p className="experience-title"> Articulos </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              molestie fringilla felis, id bibendum purus volutpat eget. 
            </p>
            <div className="badges-container">
              <span className="badge text-bg-primary">Escribir</span>
              <span className="badge text-bg-primary">Editar</span>
              <span className="badge text-bg-primary">Blogs</span>
            </div>
          </div>

          <div className="column col-12 col-md-4">
            <i className="bi bi-laptop"></i>
            <p className="experience-title"> Estudios</p>
            <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              molestie fringilla felis, id bibendum purus volutpat eget. 
            </p>
            <div className="badges-container">   
              <span className="badge text-bg-primary">Tailwind</span>
              <span className="badge text-bg-primary">Nextjs</span>
              <span className="badge text-bg-primary">Bostrap</span>
            </div>
          </div>
        </div>
      </div>
      
    </section>

  
  );
}

export default Experience;
