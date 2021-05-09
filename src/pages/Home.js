import React, { useState, useEffect } from "react";
import styled from "styled-components";

// components
import Introduction from "../components/Introduction/Introduction";
import AboutMe from "../components/AboutMe/AboutMe";
import ContactMe from "../components/ContactMe/ContactMe";
import Skills from "../components/Skills/Skills";
import Comments from "../components/Comments/Comments";

const Margin = styled.div`
  margin: 0 5rem;
`;

const Container = styled.div`

`;

const Home = () => {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://heyitsmeharv-backend.herokuapp.com/comments/')
      .then(response => {
        return response.json();
      }).then(comment => {
        setComments(comment);
        console.log(comment);
      })
      .catch(error => {
        console.log(`Unable to get comments: ${error}`)
      })
  }, []);

  return (
    <Container>
      <Margin>
        <Introduction open={open} setOpen={setOpen} />
      </Margin>
      <ContactMe open={open} />
      <AboutMe />
      <Skills />
      <Comments comments={comments} />
    </Container>
  );
};

export default Home;
