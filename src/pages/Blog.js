import React from 'react';
import styled from 'styled-components';

// components
import BlogPost from "../components/BlogPost/BlogPost";

// animations
import SlideInTop from "../animations/SlideInTop";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 4rem;
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
      tags: ['My Own Journey', 'Tech Blog', 'First Of Many 🤞'],
      intro: `For a long time I've wanted to write a blog about technologies I'm interested in. 
      I'm hopeful that I can keep this going for a long time where I can write about my personal journey through learning cool tech, 
      if only to cement my own understanding...`,
      navigate: 'the-start'
    }
  ];

  return (
    <Container>
      {blogPosts.map((p, i) => {
        return <BlogPost index={i} title={p.title} type={p.type} date={p.date} tags={p.tags} intro={p.intro} navigate={p.navigate} />
      })}
    </Container>
  );
}