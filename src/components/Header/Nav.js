import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

const NavButton = styled(motion.button)`
  font-size: 2em;
  width: 8em;
  margin-right: 10px;
  background: none;
  outline: none !important;
  border: none;
  :hover {
    cursor: pointer;
  }

  ${props => props.disabled && css`
    cursor: not-allowed;
    pointer-events: none; 
  `}

`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

const Nav = () => {
  return (
    <Wrapper>
      {/* <NavButton disabled whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <StyledNavLink exact to='/blog'>
          Blog
        </StyledNavLink>
      </NavButton> */}
      <NavButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <StyledNavLink exact to='/cv'>
          Curriculum Vitae
        </StyledNavLink>
      </NavButton>
    </Wrapper>
  );
};

export default Nav;
