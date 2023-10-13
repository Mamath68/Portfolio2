import React, { useState } from 'react';
import './linguistique.css';
import LinguistiqueBar from './LinguistiqueBar';
import linguistiqueData from '../data/linguistiqueData';

function Linguistique({ active }) {

    const [linguistiques] = useState(linguistiqueData);

    return (
        <div className="container linguistiques">
            <div className="section-title">
                <h2>Langages</h2>
            </div>
            <div className="row skills-content">
                <div className="col-lg-12">
                    {active &&
                        linguistiques
                            .map(linguistique => (
                                <LinguistiqueBar key={linguistique._id} active={active} linguistique={linguistique} />
                            ))}
                </div>

            </div>
        </div>
    )
}

export default Linguistique