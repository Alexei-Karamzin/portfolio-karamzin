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
            <StyledBtn as={Link}>Link</StyledBtn>
            <StyledBtn as="a">link</StyledBtn>
            <StyledBtn>Btn</StyledBtn>
            <SuperButton>Super Btn</SuperButton>
        </Box>
    </div>
  );
}

export default App;

const StyledBtn = styled.button`
  border: none;
  background-color: rgba(243, 97, 97, 0.62);
  padding: 10px 20px;
  color: snow;

  &:hover {
    background-color: #2eeccc;
  }

  &:last-child {
    background-color: #009427;
  }
`

const SuperButton = styled(StyledBtn)`
  border-radius: 10px;
`

const Link = styled.a`
  color: aqua;
  font-size: 2rem;
  font-weight: bold;
  background-color: #000000;
  padding: 0;
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
`

const Menu = styled.nav`
    
`