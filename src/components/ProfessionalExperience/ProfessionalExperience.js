import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Handshake, Cogs, } from '@styled-icons/fa-solid';
import { PeopleCommunity } from '@styled-icons/fluentui-system-filled/PeopleCommunity';
import { ListCheck } from '@styled-icons/bootstrap/ListCheck'

// animations
import SlideInBottom from "../../animations/SlideInBottom";

const Container = styled.section`
  width: 100%;
  max-height: 100%;
  padding: 4rem 0;
  background: ${({ theme }) => theme.background};
  animation: ${SlideInBottom} 0.5s forwards;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
`;

const Text = styled.p`
  font-size: 2rem;
  letter-spacing: 1.4px;
  margin: 1rem 4rem;
  margin-top: 30px;
  text-align: center;
  font-weight: 600;
`;

const Separator = styled.span`
  width: 30px;
  height: 2px;
  display: block;
  margin: 20px auto;
  background-color: ${({ theme }) => theme.separator};
`;

const StyledHandShake = styled(Handshake)`

`;
const StyledCogs = styled(Cogs)`

`;
const StyledPeopleCommunity = styled(PeopleCommunity)`

`;
const StyledListCheck = styled(ListCheck)`

`;


const ProfessionalExperience = () => {

  const items = [
    {
      icon: StyledHandShake,
      title: 'Client Focus',
      text: ''
    },
    {
      icon: StyledCogs,
      title: 'Problem Solving',
      text: ''
    },
    {
      icon: StyledPeopleCommunity,
      title: 'Team Work',
      text: ''
    },
    {
      icon: StyledListCheck,
      title: 'Management',
      text: ''
    }
  ];

  return (
    <Container>
      <Title>Experience</Title>
      <Separator />
      {items.map((item, i) => {
        return (
          <div>{item.title}</div>
        )
      })}
    </Container>
  )
}

export default ProfessionalExperience;