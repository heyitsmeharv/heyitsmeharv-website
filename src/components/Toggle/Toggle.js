import React from "react";
import styled from "styled-components";

import { StyledLightBulbOn, StyledLightBulbOff } from "../../resources/styles/icons";

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  width: 2.5rem;
  height: 3rem;
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <ToggleContainer onClick={toggleTheme}>
      <StyledLightBulbOn lightTheme={isLight} />
      <StyledLightBulbOff lightTheme={isLight} />
    </ToggleContainer>
  );
};

export default Toggle;
