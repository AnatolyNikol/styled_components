import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    // background-color: brown;
    background-color: ${props => props.color || 'brown'};
    padding: 10px 20px;
    color: chocolate;
    // font-size: 2rem;
    font-size: ${props => props.fontSize};
    font-weight: bold;

    &:hover {
        background-color: gray;
    }

    &:last-child {
        background-color: burlywood;
    }
`;

export const SuperButton = styled(StyledBtn)`
    border-radius: 5px;
    background-color: darkgoldenrod;
    color: darkolivegreen;

    &:hover {
        animation: ${MyAnimation} 2s ease-in-out infinite;
    }
`;