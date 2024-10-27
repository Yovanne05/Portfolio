import '../styles/App.css';
import Banner from './Banner/Banner';
import IconsList from "./Banner/IconsList";
import MainContent from './main_content/MainContent';
import Home from './main_content/home/Home';
import moi from '../assets/main_content/moi.png';
import React from "react";
import HomeText from "./main_content/home/HomeText";
import Skills from "./main_content/skills/Skills";
import SkillsList from "./main_content/skills/SkillsList";
import Project from "./main_content/projects/Project";
import ProjectList from "./main_content/projects/ProjectList";
import AboutMe from "./footer/AboutMe";
import Contact from "./footer/Contact";

function App() {
    return (
        <div>
            <Banner>
                <IconsList />
            </Banner>
            <MainContent>
                <Home>
                    <HomeText />
                    <div className="home-image">
                        <img src={moi} alt="moi" />
                    </div>
                </Home>
                <Skills>
                    <SkillsList />
                </Skills>
                <Project>
                    <ProjectList />
                </Project>
            </MainContent>
            <AboutMe>
                <Contact/>
            </AboutMe>
        </div>
    )
}

export default App;
