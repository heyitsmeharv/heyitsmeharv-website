import React from "react";
import styled, { css } from "styled-components";

import useWindowDimensions from '../../hooks/useWindowDimension';

import { StyledNavButton, StyledNavLink } from '../Button/Button';

const Wrapper = styled.div`
  display: flex;
  padding: 2rem;
  position: absolute;
  top: 6px;
  /* left: calc(${props => props.width - `50%`}); */
  width: ${props => props.width};
  @media only screen and (max-width: 375px) {
    padding: 2rem 1rem;
  }
`;

const Navbar = () => {
  const { width } = useWindowDimensions();

  return (
    <Wrapper width={width}>
      <StyledNavButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <StyledNavLink
          isActive={() => window.location.href.indexOf("/") != -1}
          exact to='/'>
          Home
        </StyledNavLink>
      </StyledNavButton>
      <StyledNavButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <StyledNavLink
          isActive={() => window.location.href.indexOf("blog") != -1}
          exact to='/'>
          Blog
        </StyledNavLink>
      </StyledNavButton>
      <StyledNavButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <StyledNavLink
          isActive={() => window.location.href.indexOf("projects") != -1}
          exact to='/projects'>
          Projects
        </StyledNavLink>
      </StyledNavButton>
    </Wrapper>
  );
};

export default Navbar;
