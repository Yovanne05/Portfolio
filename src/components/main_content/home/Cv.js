import React from "react";
import "../../../styles/maincontent/home/Cv.css";
import cv from "../../../assets/main_content/CV_Yovanne_Ponnou.pdf";

function Cv() {
    return (
        <div className="home-cv-link">
            <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="cv-link"
            >
                CV
            </a>
        </div>
    );
}

export default Cv;
