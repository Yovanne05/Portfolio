import {projectsList} from '../../../datas/ProjectInfo';

function ProjectList(){
    return (
        <ul className='project-list'>
            {projectsList.map((project) => (
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
    );
}

export default ProjectList;