import React from 'react';
import styled from 'styled-components';
import hdate from "human-date";

import { Input, TextArea } from '../Input/Input';
import { CommentSendButton } from '../Button/Button';

const Container = styled.section`
  width: 100%;
  max-height: 100%;
  padding: 4rem 0;
  background: ${({ theme }) => theme.secondary};
  margin-bottom: 20px;
`;

const CommentList = styled.div`
  width: 100%;
  max-height: 100%;
  padding: 4rem 0;
  background: ${({ theme }) => theme.primary};
`;

const Seporator = styled.span`
  width: 30px;
  height: 2px;
  display: block;
  margin: auto;
  background-color: ${({ theme }) => theme.accent};
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
`;

const Comment = styled.div`
  font-size: 2rem;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 15px;
  background: ${({ theme }) => theme.commentsBubble};
`;

const CommentAuthor = styled.p`
  text-align: right;
  font-size: 1.5rem; 
`;

const Comments = ({ comments, setComment, setName, handleSubmitComment }) => {
  return (
    <Container>
      <Title>Leave Me A Comment Below</Title>
      <Seporator />
      <FlexWrapper>
        <TextArea onClick={(e) => setComment(e.target.value)} type="text" placeholder="Comment" />
        <Input onClick={(e) => setName(e.target.value)} type="text" placeholder="Name" />
      </FlexWrapper>
      <FlexWrapper>
        <CommentSendButton onClick={() => handleSubmitComment()}>Submit</CommentSendButton>
      </FlexWrapper>
      <CommentList>
        {comments ? comments.map((item, i) => {
          const nameCapitalized = item.name.charAt(0).toUpperCase() + item.name.slice(1)
          const timestamp = hdate.prettyPrint(item.createdAt);
          return (
            <FlexWrapper key={i}>
              <Comment>{item.comment}</Comment>
              <CommentAuthor>{nameCapitalized} - {timestamp}</CommentAuthor>
            </FlexWrapper>
          )
        }) : ''}
      </CommentList>
    </Container>
  );
}

export default Comments;