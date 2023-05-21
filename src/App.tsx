import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
        <Box>
            <StyledBtn>hello</StyledBtn>
        </Box>
    </div>
  );
}

export default App;

const StyledBtn = styled.button`
  border: none;
  background-color: rgba(243, 97, 97, 0.62);
  padding: 10px 20px;
  border-radius: 5px;
  color: snow;
`
const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`