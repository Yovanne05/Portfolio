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
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ProjectList;