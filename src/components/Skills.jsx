import React, { useState } from 'react';
import './skills.css';
import skillsData from '../data/skillsData';
import SkillBar from './SkillBar';

function Skills({ active }) {

    const [skills] = useState(skillsData);

    return (
        <div className="container skills">
            <div className="section-title">
                <h2>Langages</h2>
            </div>
            <div className="row skills-content">
                <div className="col-lg-6">
                    {active &&
                        skills
                            .slice(0, 3)
                            .map(skill => (
                                <SkillBar key={skill._id} active={active} skill={skill} />
                            ))}
                </div>
                <div className="col-lg-6">
                    {active &&
                        skills
                            .slice(3, 6)
                            .map(skill => (
                                <SkillBar key={skill._id} active={active} skill={skill} />
                            ))}
                </div>
            </div>
        </div>
    )
}

export default Skills