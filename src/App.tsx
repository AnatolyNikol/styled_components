import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <Box>
                <StyledBtn>Hello</StyledBtn>
            </Box>
        </div>
    );
}

export default App;

const StyledBtn = styled.button`
    border: none;
    background-color: brown;
    padding: 10px 20px;
    border-radius: 5px;
    color: chocolate;
    font-size: 2rem;
    font-weight: bold;
`;

const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;