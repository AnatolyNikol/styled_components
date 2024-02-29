import React from 'react';
import styled from "styled-components";
import {StyledBtn, SuperButton} from "./components/Button.styled";
import {StyledLink} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";

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
                {/*<StyledBtn as={StyledLink} href={'#'}>LinkComponent</StyledBtn>*/}
                {/*<StyledBtn as={'a'} href={'#'}>Link</StyledBtn>*/}
                {/*<StyledBtn color={'green'} fontSize={'20px'}>Hello</StyledBtn>*/}
                {/*<StyledBtn color={'red'}>Hello</StyledBtn>*/}
                {/*<StyledBtn fontSize={'30px'}>Hello</StyledBtn>*/}
                {/*<SuperButton>SuperButton</SuperButton>*/}

                <StyledBtn primary>Hello</StyledBtn>
                <StyledBtn outlined>Hello</StyledBtn>
            </Box>
        </div>
    );
}

export default App;


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

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

