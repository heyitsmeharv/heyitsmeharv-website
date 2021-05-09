import React, { useState, useEffect } from "react";
import styled from "styled-components";
import hdate from "human-date";

// components
import Introduction from "../components/Introduction/Introduction";
import AboutMeSection from "../components/AboutMe/AboutMe";
import ContactMe from "../components/ContactMe/ContactMe";

const Margin = styled.div`
  margin: 0 5rem;
`;

const Container = styled.div`

`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 20%;
`;

const Comments = styled.div`
  padding: 2rem 4rem;
  background: ${({ theme }) => theme.commentsBackground};
`

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: ${({ theme }) => theme.commentsInput};
  border: none;
  border-radius: 3px;
  color: white;
  width: fit-content;;
`;

const Textarea = styled.textarea`
  font-family: sans-serif;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: ${({ theme }) => theme.commentsInput};
  border: none;
  border-radius: 3px;
  color: white;
  resize: none;
  width: 400px;
  height: 100px;
`;

const Comment = styled.div`
  font-size: 2rem;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 15px;
  background: ${({ theme }) => theme.commentsBubble};
`

const CommentAuthor = styled.p`
  text-align: right;
  font-size: 1.5rem; 
`

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
    console.log(commentObj);
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
      <AboutMeSection />
      <Comments>
        <Title>Leave Me A Comment</Title>
        <Flex>
          <Textarea onClick={(e) => setComment(e.target.value)} type="text" placeholder="Comment" />
          <Input onClick={(e) => setName(e.target.value)} type="text" placeholder="Name" />
        </Flex>
        <button onClick={() => handleSubmitComment()}>submit</button>
        {comments ? comments.map(item => {
          const nameCapitalized = item.name.charAt(0).toUpperCase() + item.name.slice(1)
          const timestamp = hdate.prettyPrint(item.createdAt);
          return (
            <Wrapper>
              <Comment>{item.comment}</Comment>
              <CommentAuthor>{nameCapitalized} - {timestamp}</CommentAuthor>
            </Wrapper>
          )
        }) : ''}
      </Comments>
    </Container>
  );
};

export default Home;
