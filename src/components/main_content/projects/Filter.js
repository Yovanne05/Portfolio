import '../../../styles/maincontent/project/Filter.css'

const lstSkills = ['C', 'Java', 'Php', 'Postgresql', 'Python', 'Css', 'Html', 'JavaScript', 'Photoshop', 'React'];

function Filter({ getselectedSkills, onSkillChange }) {
    const skillsSelectionner = (event) => {
        const skill = event.target.value;
        if (skill === "") return;
        onSkillChange(skill);
    };

    return (
        <div className="select-container">
            <select onChange={skillsSelectionner} value="" id="selectSkill">
                <option value="" disabled>Select a skill</option>
                {lstSkills.map(skill => (
                    <option key={skill} value={skill}>
                        {skill}
                    </option>
                ))}
            </select>

            <div className="selected-skills">
                {getselectedSkills.map(skill => (
                    <p key={skill} className="selected-skill">{skill}</p>
                ))}
            </div>
        </div>
    );
}

export default Filter;
