import React, { useState, useRef } from 'react';
import useDynamicHeightField from '../../hooks/useDynamicHeightField';
import styled, { css } from 'styled-components';

import { CommentInput, CommentTextArea } from '../Input/Input';
import { CommentSendButton, CommentCancelButton } from '../Button/Button';

const INITIAL_HEIGHT = 46;

const Container = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  margin: 50px auto;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  padding: 14px;
  transition: min - height 0.4s ease;
  max-height: 90px;
  ${props => props.modified && css`
    max-height: unset;
  `}
  ${props => props.expanded && css`
    .header {
      transform: translateY(10px);
      opacity: 1;
      visibility: visible;
    }
    .actions {
      opacity: 1;
    }
    .comment-field {
      transform: translateY(40px);
    }
  `}
`;

const Header = styled.div`
  transition: opacity 0.4s 0.2s ease;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-40px);
  width: 90%;
`;

const Label = styled.label`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
  margin-top: 50px;
  opacity: 0;
  transition: opacity 0.4s 0.2s ease;
`;

const CommentBox = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);

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

  const onExpand = () => {
    if (!isExpanded) {
      outerHeight.current = containerRef.current.scrollHeight;
      setIsExpanded(true);
    }
  }

  const onChange = (e) => {
    setComment(e.target.value);
  }

  const onClose = () => {
    setName('');
    setComment('');
    setIsExpanded(false);
  };

  useDynamicHeightField(textRef, comment);

  return (
    <Container
      className="comment-box"
      ref={containerRef}
      expanded={isExpanded}
      collapsed={!isExpanded}
      modified={comment && comment.length > 0}
      style={{
        minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT
      }}
    >
      <Header className="header">
        <CommentInput
          value={name}
          onClick={(e) => setName(e.target.value)}
          placeholder="Name"
        />
      </Header>
      <Label htmlFor="comment">What are your thoughts?</Label>
      <CommentTextArea
        ref={textRef}
        onClick={onExpand}
        onFocus={onExpand}
        onChange={onChange}
        className="comment-field"
        placeholder="What are your thoughts?"
        value={comment}
        name="comment"
        id="comment-field"
      />
      <Actions className="actions">
        <CommentCancelButton className="cancel" onClick={() => onClose()}>
          Cancel
        </CommentCancelButton>
        <CommentSendButton
          onClick={() => handleSubmitComment()}
          disabled={comment && comment.length < 1 || name && name.length < 1}
        >
          Submit
        </CommentSendButton>
      </Actions>
    </Container>
  );
};

export default CommentBox;