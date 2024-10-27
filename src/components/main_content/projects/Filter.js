import '../../../styles/maincontent/project/Filter.css';
import close from '../../../assets/project/close.png';

const lstSkills = ['C', 'Java', 'Php', 'Postgresql', 'Python', 'Css', 'Html', 'JavaScript', 'Photoshop', 'React'];

function Filter({ getselectedSkills, onSkillChange }) {
    const skillsSelectionner = (event) => {
        const skill = event.target.value;
        if (skill === "") return;
        onSkillChange(skill);
    };

    const removeSkill = (skillToRemove) => {
        onSkillChange(skillToRemove, true);
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
                    <div key={skill} className="selected-skill-container">
                        <p className="selected-skill">{skill}</p>
                        <img
                            src={close}
                            alt="Close"
                            className="close-icon"
                            onClick={() => removeSkill(skill)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Filter;
