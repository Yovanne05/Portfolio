import home from '../assets/banner/home.png';
import skills from '../assets/banner/project.png';
import contact from '../assets/banner/aboutMe.png';
import projects from '../assets/banner/folder.png';


const icons = [
    { name: 'home', cover: home },
    { name: 'skills', cover: skills },
    { name: 'projects', cover: projects },
    { name: 'contact', cover: contact }
];

export const iconList = icons.map((icon, index) => ({
    ...icon,
    id: `icon${index}`
}));