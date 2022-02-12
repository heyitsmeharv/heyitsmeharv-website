import React from 'react';
import styled from 'styled-components';

import Project from '../components/Project/Project';

// images
import HarvsQuizzy from '../resources/images/Harvs-Quizzy.png';
import ColourGen from '../resources/images/Colour-Gen.png';
import Website from '../resources/images/Website.png';

// animations
import SlideInBottom from "../animations/SlideInBottom";


const Container = styled.div`
  display: flex;
  width: 100%;
  max-height: 100%;
  padding: 4rem 0;
  background: ${({ theme }) => theme.background};
  animation: ${SlideInBottom} 0.5s forwards;
  text-align: center;
  @media only screen and (max-width: 585px) {
    flex-direction: column;
  }
`;


export default function Projects() {
  const projects = [
    {
      name: 'Website',
      image: Website,
      link: "https://www.heyitsmeharv.com",
      github: "https://github.com/heyitsmeharv/my-portfolio",
      hide: true
    },
    {
      name: 'Quiz',
      image: HarvsQuizzy,
      link: "https://harvs-quizzy.com/#/quizzy",
      github: "https://github.com/heyitsmeharv/quizzy",
      hide: false
    },
    {
      name: 'Colour Generator',
      image: ColourGen,
      link: "https://colour-generator.netlify.app/",
      github: "https://github.com/heyitsmeharv/colour-generator",
      hide: false
    },
  ];

  return (
    <Container>
      {projects.map((p, i) => {
        return <Project index={i} name={p.name} link={p.link} image={p.image} github={p.github} hide={p.hide} />
      })}
    </Container>
  );
}