import React from 'react'
import './resume.css';
import SectionTitle from '../components/SectionTitle';

function Resume({ reference }) {
  return (
    <section id="resume" className="resume" ref={reference}>
      <div className="container resume">
        <SectionTitle title="Resumé" subtitle="Regardez mon CV" />
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sommaire</h3>
            <div className="resume-item pb-0">
              <h4>Mathieu Stamm</h4>
              <p>
                <em>
                  Fraîchement certifié d'une formation qualifiante (Développeur Web et Web Mobile) à Elan formation à Mulhouse, je suis à la recherche d'une poursuite de formation, d'une alternance ou d'un premier emploi pour m'insérer pleinement dans le monde du travail.
                </em>
              </p>
              <ul>
                <li>3 rue Maurice Ravel, 68200 Mulhouse(France)</li>
                <li><a href="tel:+33669142804">+33 6 69 14 28 04</a></li>
                <li><a href="mailto:mathieu.stamm@gmail.com">mathieu.stamm@gmail.com</a></li>
              </ul>
            </div>
            <h3 className="resume-title">Formations</h3>
            <div className="resume-item">
              <h4>Titre Professionel de niveau 5 (Developpeur Web et Web Mobile)</h4>
              <h5>2023</h5>
              <p>
                <em>
                  Elan Formation - Brunstatt Didenheim
                </em>
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis iste, voluptates voluptate eius vitae, fuga laudantium optio quia, et illum libero error. Eius molestias inventore reiciendis deserunt odit est voluptatum.
              </p>
            </div>
            <div className="resume-item">
              <h4>Remise à niveau et préparation au métier de Developpeur Web et Web Mobile</h4>
              <h5>2022</h5>
              <p>
                <em>
                  Université de Haute-Alsace de Mulhouse
                </em>
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis iste, voluptates voluptate eius vitae, fuga laudantium optio quia, et illum libero error. Eius molestias inventore reiciendis deserunt odit est voluptatum.
              </p>
            </div>
            <div className="resume-item">
              <h4>CAPA Metiers de l'agriculture - Option Production Horticole</h4>
              <h5>2017 - 2019</h5>
              <p>
                <em>
                  LEGTA Lucien Quelet - Valdoie(90)
                </em>
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis iste, voluptates voluptate eius vitae, fuga laudantium optio quia, et illum libero error. Eius molestias inventore reiciendis deserunt odit est voluptatum.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Experience Professionel</h3>
            <div className="resume-item">
              <h4>Vide</h4>
              <h5>Pour le Moment</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume