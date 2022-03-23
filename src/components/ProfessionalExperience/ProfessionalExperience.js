import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Handshake, Cogs, } from '@styled-icons/fa-solid';
import { PeopleCommunity } from '@styled-icons/fluentui-system-filled/PeopleCommunity';
import { ListCheck } from '@styled-icons/bootstrap/ListCheck'

// animations
import SlideInBottom from "../../animations/SlideInBottom";

import Card from "./Card";

const Container = styled.section`
  width: 100%;
  max-height: 100%;
  padding: 4rem 0;
  background: ${({ theme }) => theme.background};
  animation: ${SlideInBottom} 0.5s forwards;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: wrap;
  margin: 30px;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
`;

const Separator = styled.span`
  width: 30px;
  height: 2px;
  display: block;
  margin: 20px auto;
  background-color: ${({ theme }) => theme.separator};
`;

const StyledHandShake = styled(Handshake)`
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.secondary};
  border: 2px solid;
  border-radius: 50%;
  padding: 20px;
  width: 80px;
  height: 80px;
`;
const StyledCogs = styled(Cogs)`
   background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.secondary};
  border: 2px solid;
  border-radius: 50%;
  padding: 20px;
  width: 80px;
  height: 80px;
`;
const StyledPeopleCommunity = styled(PeopleCommunity)`
   background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.secondary};
  border: 2px solid;
  border-radius: 50%;
  padding: 20px;
  width: 80px;
  height: 80px;
`;
const StyledListCheck = styled(ListCheck)`
   background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.secondary};
  border: 2px solid;
  border-radius: 50%;
  padding: 20px;
  width: 80px;
  height: 80px;
`;


const ProfessionalExperience = () => {

  const items = [
    {
      icon: <StyledHandShake />,
      title: 'Client Focus',
      text: `Proactively communicated and collaborated with external and internal stakeholders.
        Assisted with the delivery of customer solutions from conception through to implementation and beyond.
        Elicited intelligence regarding clients’ strategy and future plans and leverage sales opportunities from
        this knowledge.
        Collaborated with the design, creation and delivery of reports on the various products and services
        provided to clients.`
    },
    {
      icon: <StyledCogs />,
      title: 'Problem Solving',
      text: ''
    },
    {
      icon: <StyledPeopleCommunity />,
      title: 'Team Work',
      text: ''
    },
    {
      icon: <StyledListCheck />,
      title: 'Management',
      text: ''
    }
  ];

  return (
    <Container>
      <Title>Experience</Title>
      <Separator />
      <FlexWrapper>
        {items.map((item, i) => {
          return (
            <Card
              key={i}
              title={item.title}
              icon={item.icon}
              text={item.text}
            />
          )
        })}
      </FlexWrapper>
    </Container>
  )
}

export default ProfessionalExperience;