import React from "react";
import styled from "styled-components";

// icons
import { StyledGithub, StyledExternalLinkOutline } from "../../resources/styles/icons";

const Container = styled.div`
  background: ${({ theme }) => theme.text};
  width: 50%;
  /* border: 2px solid darkgray; */
  margin: 2rem;
  padding: 1rem 2rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

const MarginWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  letter-spacing: 1.4px;
`;

const Image = styled.img`
  width: 60%;
`;

const Text = styled.p`
  color: black;
  align-self: flex-start;
  font-size: 1.8rem;
  padding: 0 2rem;
`;

const Link = styled.div`
  margin-left: auto;
`;

const Icon = styled.div`
  /* margin-left: auto; */
`;

const Button = styled.button`
  outline: none;
  border: none;
  background: none;
`;


const Project = ({ name, link, image, text, github, icons }) => {
  return (
    <Container>
      <HeaderWrapper>
        <Title>{name}</Title>
        <MarginWrapper>
          {icons && icons.map(icon => {
            return (
              <Icon>{icon}</Icon>
            )
          })}
        </MarginWrapper>
      </HeaderWrapper>
      <ContentWrapper>
        <Image src={image} />
        <Text>{text}</Text>
      </ContentWrapper>
      <Button><StyledGithub /></Button>
      <Button><StyledExternalLinkOutline /></Button>
      {/* <Link>{link}</Link> */}
    </Container>
  );
}

export default Project;