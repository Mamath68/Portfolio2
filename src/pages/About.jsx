import React, {useEffect, useState} from 'react';
import './about.css';
import SectionTitle from '../components/SectionTitle';
import profilImg from '../images/profile-img.jpg';
import Counter from '../components/Counter';
import Skills from '../components/Skills';
import Interests from '../components/Interests';
import Linguistique from '../components/Linguistique';



function About({reference, aboutActive}) {
const [age, setAge] = useState(0);
const birthDate = '1998-02-12'; // Date de naissance en dur
useEffect(() => {
    const calculateAge = () => {
        const today = new Date();
        const birthDateObj = new Date(birthDate);
        let ageInYears = today.getFullYear() - birthDateObj.getFullYear();
        const monthDiff = today.getMonth() - birthDateObj.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
            ageInYears--;
        }

        setAge(ageInYears);
    };

    const interval = setInterval(calculateAge, 1000);

    return () => clearInterval(interval);
}, [birthDate]);
    return (
        <section id="about" className='about' ref={reference}>
            <div className="container about-me">
                <SectionTitle title="A Propos" subtitle="En Savoir Plus à mon sujet"/>
                <div className="row">
                    <div className="col-lg-4">
                        <img src={profilImg} alt="Mathieu Stamm" className='img-fluid'/>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>Développeur Web et Web Mobile</h3>
                        <p className="fst-italic">

                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="linkabout">
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{' '}
                                        <strong>Date de Naissance: </strong><span>12/02/1998</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{' '}
                                        <strong>GitHub: </strong> <span><a href="https://github.com/Mamath68" target="_blank" rel="noopener noreferrer">Mon GitHub</a></span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{' '}
                                        <strong>Telephone: </strong><span><a
                                        href="tel:+33669142804">+33 6 69 14 28 04</a></span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{' '}
                                        <strong>Ville: </strong><span>Mulhouse/France</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="linkabout">
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{' '}
                                        <strong>Age: </strong><span>{age}</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{' '}
                                        <strong>Niveau de Formation: </strong><span>BTS</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-chevron-right"></i>{' '}
                                        <strong>Email: </strong><span><a
                                        href="mailto:mathieu.stamm@gmail.com">mathieu.stamm@gmail.com</a></span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Counter active={aboutActive}/>
            <Skills active={aboutActive}/>
            <Linguistique active={aboutActive}/>
            <Interests active={aboutActive}/>
        </section>
    );
}

export default About