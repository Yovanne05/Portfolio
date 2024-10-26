import css from '../assets/skills/front/CSS.png';
import html from '../assets/skills/front/HTML5.png';
import javaScript from '../assets/skills/front/JavaScript.png';
import photoshop from '../assets/skills/front/photoshoplogo.png';
import react from '../assets/skills/front/React.png';

const frontIcons = [
    { name: 'Css', cover: css },
    { name: 'Html', cover: html },
    { name: 'JavaScript', cover: javaScript },
    { name: 'Photoshop', cover: photoshop },
    { name: 'React', cover: react }
];

export const frontIconList = frontIcons.map((icon, index) => ({
    ...icon,
    id: `fronticon${index}`
}));

