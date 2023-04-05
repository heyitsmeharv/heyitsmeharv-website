import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';


const createBox = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const Flex = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
   
  @media only screen and (min-width: 585px) {
    width: 50%;
    animation: ${createBox} .25s;
    transition: 0.25s;
    -webkit-transition: 0.25s;
  }
`;

const Image = styled.img`
  width: 100%;
  ${props => props.hovered && css`
    opacity: 0.8;
  `}
`;

const LinkContainer = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -100%);
`;

const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.text};
`;

const StyledName = styled.span`
  font-size: 4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const BlogPost = ({ title, type, date, tags, navigate }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Container hovered={hovered} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {title}
      {type}
      {date}
      {tags}
      <StyledNavButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <StyledNavLink
          exact to={`blog/${navigate}`}>
          read more
        </StyledNavLink>
      </StyledNavButton>
    </Container>
  );
}

export default BlogPost;