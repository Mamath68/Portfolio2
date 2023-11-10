import React from 'react';
import './skillBar.css';

function SkillBar({ skill }) {
    return (
        <div className="progress">
            <span className="skill">
                <i className={skill.icon}></i>
                {skill.name}
            </span>
        </div>
    );
}

export default SkillBar