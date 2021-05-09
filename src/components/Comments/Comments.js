import React from 'react';
import styled from 'styled-components';
import hdate from "human-date";

import CommentBox from './CommentBox';
import { Input, TextArea } from '../Input/Input';
import { CommentSendButton } from '../Button/Button';

const Container = styled.section`
  width: 100%;
  max-height: 100%;
  background: ${({ theme }) => theme.primary};
`;

const CommentList = styled.div`
  width: 100%;
  max-height: 100%;
  padding: 4rem 0;
  background: ${({ theme }) => theme.secondary};
`;

const Seporator = styled.span`
  width: 30px;
  height: 2px;
  display: block;
  margin: 20px auto;
  background-color: ${({ theme }) => theme.accent};
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${props => props.direction};
  
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
`;

const Text = styled.p`
  font-size: 18px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  line-height: 25px;
`;

const Comment = styled.div`
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.accent};
  background: ${({ theme }) => theme.primary};
`;

const Message = styled.div`
  font-size: 2rem;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 15px;
  background: ${({ theme }) => theme.commentsBubble};
`;

const Author = styled.p`
  text-align: right;
  font-size: 1.5rem; 
`;

const Timestamp = styled.p`
  text-align: right;
  font-size: 1.5rem; 
`;

const Comments = ({ comments }) => {
  return (
    <Container>
      <Title>Comment</Title>
      <Seporator />
      <Text>Feel free to leave me a comment below 👇</Text>
      {/* <FlexWrapper direction="column">
        <TextArea onClick={(e) => setComment(e.target.value)} type="text" placeholder="Comment" />
        <Input onClick={(e) => setName(e.target.value)} type="text" placeholder="Name" />
      </FlexWrapper>
      <FlexWrapper direction="column">
        <CommentSendButton onClick={() => handleSubmitComment()}>Submit</CommentSendButton>
      </FlexWrapper> */}
      <CommentBox />
      <CommentList>
        {comments ? comments.map((item, i) => {
          const nameCapitalized = item.name.charAt(0).toUpperCase() + item.name.slice(1)
          const timestamp = hdate.prettyPrint(item.createdAt);
          return (
            <Comment>
              <FlexWrapper key={i} direction="column">
                <FlexWrapper direction="row">
                  <Author>{nameCapitalized} - </Author>
                  <Timestamp>{timestamp}</Timestamp>
                </FlexWrapper>
                <Message>{item.comment}</Message>
              </FlexWrapper>
            </Comment>
          )
        }) : ''}
      </CommentList>
    </Container>
  );
}

export default Comments;