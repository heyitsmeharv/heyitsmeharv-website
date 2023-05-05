import React, { useState } from "react";
import styled, { css } from "styled-components";

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';

// icons
import { Journal } from '@styled-icons/bootstrap/Journal'

const Container = styled.div`
  background: ${({ theme }) => theme.secondary};
  position: relative;
  width: 30%;
  margin: 25px 0;
  ${props => props.hovered && css`
    border: .5px solid ${({ theme }) => theme.text};
  `}

 @media only screen and (min-width: 500px) and (max-width: 1000px) {
    width: 100%;
    margin: 20px 0;
  } 

  @media only screen and (max-width: 500px) {
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

const ReadingTime = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
`;

// const StyledTags = styled.div`
//   border: 1px solid ${({ theme }) => theme.text};
//   color: ${props => (props.textColor > 125) ? '#000' : '#FFF'};
//   font-size: 1.2rem;
//   font-weight: bold;
//   padding: 6px 0px;
//   margin: 0 10px;
//   width: 120px;

//   ${props => props.background && css`
//     background: ${props => props.background}
//   `}
// `;

const StyledTagImage = styled.img`
  max-width: 36px;
  max-height: 36px;
`;

const StyledIntro = styled.div`
  margin: 2rem;
  font-size: 2rem;
`;

const StyledBorder = styled.div`
  padding: 6px 0px;
  border: 2px solid ${({ theme }) => theme.primary};
  :hover {
    background: ${({ theme }) => theme.primary};
    transition: background .5s;
  }
`;

const StyledJournal = styled(Journal)`
  width: 36px;
  height: 36px;
  fill: ${({ theme }) => theme.text};
`;


const BlogPost = ({ title, readingTime, type, date, tags, intro, navigate }) => {
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
      <ReadingTime>
        {readingTime}
      </ReadingTime>
      <Flex>
        {tags?.map((x, i) => x.name === 'Misc' ? <StyledJournal /> : <StyledTagImage key={i} src={x.icon} />)}
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
    </Container >
  );
}

export default BlogPost;