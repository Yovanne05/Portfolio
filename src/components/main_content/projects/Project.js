import React from 'react';

function Project({ children }) {
    return (
        <div className="main">
            <div className="main-content">{children}</div>
        </div>
    );
}

export default Project;
