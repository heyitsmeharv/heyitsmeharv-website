import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
`;

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
    { name: 'blue', colour: '#0f3057' },
    { name: 'red', colour: '#ffa36c' },
  ]
  return (
    <Wrapper>
      {themes.map(theme => {
        return <ThemeButton onClick={() => toggleTheme(theme.name)} colour={theme.colour} />
      })}
    </Wrapper>
  );
};

export default Theme;
