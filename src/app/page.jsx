import "./page.css";
import Image from "next/image";
import Header from "@/components/Header";
import lower from '../img/hero-inferior.svg'
import {rubik} from '../components/Header'
import Experience from "@/components/Experience";
import Proyects from "@/components/Proyects";
import Articles from "@/components/Articles";
import Testimony from "@/components/Testimony";
import Contacts from '../components/Contacts'
import Footer from "@/components/Footer";
 
export default function Home() {
  return (
    <>
      <Header />

      <div className="hero-lower container-fluid">
        <Image
          src={lower}
          alt="Moitor, laptos y logos"
          className="hero-lower-img img-fluid"
        />
      </div>

      {/* Sobre mi  */}

      <section className="about section-dark">  
        <div className="contenedor">
          <h2 className={`section-title ${rubik.className}`}>Conoce a Amauri Ulloa</h2>
          <p className="section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam molestie fringilla felis, id bibendum purus volutpat eget. Cras et mi tempor, volutpat purus vel, vestibulum sem. Sed et tellus tristique, scelerisque leo vitae, sodales ipsum. Praesent elit nunc, suscipit et risus tincidunt, scelerisque hendrerit sapien. Donec ullamcorper sodales augue, porttitor mattis neque. Nam pretium dui non felis gravida, a placerat mauris tincidunt. Donec vulputate, urna et cursus sodales, augue sem rutrum massa, sollicitudin rutrum purus sem eu velit. Phasellus molestie tellus tellus, sit amet sollicitudin justo lobortis sit amet.</p>
        </div>
      </section>

        <Experience/>
        
      {/* Proyectos */}
        <Proyects/>

        {/* Articulos */}

        <Articles/>
        
        {/*Testimonios  */}
        <Testimony/>

        <Contacts/>

        <Footer/>
    </>
  );
}

