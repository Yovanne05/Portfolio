import zelda from '../assets/project/zelda.jpg'
import portfolio from '../assets/project/portfolio.png'
import '../styles/maincontent/Project.css'

const projects = [
    { name: 'Zelda', url: "https://github.com/Yovanne05/Zelda", cover :zelda, skills : ['Java'] },
    { name: 'Portfolio', url: "https://github.com/Yovanne05/Portfolio", cover :portfolio, skills : ['React'] }
];

export const projectsList = projects.map((project, index) => ({
    ...project,
    id: `project${index}`
}));