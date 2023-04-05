import React from 'react';
import styled from 'styled-components';

// components
import BlogPost from "../components/BlogPost/BlogPost";

// animations
import SlideInTop from "../animations/SlideInTop";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-height: 100%;
  padding: 4rem 0;
  background: ${({ theme }) => theme.background};
  animation: ${SlideInTop} 0.5s forwards;
  text-align: center;
  @media only screen and (max-width: 585px) {
    flex-direction: column;
  }
`;

export default function Blog() {
  const blogPosts = [
    {
      title: 'The Start',
      type: 'Retrospective',
      date: '05/04/2023',
      tags: [],
      navigate: 'the-start'
    }
  ];

  return (
    <Container>
      {blogPosts.map((p, i) => {
        return <BlogPost index={i} title={p.title} type={p.type} date={p.date} tags={p.tags} navigate={p.navigate} />
      })}
    </Container>
  );
}