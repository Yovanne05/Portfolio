import React from "react";
import "../../../styles/maincontent/home/HomeText.css";
import cv from "../../../assets/main_content/CV_Yovanne_Ponnou.pdf";

function HomeText() {
    return (
        <div className="home-texte">
            <p>Yovanne Ponnou</p>
            <h1>Student</h1>
            <h1 style={{ color: '#6c6c6c' }}>Software Developer</h1>
            <p>
                Passionate about creating software solutions and enjoy exploring frontend and backend technologies while
                developing my skills.
            </p>
        </div>
    );
}
export default HomeText;
