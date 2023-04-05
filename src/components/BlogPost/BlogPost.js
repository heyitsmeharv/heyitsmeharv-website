import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';

const Container = styled.div`
  background: ${({ theme }) => theme.secondary};
  position: relative;
  width: 30%;
  ${props => props.hovered && css`
    border: .5px solid ${({ theme }) => theme.text};
  `}

 @media only screen and (min-width: 500px) and (max-width: 1000px) {
    width: 100%;
    margin: 20px 0;
  } 
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`

const TopBarText = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 20px;
  color: ${({ theme }) => theme.text};
`;

const BottomBarText = styled.div`
  position: relative;
  width: max-content;
  bottom: 0;
  margin: 30px auto;
`;

const StyledTopBarText = styled.span`
  font-size: 1.5rem;
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

const StyledTags = styled.div`
  border: 1px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  font-weight: bold;
  padding: 6px 0px;
  margin: 0 10px;
  width: 120px;

  ${props => props.background && css`
    background: ${props => props.background}
  `}
`;

const StyledIntro = styled.div`
  margin: 2rem;
  font-size: 2rem;
`;

const StyledBorder = styled.div`
  padding: 6px 0px;
  :hover {
    background: ${({ theme }) => theme.primary};
  }
`;


const BlogPost = ({ title, type, date, tags, intro, navigate }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Container hovered={hovered} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <TopBarText>
        <StyledTopBarText>{type}</StyledTopBarText >
        <StyledTopBarText>{date}</StyledTopBarText >
      </TopBarText>
      <StyledTitle>
        {title}
      </StyledTitle>
      <Flex>
        {tags?.map((x, i) => <StyledTags index={i} background={x.background}>{x.name}</StyledTags>)}
      </Flex>
      <StyledIntro>
        {intro}
      </StyledIntro>
      <BottomBarText>
        <StyledBorder>
          <StyledNavButton>
            <StyledNavLink
              exact to={`blog/${navigate}`}>
              Read more
            </StyledNavLink>
          </StyledNavButton>
        </StyledBorder>
      </BottomBarText>
    </Container>
  );
}

export default BlogPost;