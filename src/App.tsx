import React from 'react';
import './App.css';
import styled from "styled-components";
import { StyledBtn } from './components/Button.styled';
import {Link} from "./components/Link.styled";
import {MyAnimation} from "./styles/animations/Animations";
import {theme} from "./styles/Theme.styled";

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
            <StyledBtn as={Link}>Link</StyledBtn>
            <StyledBtn as="a">link</StyledBtn>
            <StyledBtn color='red'>Btn</StyledBtn>
            <SuperButton>Super Btn</SuperButton>

            <StyledBtn outlined>Btn</StyledBtn>
        </Box>
    </div>
  );
}

export default App;

const SuperButton = styled(StyledBtn)`
  border-radius: 10px;

  &:hover {
    animation: ${MyAnimation} 2s ease-in-out;
  }
`



const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  button {
    cursor: pointer;
  }
  
  ${Link} {
    cursor: zoom-in;
  }
  
  @media ${theme.media.tablet} {
    flex-direction: column;
  }
`

const Menu = styled.nav`
    ul {
      list-style: none;
      padding: 0;
      display: flex;
      
      li > a {
        color: gray;
      }
      
      li + li {
        margin-left: 7px;
      }
    }
`