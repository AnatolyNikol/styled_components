import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    primary?: boolean
    outlined?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: ${props => props.fontSize || '2rem'};
    font-weight: bold;
    
    //&:last-child {
    //    background-color: burlywood;
    //}

    ${props => props.outlined && css<StyledBtnPropsType>`
        border: 2px solid ${props => props.color || 'brown'};
        color: ${props => props.color || 'brown'};
        background-color: transparent;

        &:hover {
            border-color: gray;
            color: gray;
            background-color: transparent;
        }
    `};

    ${props => props.primary && css<StyledBtnPropsType>`
        background-color: ${props => props.color || 'brown'};
        color: chocolate;

        &:hover {
            background-color: gray;
        }
    `}

`;

export const SuperButton = styled(StyledBtn)`
    border-radius: 5px;
    background-color: darkgoldenrod;
    color: darkolivegreen;

    &:hover {
        animation: ${MyAnimation} 2s ease-in-out infinite;
    }
`;