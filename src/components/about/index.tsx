import React from 'react';

import { AboutContainer, Title } from './styled';

const About: React.FC = () => {
    return (
        <AboutContainer>
            <div style={{ padding: '25px', textAlign: 'center' }}>
                <Title>About Me</Title>
                <p style={{ padding: '25px' }}>Meu nome é Daniel, tenho 23 anos e sou formado em análise e desenvolvimento de sistemas pela UniOpet. <br />
                    Atualmente trabalho com programador jr na Universidade Positivo.
                </p>
            </div>
        </AboutContainer>

    )
}

export default About;