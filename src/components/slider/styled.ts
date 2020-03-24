import styled from 'styled-components';

export const Slide = styled.div`
    height: 70vh;
    width: 100%;
    background: ${props => props.theme.colors.primary}; 
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    color: ${ props => props.theme.colors.navtext};
    display: flex;
    align-items: center;
    padding: 0 30px;
    justify-content: center;
`

export const Button = styled.button`
    padding: 10px;
    border: 0.5px solid ${props => props.theme.colors.secundary};
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.navtext};
    margin: 10px 0;
    cursor: pointer;
    &:hover {
    background-color: ${props => props.theme.colors.secundary};
  }
`


