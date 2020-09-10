import React from "react";
import styled from "styled-components";

import { StyledSun } from "../../resources/styles/icons";
import { StyledMoon } from "../../resources/styles/icons";

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <ToggleContainer onClick={toggleTheme}>
      <StyledSun lightTheme={isLight} />
      <StyledMoon lightTheme={isLight} />
    </ToggleContainer>
  );
};

export default Toggle;
