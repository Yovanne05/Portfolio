import home from '../assets/banner/home.png';
import skills from '../assets/banner/project.png';
import aboutMe from '../assets/banner/aboutMe.png';
import folder from '../assets/banner/folder.png';


const icons = [
    { name: 'home', cover: home },
    { name: 'skills', cover: skills },
    { name: 'folder', cover: folder },
    { name: 'aboutMe', cover: aboutMe }
];

export const iconList = icons.map((icon, index) => ({
    ...icon,
    id: `icon${index}`
}));