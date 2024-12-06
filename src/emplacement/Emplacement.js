import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Emplacement.css";
import L from "leaflet";

// Icône personnalisée pour le marqueur
const customIcon = L.icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const Emplacement = () => {
  const [position, setPosition] = useState([43.1258, 5.9306]); // Coordonnées par défaut : Toulon

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]); // Met à jour la position si l'utilisateur autorise la géolocalisation
      },
      (err) => {
        console.error("Erreur lors de la récupération de la position :", err);
      }
    );
  }, []);

  return (
    <div className="emplacement-container">
      <h2>Visitez-nous ici.</h2>
      <MapContainer center={position} zoom={13} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon} />
      </MapContainer>
    </div>
  );
};

export default Emplacement;
