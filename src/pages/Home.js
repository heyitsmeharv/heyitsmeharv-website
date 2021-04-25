import React, { useState, useEffect } from "react";
import styled from "styled-components";

// components
import Introduction from "../components/Introduction/Introduction";
import AboutMeSection from "../components/AboutMeSection/AboutMeSection";
import ContactMe from "../components/ContactMe/ContactMe";

const Margin = styled.div`
  margin: 0 5rem;
`;

const Container = styled.div`

`;

const Comments = styled.div`

`

const Home = () => {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://heyitsmeharv-backend.herokuapp.com/comment/')
      .then(response => {
        // return response.json();
        console.log(response);
        setComments(JSON.stringify(response));
        console.log(response);
      })
      .catch(error => {
        console.log(`Unable to get leaderboards: ${error}`)
      })
  }, []);

  return (
    <Container>
      <Margin>
        <Introduction open={open} setOpen={setOpen} />
      </Margin>
      <ContactMe open={open} />
      <AboutMeSection />
      <Comments>
        {/* {comments ? comments.map(item => {
          return <div>{item}</div>
        }) : ''} */}
      </Comments>
    </Container>
  );
};

export default Home;
