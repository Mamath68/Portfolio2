import React from 'react';
import './about.css';
import SectionTitle from '../components/SectionTitle';
import profilImg from '../images/profile-img.jpg';
import Counter from '../components/Counter';
import Skills from '../components/Skills';
import Interests from '../components/Interests';
import Linguistique from '../components/Linguistique';

function About({ reference, aboutActive }) {
    return (
        <section id="about" className='about' ref={reference}>
            <div className="container about-me">
                <SectionTitle title="A Propos" subtitle="En Savoir Plus à mon sujet" />
                <div className="row">
                    <div className="col-lg-4">
                        <img src={profilImg} alt="me" className='img-fluid' />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>Developpeur Web et Web Mobile</h3>
                        <p className="fst-italic">

                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{' '}
                                        <strong>Date de Naissance: </strong><span>12 Février 1998</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{' '}
                                        <strong>GitHub: </strong> <span><a href="https://github.com/Mamath68" target="_blank" rel="noopener noreferrer">Mon GitHub</a></span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{' '}
                                        <strong>Telephone: </strong><span><a href="tel:+33669142804">+33 6 69 14 28 04</a></span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{' '}
                                        <strong>Ville: </strong><span>Mulhouse/France</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{' '}
                                        <strong>Age: </strong><span>25</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{' '}
                                        <strong>Niveau de Formation:  </strong><span>BTS</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{' '}
                                        <strong>Email: </strong><span><a href="mailto:mathieu.stamm@gmail.com">mathieu.stamm@gmail.com</a></span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <p>
                            Fraîchement certifié d'une formation de Développeur Web et Web Mobile, je suis à la recherche d'une suite de formation, d'une alternance ou d'un premier emploi pour m'insérer pleinement dans le monde du travail.

                        </p>
                    </div>
                </div>
            </div>
            <Counter active={aboutActive} />
            <Skills active={aboutActive} />
            <Linguistique active={aboutActive} />
            <Interests active={aboutActive} />
        </section>
    );
}

export default About