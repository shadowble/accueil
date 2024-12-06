import React from 'react'
import "./Apropos.css"
import Banner from "../img/banner.jpg"

export default function Apropos({members}) {
  return (
    <div className="apropos-container">
      {/* Section bannière */}
      <div className="banner">
        <img src={Banner} alt="Bannière À propos" className="banner-image" />
        <div className="banner-text">
          <h1>À propos de nous</h1>
          <p>
            Découvrez notre vision, nos valeurs et notre engagement à offrir le meilleur.
          </p>
        </div>
      </div>

      {/* Section contenu */}
      <div>
            <div className="apropos-content">
              <section className='section1'>
                  <h3>Notre mission : rendre le sport accessible à tous</h3>
                  <p>
                  Chez Accèsport, nous croyons que chaque jeune doit avoir l’opportunité de s’amuser, de se dépasser et de créer des souvenirs sur les city-stades, même sans équipement personnel. Grâce à notre application et à nos box connectées, placées à proximité des terrains, ils peuvent emprunter gratuitement des ballons, raquettes ou autres équipements sportifs en quelques clics.

Notre objectif est clair : démocratiser l’accès au sport pour favoriser l’inclusion, l’épanouissement personnel et le lien social. En éliminant les barrières matérielles, nous souhaitons que chacun puisse se sentir à sa place sur le terrain, vivre des moments de partage et cultiver des valeurs de solidarité et de respect.

Accèsport, c’est bien plus qu’un service, c’est un engagement pour une société où le sport est une chance offerte à tous.
                  </p>
              </section>
              <section className='section2'>
                <h3>Nos valeurs : accessibilité, partage, inclusion</h3>
                  <p>
                  Chez Accèsport, nos valeurs reflètent notre engagement à rendre le sport accessible à tous, sans distinction. Nous croyons en l’accessibilité, en supprimant les barrières matérielles pour permettre à chacun de pratiquer une activité sportive. Le partage est au cœur de notre démarche : nous souhaitons que les city-stades deviennent des lieux de rencontre, de convivialité et d’échange entre les jeunes. Enfin, nous valorisons l’inclusion, en garantissant que chacun, quel que soit son contexte, puisse se sentir intégré, respecté et libre de s’épanouir à travers le sport.

Ces valeurs nous guident chaque jour pour bâtir un service qui rapproche les individus et fait du sport un levier de cohésion sociale.
                  </p>
              </section>
            </div>
            <h2>Nos valeurs</h2>
            <section className='section3'>
              <p className='p1'>Accessibilité</p>
              <p className='p2'>Gratuité</p>
              <p className='p3'>Durabilité</p>
              <p className='p4'>Social</p>
            </section>
      </div>
      <h1>PRESENTATION COLLABORATIVE</h1>
      {/*  */}
      <div className="team-container">
      <h1>Notre Équipe</h1>
      <div className="team-grid">
        {members.map((member) => (
          <div className="team-card" key={member.id}>
            <img src={member.image} className="team-photo" />
            <h3 className="team-name">{member.nom}</h3>
          </div>
        ))}
      </div>
    </div>
      {/*  */}
    </div>
  )
}
