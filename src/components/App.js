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
            </MainContent>
        </div>
    )
}

export default App;
