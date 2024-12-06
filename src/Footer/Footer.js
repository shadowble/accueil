import React from 'react'
import "./Footer.css"
import Access from "../img/1x/fichier.png"

export default function Footer() {
  return (
    <div className='footer-container'>
        <img src={Access} alt="" className='logo' />
        <p>Emplacement</p>
        <p>A Propos</p>
        <p>Contact</p>
        <p>Telecharger l'app</p>
        <article>
            <p>Réseaux Sociaux</p>
        </article>
    </div>
  )
}
