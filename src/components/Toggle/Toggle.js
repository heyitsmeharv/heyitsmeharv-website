import React from "react";
import styled from "styled-components";

import { StyledSun } from "../../resources/styles/icons";
import { StyledMoon } from "../../resources/styles/icons";

import { StyledLightBulbOn, StyledLightBulbOff } from "../../resources/styles/icons";

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  width: 2.5rem;
  height: 3rem;
`;

// const ToggleButton = styled.span`
//   content: '';
//   position: absolute;
//   width: 25px;
//   height: 25px;
//   border-radius: 50%;
//   background: ${(props) => (props.lightTheme ? "yellow" : "#fff")};
//   box-shadow: 0 0 2px 0 rgba(10,10,10,0.29);
//   transition: all 0.5s linear;
//   transform: ${({ lightTheme }) =>
//     lightTheme ? "translateY(0)" : "translateX(30px)"};
// }
// `;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <ToggleContainer onClick={toggleTheme}>
      {/* <ToggleButton lightTheme={isLight} /> */}
      <StyledLightBulbOn lightTheme={isLight} />
      <StyledLightBulbOff lightTheme={isLight} />
    </ToggleContainer>
  );
};

export default Toggle;
