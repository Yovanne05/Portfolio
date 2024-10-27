import React from 'react';
import { useState } from "react";
import ProjectCart from "./ProjectCart";
import ProjectFilter from "./ProjectFilter";
import Filter from "./Filter";

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
                    <div className="project-container">
                        <h1>Projects</h1>
                        <ProjectFilter getselectedSkills={getselectedSkills} onSkillChange={skillsSelectionner}/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Project;
