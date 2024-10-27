import React from 'react';
import ProjectList from "./ProjectList";

function Project() {
    return (
        <div className="main">
            <div className="main-content">
                <div className="projects">
                    <h1> Projects</h1>
                    <ProjectList/>
                </div>

            </div>
        </div>
    );
}

export default Project;
