import React from "react";

function AboutMe({children}) {
    return (
        <div className="mainContent">
            <div className="main">
                <div className="main-content">{children}</div>
            </div>
        </div>
    )
}

export default AboutMe;