import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <Box>
                <StyledBtn as={StyledLink} href={'#'}>LinkComponent</StyledBtn>
                <StyledBtn as={'a'} href={'#'}>Link</StyledBtn>
                <StyledBtn>Hello</StyledBtn>
                <SuperButton>SuperButton</SuperButton>
            </Box>
        </div>
    );
}

export default App;

const StyledBtn = styled.button`
    border: none;
    background-color: brown;
    padding: 10px 20px;
    color: chocolate;
    font-size: 2rem;
    font-weight: bold;
`;

const SuperButton = styled(StyledBtn)`
    border-radius: 5px;
    background-color: darkgoldenrod;
    color: darkolivegreen;
`;

const StyledLink = styled.a`
    color: cadetblue;
    font-size: 2rem;
    font-weight: bold;
    background-color: transparent;
    padding: 0;
`;

const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;