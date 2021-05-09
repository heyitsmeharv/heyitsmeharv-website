import React from 'react';
import styled from 'styled-components';

import Card from '../Card/Card';

// icons
import {
  StyledJavascript,
  StyledHtml5,
  StyledCss3,
  StyledSass,
  StyledStyledComponents,
  StyledReactLogo,
  StyledNodejs,
  StyledMongodb,
  StyledAWS,
  StyledTwilio,
  StyledGraphql,
  StyledMysql,
} from "../../resources/styles/icons";

const Container = styled.section`
  width: 100%;
  max-height: 100%;
  padding: 4rem 0;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.secondary};
`;

const Seporator = styled.span`
  width: 30px;
  height: 2px;
  display: block;
  margin: 20px auto;
  background-color: ${({ theme }) => theme.accent};
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: wrap;
  margin-top: 30px;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
`;

const Text = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 30px;
  line-height: 25px;
`;

const Skills = () => {
  const skillList = [
    {
      icon: <StyledJavascript />,
      title: "Javascript",
    },
    {
      icon: <StyledHtml5 />,
      title: "HTML",
    },
    {
      icon: <StyledCss3 />,
      title: "CSS",
    },
    {
      icon: <StyledSass />,
      title: "Sass",
    },
    {
      icon: <StyledStyledComponents />,
      title: "Styled Comonents",
    },
    {
      icon: <StyledReactLogo />,
      title: "React",
    },
    {
      icon: <StyledNodejs />,
      title: "Node",
    },
    {
      icon: <StyledAWS />,
      title: "AWS",
    },
    {
      icon: <StyledTwilio />,
      title: "Twilio",
    },
    {
      icon: <StyledMongodb />,
      title: "Mongo DB",
    },
    {
      icon: <StyledGraphql />,
      title: "GraphQL",
    },
    {
      icon: <StyledMysql />,
      title: "SQL",
    },
  ];

  return (
    <Container>
      <Title>Skills</Title>
      <Seporator />
      <Text>Here's a list of technologies I've used: </Text>
      <FlexWrapper>
        {skillList.map((skill, i) => {
          return (
            <Card
              key={i}
              icon={skill.icon}
              title={skill.title}
            />
          )
        })}
      </FlexWrapper>
    </Container>
  );
}

export default Skills;