import React from "react";
import styled from "styled-components";

// components
import Header from "../components/Header/Header";
import Project from "../components/Project/Project";

// resources
import HarvsQuizzy from "../resources/images/harvs-quizzy.png";
import ColourGenerator from "../resources/images/colour-generator.png";

// icons
import { StyledJavascript, StyledMongodb } from "../resources/styles/icons";

const Wrapper = styled.div`
  display: flex;
  background: white;
`;

const Projects = () => {
  const projects = [
    {
      name: "Colour Generator",
      image: ColourGenerator,
      link: "https://modest-dijkstra-330be3.netlify.app/",
      github: "https://github.com/heyitsmeharv/colour-generator",
      text: `For this project I took inspiration from https://colorhunt.co/ and https://coolors.co.`,
      icons: [<StyledJavascript />],
    },
    {
      name: "Quizzy",
      image: HarvsQuizzy,
      link: "https://harvs-quizzy.com",
      github: "https://github.com/heyitsmeharv/quizzy",
      text: `Since the COVID-19 lockdown I've read that companies are trying to spice up their daily stand-ups with games
      so I wanted to create a quiz.`,
      icons: [<StyledJavascript />, <StyledMongodb />],
    },
  ];

  return (
    <>
      <Header />
      <Wrapper>
        {projects.map((project) => {
          return (
            <Project
              name={project.name}
              link={project.link}
              image={project.image}
              github={project.github}
              text={project.text}
              icons={project.icons}
            />
          );
        })}
      </Wrapper>
    </>
  );
};

export default Projects;
