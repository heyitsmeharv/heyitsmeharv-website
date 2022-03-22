import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { StyledButton } from '../Button/Button';

import Card from '../Card/Card';

// icons
import {
  AWSSVG,
  GraphqlSVG,
  ReactjsSVG,
  ExpressSVG,
  JavascriptSVG,
  NodejsSVG,
  HtmlSVG,
  CssSVG,
  MongoDBSVG,
  MySQLSVG,
  TwilioSVG,
  WebpackSVG,
  DockerSVG,
  GithubSVG,
  GitSVG,
  SassSVG,
  StyledComponentsSVG,
  HerokuSVG,
  CPlusPlusSVG,
  CSharpSVG,
  ElectronJSSVG,
  RaspberryPiSVG,

} from '../../resources/styles/icons';

import awscp2020 from '../../resources/images/AWS-CloudPractitioner-2020.png';

const Container = styled.section`
  width: 100%;
  max-height: 100%;
  padding: 4rem 0;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.secondary};
`;

const Separator = styled.span`
  width: 30px;
  height: 2px;
  display: block;
  margin: 20px auto;
  background-color: ${({ theme }) => theme.separator};
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
  font-weight: 600;
`;

const Image = styled.img`
  :hover {
    cursor: pointer;
  }
`;

const Skills = () => {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState('all');
  const skillList = [
    {
      icon: <HtmlSVG />,
      title: "HTML",
      tag: ["all", "webDev"]
    },
    {
      icon: <CssSVG />,
      title: "CSS",
      tag: ["all", "webDev"]
    },
    {
      icon: <JavascriptSVG />,
      title: "Javascript",
      tag: ["all", "language", "webDev"]
    },
    {
      icon: <SassSVG />,
      title: "Sass",
      tag: ["all", "webDev"]
    },
    {
      icon: <StyledComponentsSVG />,
      title: "Styled Components",
      tag: ["all", "webDev"]
    },
    {
      icon: <ReactjsSVG />,
      title: "React",
      tag: ["all", "webDev"]
    },
    {
      icon: <NodejsSVG />,
      title: "Node",
      tag: ["all", "language"]
    },
    {
      icon: <ElectronJSSVG />,
      title: "Electron",
      tag: ["all", "language", "webDev"]
    },
    {
      icon: <ExpressSVG />,
      title: "Express",
      tag: ["all", "webDev"]
    },
    {
      icon: <CPlusPlusSVG />,
      title: "C++",
      tag: ["all", "language"]
    },
    {
      icon: <CSharpSVG />,
      title: "C#",
      tag: ["all", "language"]
    },
    {
      icon: <AWSSVG />,
      title: "AWS",
      tag: ["all", "misc"]
    },
    {
      icon: <HerokuSVG />,
      title: "Heroku",
      tag: ["all", "misc"]
    },
    {
      icon: <TwilioSVG />,
      title: "Twilio",
      tag: ["all", "misc"]
    },
    {
      icon: <MongoDBSVG />,
      title: "Mongo DB",
      tag: ["all", "database"]
    },
    {
      icon: <RaspberryPiSVG />,
      title: "Raspberry Pi",
      tag: ["all", "misc"]
    },
    {
      icon: <GraphqlSVG />,
      title: "GraphQL",
      tag: ["all", "database"]
    },
    {
      icon: <WebpackSVG />,
      title: "Webpack",
      tag: ["all", "webDev", "misc"]
    },
    {
      icon: <DockerSVG />,
      title: "Docker",
      tag: ["all", "misc"]
    },
    {
      icon: <MySQLSVG />,
      title: "MySQL",
      tag: ["all", "database"]
    },
    {
      icon: <GitSVG />,
      title: "Git",
      tag: ["all", "misc"]
    },
    {
      icon: <GithubSVG />,
      title: "GitHub",
      tag: ["all", "misc"]
    },
  ];

  const buttons = [
    {
      label: 'All',
      onClick: () => setFilter('all')
    },
    {
      label: 'Programming languages',
      onClick: () => setFilter('language'),
    },
    {
      label: 'Web/App Development',
      onClick: () => setFilter('webDev'),
    },
    {
      label: 'Databases',
      onClick: () => setFilter('database'),
    },
    {
      label: 'Misc',
      onClick: () => setFilter('misc'),
    },
  ];

  useEffect(() => {
    setList(skillList.filter(skill => skill.tag.includes(filter)));
  }, [filter])

  return (
    <Container>
      <Title>Skills</Title>
      <Separator />
      <Text>Here's a list of technologies I've used: </Text>
      <FlexWrapper>
        {buttons.map((button, i) => {
          return (
            <div key={i} style={{ margin: "10px" }}>
              <StyledButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={button.onClick}
              >
                {button.label}
              </StyledButton>
            </div>
          )
        })}
      </FlexWrapper>
      <FlexWrapper>
        {list.map((skill, i) => {
          return (
            <Card
              key={i}
              icon={skill.icon}
              title={skill.title}
            />
          )
        })}
      </FlexWrapper>
      <FlexWrapper>
        <a target="_blank" href="https://www.credly.com/badges/445bcb6b-31b2-4c23-8ca4-adf17e871e42">
          <Image width="100px" height="100px" src={awscp2020} />
        </a>
      </FlexWrapper>
    </Container>
  );
}

export default Skills;