import React from 'react'

function LinguistiqueBar({ linguistique, active }) {
    return (
        <div className="progress">
            <span className="linguistique">
                {linguistique.name} <i className="val">{linguistique.level}</i>
            </span>
            <div className="progress-bar-wrap">
                <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={active ? { width: linguistique.percentage } : { width: '1px' }}
                ></div>
            </div>
        </div>
    );
}

export default LinguistiqueBar