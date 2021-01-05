import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { NavButton } from "../Button/Button";

const Wrapper = styled.header`
  display: flex;
  width: fit-content;
  height: 50px;
  margin-left: auto;
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
`;

const Nav = () => {
  return (
    <Wrapper>
      <NavButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <StyledNavLink exact to='/'>
          About Me
        </StyledNavLink>
      </NavButton>
      <NavButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <StyledNavLink exact to='/portfolio'>
          Portfolio
        </StyledNavLink>
      </NavButton>
    </Wrapper>
  );
};

export default Nav;
