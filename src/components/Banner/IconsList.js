import { iconList } from "../../datas/BannerIcon";
import '../../styles/Banner/IconList.css'

function IconsList() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
    };


    return (
        <ul className="banner-icon">
            {iconList.map((icon) => (
                <li key={icon.id}>
                    <img
                        src={icon.cover}
                        alt={`${icon.name} cover`}
                        className="banner-icon-image"
                        onClick={() => {scrollToSection(icon.name)}}
                    />
                </li>
            ))}
        </ul>
    );
}


export default IconsList;
