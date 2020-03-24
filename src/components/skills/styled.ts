import styled from 'styled-components';

export const SkillContainer = styled.div`
    width: 100%;
    height:100%;
    padding:50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h2`
    color: ${props => props.theme.colors.text};
    border-bottom: 6px solid ${props => props.theme.colors.primary};
    padding: 5px;
    display: inline-flex;
`