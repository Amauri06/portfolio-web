import Image from 'next/image';
import profilePic from '../img/logo2.png'
import  "./Nav.css";
import { MdDensitySmall } from "react-icons/md";



function Nav() {


  return (


    
    // Barra de Navegacion
  <nav className="navbar navbar-expand-md">
    <div className="container-fluid">

      {/* boton */}
      <button 
          className="navbar-toggler " 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbar-toggler" 
          aria-controls="navbarTogglerDemo01" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          
      >
        <MdDensitySmall />
     </button>

      <div className="collapse navbar-collapse " id="navbar-toggler">

          {/* Logo */}
        <a className="navbar-brand" href="#">
            <Image 
             className='brand'
             src={profilePic} 
             alt="Logo de mi perfil"
             width={80}
             height={80}
             />
        </a>

            {/* lista de Menu*/}
        <ul className="navbar-nav  d-flex justify-content-center align-items-center">
          <li className={`nav-item`}>
            <a className="nav-link active " id='about' aria-current="page" href="#">About</a>
          </li>
          <li className={`nav-item `}>
            <a className={`nav-link`} href="#">Proyects</a>
          </li>
          <li className={`nav-item` }>
            <a className="nav-link" href='#' id=''>Testimony</a>
          </li>
          <li className={`nav-item `}>
            <a className="nav-link" href='#' id=''>Contact</a>
          </li>
        </ul>
      </div>

    </div>
  </nav>
   
   
  )
}

export default Nav