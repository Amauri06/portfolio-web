import "./Header.css";
import Image from "next/image";
import developer from "../img/developers/desarrollador-ejemplo.svg";
import { Rubik_Dirt } from 'next/font/google';


export const rubik = Rubik_Dirt({
  subsets: ['latin'],
  weight: ['400']
})



function Header() {
  return (

   
    <section className="hero align-item-stretch">
      <div className="hero-main ">
        <Image className="hero-img-developer" src={developer} alt="foto de Amauri " />
        <h1 className={rubik.className}> Hola, soy Amauri </h1>
        <h2>Desarrollo sitios web y escribo articulos sobre programacion.</h2>
      </div>
    </section>
    
  );
}

export default Header;
