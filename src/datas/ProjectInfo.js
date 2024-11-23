import zelda from '../assets/project/zelda.png'
import portfolio from '../assets/project/portfolio.png'
import music from '../assets/project/music.png'
import '../styles/maincontent/project/ProjectFilter.css'

const projects = [
    { name: 'Zelda', url: "https://github.com/Yovanne05/Zelda", cover :zelda, skills : ['Java'] },
    { name: 'Portfolio', url: "https://github.com/Yovanne05/Portfolio", cover :portfolio, skills : ['React', 'JavaScript', 'Html', 'Css'] },
    { name: 'Music App', url: "https://github.com/Yovanne05/MusicApp", cover :music, skills : ['React', 'JavaScript', 'Html', 'Css'] }
];

export const projectsList = projects.map((project, index) => ({
    ...project,
    id: `project${index}`
}));
