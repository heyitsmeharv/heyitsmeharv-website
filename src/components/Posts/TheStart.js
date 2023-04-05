import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

// icons
import { ChevronBackCircle } from '@styled-icons/ionicons-solid/ChevronBackCircle';

// components
import { StyledNavButton, StyledNavLink } from '../Button/Button';

const Wrapper = styled.div`
  padding: 1rem 4rem;
`;

const Container = styled.div`
  padding: 4rem;
  background: ${({ theme }) => theme.background};
`;

const Text = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
`;

const StyledBackIcon = styled(ChevronBackCircle)`
  color: ${({ theme }) => theme.secondary};
  width: 4rem;
`;

const Spacer = styled.br``

const TheStart = () => {
  return (
    <>
      <Wrapper>
        <StyledNavButton>
          <StyledNavLink
            exact to={`/blog`}>   
            <StyledBackIcon />
          </StyledNavLink>
        </StyledNavButton>
        <Container>
          <Text>
            For a long time I've wanted to write a blog about technologies I'm interested in.
            The purpose of this blog is just to document my personal journey learning cool tech,
            if only to cement my own understanding and potentially help people with similar interests.
            <Spacer />
            <Spacer />
            I'm hoping by the end of the year I will have blogged about the following:
            <Spacer />
            <Spacer />
            <li>Making cool software</li>
            <li>Exploring using new technologies</li>
            <li>Create Tutorials</li>
            <li>Following conferences and events</li>
          </Text>
        </Container>
      </Wrapper>
    </>
  );
}

export default TheStart;