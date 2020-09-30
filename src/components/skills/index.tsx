import React from 'react';

import { SkillContainer, Title, SkillCard, Skill } from './styled';

const Skills: React.FC = () => {
    // const { colors } = useContext(ThemeContext);

    return (
        <SkillContainer>
            <div style={{width: '60%', textAlign: "center"}}>
                <Title>Skills</Title>
                <p>REACT</p>
                <SkillCard>
                    <Skill style={{width: '70%', backgroundColor: '#AA78A6', paddingRight: '4px'}}>70%</Skill>
                </SkillCard>
                <p>Angular</p>
                <SkillCard>
                    <Skill style={{width: '85%', backgroundColor: '#457EAC', paddingRight: '4px'}}>85%</Skill>
                </SkillCard>
                <p>C#</p>
                <SkillCard>
                    <Skill style={{width: '85%', backgroundColor: '#2D5D7B', paddingRight: '4px'}}>85%</Skill>
                </SkillCard>
                <p>NodeJS</p>
                <SkillCard>
                    <Skill style={{width: '90%', backgroundColor: '#531253', paddingRight: '4px'}}>90%</Skill>
                </SkillCard>
            </div>
        </SkillContainer>
    )
}

export default Skills;