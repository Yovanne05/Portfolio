import clogo from '../assets/skills/back/C_logo.png';
import java from '../assets/skills/back/Java.png';
import php from '../assets/skills/back/php.png';
import postgresql from '../assets/skills/back/Postgresql.png';
import python from '../assets/skills/back/python.png';

const backIcons = [
    { name: 'C', cover: clogo },
    { name: 'Java', cover: java },
    { name: 'Php', cover: php },
    { name: 'Postgresql', cover: postgresql },
    { name: 'Python', cover: python }
];

export const backIconList = backIcons.map((icon, index) => ({
    ...icon,
    id: `backicon${index}`
}));

