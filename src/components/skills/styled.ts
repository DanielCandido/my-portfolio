import styled from 'styled-components';

export const SkillContainer = styled.div`
    width: 100%;
    height:100%;
    padding:30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h2`
    color: ${props => props.theme.colors.text};
    border-bottom: 6px solid ${props => props.theme.colors.primary};
    padding: 5px;
    margin: 10px;
    display: inline-block;
`

export const SkillCard = styled.div`
    width: 100%;
    background-color: #ddd;
    margin: 10px 0;
`

export const Skill = styled.div`
   text-align: right;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
`