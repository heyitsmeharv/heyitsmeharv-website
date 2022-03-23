import React, { useState } from "react";
import styled from "styled-components";
import { NotificationContainer } from 'react-notifications';

// components
import Introduction from "../components/Introduction/Introduction";
import AboutMe from "../components/AboutMe/AboutMe";
import ProfessionalExperience from "../components/ProfessionalExperience/ProfessionalExperience";
import ContactMe from "../components/ContactMe/ContactMe";
import Skills from "../components/Skills/Skills";
import Comments from "../components/Comments/Comments";
import LikeCounter from "../components/LikeCounter/LikeCounter";

const Margin = styled.div`
  margin: 0 5rem;
`;

const Container = styled.div``;

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <NotificationContainer />
      <Margin>
        <Introduction open={open} setOpen={setOpen} />
      </Margin>
      <ContactMe open={open} />
      <AboutMe />
      <ProfessionalExperience />
      <Skills />
      <Comments />
      <LikeCounter />
    </Container >
  );
};

export default Home;
