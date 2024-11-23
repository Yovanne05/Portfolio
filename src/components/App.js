import '../styles/App.css';
import Banner from './Banner/Banner';
import IconsList from "./Banner/IconsList";
import MainContent from './main_content/MainContent';
import Home from './main_content/home/Home';
import moi from '../assets/main_content/moi.jpg';
import React from "react";
import HomeText from "./main_content/home/HomeText";
import Skills from "./main_content/skills/Skills";
import SkillsList from "./main_content/skills/SkillsList";
import Project from "./main_content/projects/Project";
import AboutMe from "./footer/AboutMe";
import Contact from "./footer/Contact";
import "../styles/maincontent/home/HomeText.css"
import cv from "../assets/main_content/CV_Yovanne_Ponnou.pdf";
import Cv from "./main_content/home/Cv";

function App() {
    return (
        <div>
            <Banner>
                <IconsList />
            </Banner>
            <MainContent>
                <div id="home">
                    <Home>
                        <HomeText/>
                        <div className="home-container">
                            <img src={moi} alt="moi"/>
                            <Cv />
                        </div>

                    </Home>
                </div>

                <div id="skills">
                    <Skills>
                        <SkillsList/>
                    </Skills>
                </div>

                <div id="projects">
                    <Project/>
                </div>

                <div id="contact">
                    <AboutMe>
                        <Contact/>
                    </AboutMe>
                </div>
            </MainContent>
        </div>
    );
}


export default App;
