import React, { useState } from "react";
import styled from "styled-components";
import { NotificationContainer } from 'react-notifications';

// components
import Introduction from "../components/Introduction/Introduction";
import AboutMe from "../components/AboutMe/AboutMe";
import ContactMe from "../components/ContactMe/ContactMe";
import Skills from "../components/Skills/Skills";
import Comments from "../components/Comments/Comments";

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
      <Skills />
      <Comments />
    </Container >
  );
};

export default Home;
