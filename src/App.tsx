import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
    return (
        <div className="App">
            <Menu>
                <ul>
                    <li><a href="">menu item 1</a></li>
                    <li><a href="">menu item 2</a></li>
                    <li><a href="">menu item 3</a></li>
                </ul>
            </Menu>

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

    &:hover {
        background-color: gray;
    }

    &:last-child {
        background-color: burlywood;
    }
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

    button {
        cursor: pointer;
    }

    ${StyledLink} {
        cursor: zoom-in;
    }
`;

const Menu = styled.nav`
    ul {
        list-style: none;
        padding: 0;
    }
`;