import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    color?: string
    outlined?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  background-color: ${props => props.color || 'green'};
  padding: 10px 20px;
  color: snow;

  &:hover {
    background-color: #2eeccc;
  }

  &:last-child {
    background-color: #009427;
  }
  
  ${props => props.outlined && css<StyledBtnPropsType>`
    border: 2px solid black;
  `}  
`

