import React from 'react';
import ProjectCart from "./ProjectCart";
import ProjectFilter from "./ProjectFilter";

function Project() {
    return (
        <div className="main">
            <div className="main-content">
                <div className="projects">
                    <h1> Projects</h1>
                    <ProjectFilter/>
                </div>

            </div>
        </div>
    );
}

export default Project;
