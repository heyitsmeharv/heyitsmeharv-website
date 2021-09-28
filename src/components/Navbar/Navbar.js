import React from "react";
import styled, { css } from "styled-components";

import { StyledNavButton, StyledNavLink } from '../Button/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  margin-top: -60px;
  @media only screen and (max-width: 585px) {
    padding: 2rem 1rem;
    margin-top: 0px;
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <StyledNavButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <StyledNavLink
          exact to='/'>
          Home
        </StyledNavLink>
      </StyledNavButton>
      <StyledNavButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        isActive={window.location.href.indexOf("blog") !== -1}
      >
        <StyledNavLink
          exact to='/blog'>
          Blog
        </StyledNavLink>
      </StyledNavButton>
      <StyledNavButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        isActive={window.location.href.indexOf("projects") !== -1}
      >
        <StyledNavLink
          exact to='/projects'>
          Projects
        </StyledNavLink>
      </StyledNavButton>
    </Wrapper>
  );
};

export default Navbar;
