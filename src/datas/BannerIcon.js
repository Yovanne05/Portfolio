import home from '../assets/banner/home.png';
import project from '../assets/banner/project.png';
import aboutMe from '../assets/banner/aboutMe.png';


const icons = [
    { name: 'home', cover: home },
    { name: 'project', cover: project },
    { name: 'aboutMe', cover: aboutMe }
];

export const iconList = icons.map((icon, index) => ({
    ...icon,
    id: `icon${index}`
}));