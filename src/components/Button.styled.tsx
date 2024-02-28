import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

export const StyledBtn = styled.button`
    border: none;
    background-color: brown;
    padding: 10px 20px;
    color: chocolate;
    font-size: 2rem;
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