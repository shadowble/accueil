import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Joignez-nous</h1>
      <p className="contact-text">
        Nous sommes toujours à votre écoute ! Veuillez remplir le formulaire
        ci-dessous, et notre équipe vous répondra dans les plus brefs délais.
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Prénom - Nom</label>
          <input type="text" id="name" name="name" placeholder="Votre nom" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>
          <input type="email" id="email" name="email" placeholder="Votre e-mail" required />
        </div>
        <div className="form-group">
          <label htmlFor="tel">Téléphone</label>
          <input type="text" id="email" name="tel" placeholder="Votre numero de telephone" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Votre message" rows="5" required></textarea>
        </div>
        <button type="submit" className="contact-button">Envoyer</button>
      </form>
    </div>
  )
}
