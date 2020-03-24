import React, { useContext } from 'react';

import { SkillContainer, Title } from './styled';
import { ThemeContext } from 'styled-components';

const Skills: React.FC = () => {
    const { colors } = useContext(ThemeContext);

    return (
        <SkillContainer>
            <div>
                <Title>Skills</Title>
                {/* <Progress active value={50} />
                <Progress active value={50} />
                <Progress active value={50} /> */}
            </div>
        </SkillContainer>
    )
}

export default Skills;