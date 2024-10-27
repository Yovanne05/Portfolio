import { useState } from 'react';
import { projectsList } from '../../../datas/ProjectInfo';
import ProjectCart from "./ProjectCart";

const lstSkills = ['C', 'Java', 'Php', 'Postgresql', 'Python', 'Css', 'Html', 'JavaScript', 'Photoshop', 'React'];

function ProjectFilter() {
    const [getselectedSkills, setSkills] = useState([]);

    const skillsSelectionner = (event) => {
        const skill = event.target.value;

        if (skill === "") return;

        if (getselectedSkills.includes(skill)) {
            setSkills(getselectedSkills.filter(s => s !== skill));
        } else {
            setSkills([...getselectedSkills, skill]);
        }
    };

    function skillInProject(skillsInProject) {
        return getselectedSkills.some(skillFilter => skillsInProject.includes(skillFilter));
    }

    return (
        <div className="projects-filter">
            <div className="select-container">
                <select onChange={skillsSelectionner} value="">
                    <option value="" disabled>Select a skill</option>
                    {lstSkills.map(skill => (
                        <option key={skill} value={skill}>
                            {skill}
                        </option>
                    ))}
                </select>

                <div className="selected-skills">
                    {getselectedSkills.map(skill => (
                        <p key={skill} className="selected-skill">{skill}</p>
                    ))}
                </div>
            </div>

            <ul className='project-list'>
                {getselectedSkills.length === 0 ? (
                    projectsList.map((project) => (
                        <ProjectCart key={project.id} project={project}/>
                    ))
                ) : (
                    projectsList.filter(project => skillInProject(project.skills)).map((project) => (
                        <ProjectCart key={project.id} project={project}/>
                    ))
                )}
            </ul>
        </div>
    );

}

export default ProjectFilter;
