import React from "react";
import styled from "styled-components";


const ThemeButton = styled.button`
  border: 2px solid black;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: ${props => props.colour};
  margin: 0 0.5rem;
  :hover {
    cursor: pointer;
  }
`;

const Theme = ({ theme, toggleTheme }) => {
  const themes = [
    { name: 'light', colour: '#fff' },
    { name: 'dark', colour: '#000' },
    { name: 'summer', colour: '#fddb3a' },
    { name: 'spring', colour: '#ffa36c' },
    { name: 'winter', colour: '#0f3057' },
    { name: 'autum', colour: '#a35638' }
  ]
  return (
    themes.map(theme => {
      return <ThemeButton onClick={() => toggleTheme(theme.name)} colour={theme.colour} />
    })
  );
};

export default Theme;
