import React from 'react'

function SkillBar({ skill}) {
    return (
        <div className="progress">
            <span className="skill">
                {skill.name}
            </span>
        </div>
    );
}

export default SkillBar