import React, {useEffect, useState} from 'react'
import "./Accueil.css"
import Video from '../img/bannervideo.mp4'
import Un from '../img/un.png'
import Deux from '../img/deux.png'
import Trois from '../img/trois.png'
import Quatre from '../img/quatre.png'
import One from '../img/One.png'
import Two from '../img/Two.png'
import Three from '../img/Three.png'
import Four from '../img/Four.png'
import Five from '../img/Five.png'
import Persona from '../img/Persona.jpg'

export default function Accueil() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // 30000
  const [count, setCount] = useState(0); // État pour le compteur

  useEffect(() => {
    if (count < 30000) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 200); // Incrémente le compteur
      }, 10); // Incrément toutes les 1 ms
      return () => clearInterval(interval); // Nettoie l'intervalle
    }
  }, [count]);

  // 10000
  const [actif, setactif] = useState(0); // État pour le compteur

  useEffect(() => {
    if (actif < 10000) {
      const interval = setInterval(() => {
        setactif((prevCount) => prevCount + 20); // Incrémente le compteur
      }, 1); // Incrément toutes les 1 ms
      return () => clearInterval(interval); // Nettoie l'intervalle
    }
  }, [actif]);
  // station installes
  const [station, setstation] = useState(0); // État pour le compteur

  useEffect(() => {
    if (station < 200) {
      const interval = setInterval(() => {
        setstation((prevCount) => prevCount + 1); // Incrémente le compteur
      }, 1); // Incrément toutes les 1 ms
      return () => clearInterval(interval); // Nettoie l'intervalle
    }
  }, [station]);
  // scrore
  const [scoret, setscoret] = useState(0); // État pour le compteur

  useEffect(() => {
    if (scoret < 5) {
      const interval = setInterval(() => {
        setscoret((prevCount) => prevCount + 1); // Incrémente le compteur
      }, 1); // Incrément toutes les 1 ms
      return () => clearInterval(interval); // Nettoie l'intervalle
    }
  }, [scoret]);

  return (
    
      <div className="home-container">
      {/* Bannière avec vidéo */}
      <div className={`banner ${scrolled ? "scrolled" : ""}`}>
        <video
          className="banner-video"
          src={Video}
          autoPlay
          loop
          muted
        ></video>
        <div className="banner-overlay">
          <h1 className="banner-title">Bienvenue sur notre site AcceSport</h1>
          <p className="banner-subtitle">Explorez le monde avec nous</p>
        </div>
      </div>

      {/* Contenu de la page */}
      <div className="content">
        <section>
          <h2>En action : </h2>
          <p className='p'>Les chiffres qui bougent avec nous </p>
        </section>
        <div className='count-contain'>
          <section>
            <img src={Un} alt="" />
            <h1 className="counter-value"> +{count}</h1>
            <p className="counter-text">Durée d'activité cumulée</p>
          </section>
          <section>
          <img src={Deux} alt="" />
            <h1 className="counter-value"> +{actif}</h1>
            <p className="counter-text">Membre actif de l'application</p>
          </section>
          <section>
          <img src={Trois} alt=""/>
            <h1 className="counter-value"> {station}</h1>
            <p className="counter-text">Station installés</p>
          </section>
          <section>
          <img src={Quatre} alt="" />
            <h1 className="counter-value"> {scoret} / 10</h1>
            <p className="counter-text">Score global</p>
          </section>
        </div>
        <h2>Comment ça marche </h2>
        <div className='contain-icon'>
            <article>
              <p>1</p>
              <img src={One} alt="" style={{"height":"150px", "width": "100px"}}/>
              <h5>Télécharger l'application</h5>
              <p className='icon-co'>Les nouveaux inscrits rejoignent l’application Accesport, disponible sur l’App Store  et  Google Play.</p>
            </article>
            <article>
              <p>2</p>
              <img src={Two} alt="" style={{"height":"150px", "width": "100px"}}/>
              <h5>Réservez sur l’app !</h5>
              <p className='icon-co'>Les utilisateurs réservent un casier disponible via l’application avant de se rendre à la station.</p>
            </article>
            <article>
              <p>3</p>
              <img src={Three} alt="" style={{"height":"150px", "width": "100px"}}/>
              <h5>Sur place, tout est prêt !</h5>
              <p className='icon-co'>Ouvrez l’application, scannez le QR code du casier et récupérez votre matériel en toute simplicité.</p>
            </article>
            <article>
              <p>4</p>
              <img src={Four} alt="" style={{"height":"150px", "width": "100px"}}/>
              <h5>Profiter de faire du sport</h5>
            </article>
            <article>
              <p>5</p>
              <img src={Five} alt="" style={{"height":"150px", "width": "100px"}}/>
              <h5>Retourner le matériel</h5>
              <p className='icon-co'>Après utilisation, merci de remettre le matériel dans le casier</p>
            </article>
        </div>
        <div className='note-contain'>
          <div className='note-peronn'>
            <img src={Persona} alt="" style={{"height": "250px", "width":"auto","borderRadius": "10px"}}/>
            <article>
            <h3>Martin COL</h3>
            
                <p>Innovant et pratique ! Profitez d’un matériel de qualité impeccable avec une 
                application simple et fluide à utiliser.</p>
                <p style={{'color':'#003DCC'}}>★★★★★</p>
            </article>
          </div>
        </div>
      </div>
    </div>
    
  )
}
