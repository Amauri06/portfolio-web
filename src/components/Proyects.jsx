import React from 'react'
import './Proyects.css'
import {rubik} from './Header'
import Image from "next/image";
import proyect1 from '../img/proyecto1.png'
import proyect2 from '../img/proyecto2.png'
import proyect3 from '../img/proyecto3.png'
import proyect4 from '../img/proyecto4.png'
import proyect5 from '../img/proyecto5.png'
import proyect6 from '../img/proyecto6.png'

function Proyects() {
   
  return (
    <section className='proyects-recent section-ligth  flex-column text-center '>
      <h2 className={`section-title ${rubik.className}`}>Mis proyectos Recientes</h2>  
      <h3 className='section-description'>Estos son algunos proyectos que he creado recientemente... </h3>  

      <div className='container text-center proyect-container'>

        <div className="row">
          
          <div className="col-12 col-md-6 col-lg-4 ">
             <div className="proyect">
                  <Image  src={proyect1} alt=" Proyecto 1"/>
                  <div className='overlay'>
                      <p>Proyecto 1</p>
                      <div className="icons-container ">
                         <a href='https://github.com/' target="_blank" rel='noopener noreferrer'>
                          <i className="bi bi-github"></i>
                         </a>
                         <a href='https://app-lista-gastos-fe0ab.web.app/iniciar-sesion' target="_blank" rel='noopener noreferrer'>
                            <i className="bi bi-laptop"></i>
                         </a>
                      </div>
                  </div>
             </div>
          </div>    
          <div className="col-12 col-md-6 col-lg-4 ">
             <div className="proyect">
                  <Image  src={proyect2} alt=" Proyecto 1"/>
                  <div className='overlay'>
                      <p>Proyecto 2</p>
                      <div className="icons-container">
                         <a href='https://github.com/' target="_blank" rel='noopener noreferrer'>
                          <i className="bi bi-github"></i>
                         </a>
                         <a href='https://app-lista-gastos-fe0ab.web.app/iniciar-sesion' target="_blank" rel='noopener noreferrer'>
                            <i className="bi bi-laptop"></i>
                         </a>
                      </div>
                  </div>
             </div>
          </div>    
          <div className="col-12 col-md-6 col-lg-4 ">
             <div className="proyect">
                  <Image  src={proyect3} alt=" Proyecto 1"/>
                  <div className='overlay'>
                      <p>Proyecto 3</p>
                      <div className="icons-container">
                         <a href='https://github.com/' target="_blank" rel='noopener noreferrer'>
                          <i className="bi bi-github"></i>
                         </a>
                         <a href='https://app-lista-gastos-fe0ab.web.app/iniciar-sesion' target="_blank" rel='noopener noreferrer'>
                            <i className="bi bi-laptop"></i>
                         </a>
                      </div>
                  </div>
             </div>
          </div>    
          <div className="col-12 col-md-6 col-lg-4 ">
             <div className="proyect">
                  <Image  src={proyect4} alt=" Proyecto 1"/>
                  <div className='overlay'>
                      <p>Proyecto 4</p>
                      <div className="icons-container">
                         <a href='https://github.com/' target="_blank" rel='noopener noreferrer'>
                          <i className="bi bi-github"></i>
                         </a>
                         <a href='https://app-lista-gastos-fe0ab.web.app/iniciar-sesion' target="_blank" rel='noopener noreferrer'>
                            <i className="bi bi-laptop"></i>
                         </a>
                      </div>
                  </div>
             </div>
          </div>    
          <div className="col-12 col-md-6 col-lg-4 ">
             <div className="proyect">
                  <Image  src={proyect5} alt=" Proyecto 1"/>
                  <div className='overlay'>
                      <p>Proyecto 5</p>
                      <div className="icons-container">
                         <a href='https://github.com/' target="_blank" rel='noopener noreferrer'>
                          <i className="bi bi-github"></i>
                         </a>
                         <a href='https://app-lista-gastos-fe0ab.web.app/iniciar-sesion' target="_blank" rel='noopener noreferrer'>
                            <i className="bi bi-laptop"></i>
                         </a>
                      </div>
                  </div>
             </div>
          </div>    
          <div className="col-12 col-md-6 col-lg-4 ">
             <div className="proyect">
                  <Image  src={proyect6} alt=" Proyecto 1"/>
                  <div className='overlay'>
                      <p>Proyecto 6</p>
                      <div className="icons-container">
                         <a href='https://github.com/' target="_blank" rel='noopener noreferrer'>
                          <i className="bi bi-github"></i>
                         </a>
                         <a href='https://app-lista-gastos-fe0ab.web.app/iniciar-sesion' target="_blank" rel='noopener noreferrer'>
                            <i className="bi bi-laptop"></i>
                         </a>
                      </div>
                  </div>
             </div>
          </div>    
        </div>
      </div>
      <a href='https://github.com/' target='_blank' rel='noopener noreferrer'>
      <button type="button" className="btn btn-info">
           Ver mas proyectos  
         <i className="bi bi-arrow-right-circle-fill"></i>
      </button>
      </a>
    </section>




  )
}

export default Proyects
