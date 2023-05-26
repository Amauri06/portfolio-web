import './Footer.css'
import Image from 'next/image'
import logo from '../img/logo2.png'

import React from 'react'

function Footer() {
  return (
   <footer className='section-dark d-flex flex-column align-items-center justify-content-center'>
    <Image className='brand-footer' src={logo} alt='logo' width={80} height={80}  />
    <p className='footer-text text-center'>Aprendo y creo todos los dias.<br/>
        Creemos un proyecto juntos.
    </p>

    <div className="icons-soctial-media d-flex flex-wrap align-items-center justify-content-center">
        <a href='https://www.instagram.com/amauri006/' target='_blank'>
             < i className="bi bi-instagram"></i>
        </a>
        <a href='https://www.linkedin.com/learning/?trk=trk_default_learning/' target='_blank'>
             < i className="bi bi-linkedin"></i>
        </a>
        <a href='https://github.com/Amauri06' target='_blank'>
            <i className="bi bi-github"></i>
        </a>
        
        <a href='mailto:ing.amaury06@gmail.com' target='_blank'>
        <i className="bi bi-envelope-at-fill"></i>
        </a>
    </div>

        <div className='Copyright'>Creado por Amauri ULooa (2023) &#169; </div>
   </footer>
  )
}

export default Footer