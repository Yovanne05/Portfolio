import React from 'react';
import { useState } from "react";
import ProjectFilter from "./ProjectFilter";
import '../../../styles/maincontent/project/Project.css'

function Project() {
    const [getselectedSkills, setSkills] = useState([]);

    const skillsSelectionner = (skill) => {
        if (getselectedSkills.includes(skill)) {
            setSkills(getselectedSkills.filter(s => s !== skill));
        } else {
            setSkills([...getselectedSkills, skill]);
        }
    };
    return (
        <div className="main">
            <div className="main-content">
                <div className="projects">
                        <h1>Projects</h1>
                        <ProjectFilter getselectedSkills={getselectedSkills} onSkillChange={skillsSelectionner}/>
                </div>

            </div>
        </div>
    );
}

export default Project;
