import "../../../styles/maincontent/skills/SkillsList.css";
import {backIconList} from '../../../datas/BackIcon.js';
import {frontIconList} from '../../../datas/FrontIcon.js';

import IconList from "./IconList";

function SkillsList() {
    return (
        <div className="skills">
            <h1>Skills and Technologies</h1>
            <IconList list={backIconList} />
            <IconList list={frontIconList} />
        </div>
    );
}

export default SkillsList;
