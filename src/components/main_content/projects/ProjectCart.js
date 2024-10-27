import '../../../styles/maincontent/project/ProjectCart.css'

function ProjectCart({project}){
    return (
        <li key={project.id} className="project-list-item">
            <div className="project-list-content">
                <img src={project.cover} alt={`${project.name} cover`}/>
                <p className="project-name">{project.name}</p>
                <a href={project.url} target={"_blank"} rel="noreferrer">Repositories </a>
                <div className="project-skills">
                    {project.skills.map((skill, index) => (
                        <p key={index} className="skill-item">{skill}</p>
                    ))}
                </div>
            </div>
        </li>
    );
}

export default ProjectCart;