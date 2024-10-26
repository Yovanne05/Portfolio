import {iconList} from "../../datas/BannerIcon";

function listIcon() {
    return (
        <ul className='banner-icon'>
            {iconList.map((icon) => (
                <li key={icon.id}>
                    <img src={icon.cover} alt={`${icon.name} cover`} className='banner-icon-image' />
                </li>
            ))}
        </ul>
    );
}

export default listIcon;