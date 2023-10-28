import React from 'react'

function LinguistiqueBar({ linguistique}) {
    return (
        <div className="progress">
            <span className="linguistique">
                {linguistique.name} <i className="val">{linguistique.level}</i>
            </span>
            
        </div>
    );
}

export default LinguistiqueBar