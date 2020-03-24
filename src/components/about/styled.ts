import styled from 'styled-components';

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px;
`

export const Title = styled.h2`
    color: ${props => props.theme.colors.text};
    border-bottom: 6px solid ${props => props.theme.colors.primary};
    padding: 5px;
    display: inline-flex;
    text-align: center;
`