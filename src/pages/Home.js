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
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetch('https://heyitsmeharv-backend.herokuapp.com/comments/')
      .then(response => {
        return response.json();
      }).then(comment => {
        setComments(comment);
        console.log(comment);
      })
      .catch(error => {
        console.log(`Unable to get leaderboards: ${error}`)
      })
  }, []);

  const handleSubmitComment = () => {
    const commentObj = {
      comment: comment,
      name: name,
    }
    fetch('https://heyitsmeharv-backend.herokuapp.com/comments/add', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(commentObj)
    })
      .catch(error => {
        console.log(`Unable to submit comment: ${error}`)
      })
    setName('');
    setComment('');
  }

  return (
    <Container>
      <Margin>
        <Introduction open={open} setOpen={setOpen} />
      </Margin>
      <ContactMe open={open} />
      <AboutMe />
      <Skills />
      <Comments
        comments={comments}
        setComment={setComment}
        setName={setName}
        handleSubmitComment={handleSubmitComment}
      />
    </Container>
  );
};

export default Home;
