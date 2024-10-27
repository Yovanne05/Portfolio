import { useState } from 'react';
import { projectsList } from '../../../datas/ProjectInfo';

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
            <select onChange={skillsSelectionner} value="">
                <option value="" disabled>Select a skill</option>
                {lstSkills.map(skill => (
                    <option key={skill} value={skill}>
                        {skill}
                    </option>
                ))}
            </select>

            <ul className='project-list'>
                {projectsList.filter(project => skillInProject(project.skills)).map((project) => (
                    <li key={project.id} className="project-list-item">
                        <div className="project-list-content">
                            <img src={project.cover} alt={`${project.name} cover`} />
                            <p className="project-name">{project.name}</p>
                            <a href={project.url} target={"_blank"} rel="noreferrer">Repositories </a>
                            <div className="project-skills">
                                {project.skills.map((skill, index) => (
                                    <p key={index} className="skill-item">{skill}</p>
                                ))}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectFilter;
