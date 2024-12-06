import React, {useState} from 'react'
import './Menu.css'
import Access from "../img/1x/accee.png"
import Burger from '../img/Burger.svg'


export default function  Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div> 
      <nav className='nav'>
      <ul className='menu'>
            <div className='logoItem'>
              <a href="/" className='link'><img src={Access} className='logo' alt="" /></a>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
            <img src={Burger} alt="Menu" className="burger-icon" />
          </button>
        <div className={`menu-droite ${menuOpen ? 'show' : ''}`}>
            <li className='menuItem'>
              <a href="/" className='link'>Accueil </a>
            </li>
            <li className='menuItem'>
              <a href="emplacement" className='link'>Emplacement</a>
            </li>
            <li className='menuItem'>
              <a href="A-propos" className='link'>A propos</a>
            </li>
            <li className='menuItem'>
              <a href="download" className='download'>Télécharger l'app</a>
            </li>
            <li className='menuItem'>
              <a href="contact" className='link'>Contact</a>
            </li>
        </div>
      </ul>
    </nav>
    </div>
  )
}
