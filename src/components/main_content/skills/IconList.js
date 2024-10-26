function IconList({ list }) {
    return (
        <ul className='skills-icon'>
            {list.map((icon) => (
                <li key={icon.id} className="skills-icon-item">
                    <div className="icon-content">
                        <img src={icon.cover} alt={`${icon.name} cover`} className='skills-icon-image' />
                        <p className="icon-name">{icon.name}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default IconList;
