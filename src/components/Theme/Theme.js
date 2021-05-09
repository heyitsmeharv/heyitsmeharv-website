import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
`;

const ThemeButton = styled.button`
  border: 1px solid white;
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
    { name: 'blue', colour: '#219ebc' },
    { name: 'red', colour: '#780000' },
  ]
  return (
    <Wrapper>
      {themes.map((theme, i) => {
        return <ThemeButton key={i} onClick={() => toggleTheme(theme.name)} colour={theme.colour} />
      })}
    </Wrapper>
  );
};

export default Theme;
