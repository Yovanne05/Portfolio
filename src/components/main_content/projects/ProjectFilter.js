import { projectsList } from '../../../datas/ProjectInfo';
import ProjectCart from "./ProjectCart";
import Filter from "./Filter";
import React from "react";

function ProjectFilter({ getselectedSkills, onSkillChange }) {

    function skillInProject(skillsInProject) {
        return getselectedSkills.some(skillFilter => skillsInProject.includes(skillFilter));
    }

    return (
        <div className="projects-filter">
            <div className="filter-container">
                <Filter getselectedSkills={getselectedSkills} onSkillChange={onSkillChange} />
            </div>
            <div className="project-list-container">
                <ul className='project-list'>
                    {getselectedSkills.length === 0 ? (
                        projectsList.map((project) => (
                            <ProjectCart key={project.id} project={project} />
                        ))
                    ) : (
                        projectsList.filter(project => skillInProject(project.skills)).map((project) => (
                            <ProjectCart key={project.id} project={project} />
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}

export default ProjectFilter;
