import React from 'react'
import "./Telecharger.css"
import Playqr from "../img/Playqr.png"
import Appqr from "../img/Appqr.png"
import Apple from "../img/badge-applestore-en.svg"
import Playstore from "../img/badge-googleplay-en.svg"


export default function Telecharger() {
  return (
    <div className="download-container">
      <h1 className="download-title">Téléchargez notre application</h1>
      <p className="download-text">
        Accédez à toutes nos fonctionnalités où que vous soyez. Téléchargez notre application dès maintenant sur l'App Store ou le Play Store !
      </p>

      <div className="store-section">
        {/* App Store */}
        <div className="store-item">
        <img src={Apple} alt="" style={{'height': '110px', 'width': '250px'}}/>
          <img src={Appqr} alt="QR Code App Store" className="qr-code" />
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="store-link">
            Télécharger sur l'App Store
          </a>
        </div>

        {/* Play Store */}
        <div className="store-item">
        <img src={Playstore} alt=""  style={{'height': '110px','width': '250px'}}/>
          <img src={Playqr} alt="QR Code Play Store" className="qr-code" />
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="store-link">
            Télécharger sur le Play Store
          </a>
        </div>
      </div>
    </div>
  )
}
