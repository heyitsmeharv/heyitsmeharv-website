import ReactGA from 'react-ga';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// components
import BlogPost from "../components/BlogPost/BlogPost";

// icons
import { StyledClose } from '../resources/styles/icons';
import { Search } from '@styled-icons/ionicons-solid/Search'
import JSIcon from '../resources/images/blog/JS.png';

// animations
import SlideInTop from "../animations/SlideInTop";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 4rem;
  background: ${({ theme }) => theme.background};
  animation: ${SlideInTop} 0.5s forwards;
  text-align: center;
  @media only screen and (max-width: 585px) {
    flex-direction: column;
  }
`;

const SearchBarWrapper = styled.div`
  display: flex;
  position: relative;
  padding: 1rem 4rem;
`;

const StyledSearchBar = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 45px;
`;

const StyledSearchIcon = styled(Search)`
  position: absolute;
  align-self: center;
  color: ${({ theme }) => theme.icon};
  width: 2.5rem;
  padding: 0 8px;
`;

const StyledCloseIcon = styled(StyledClose)`
  color: ${({ theme }) => theme.icon};
`;

const StyledCloseButton = styled.button`
  position: absolute;
  right: 40px;
  height: 50px;
  width: 60px;
  outline: none;
  border: none;
  background: none;
  :hover {
    cursor: pointer;
  }
`;

/* COOL TAG COLOURS */
// #64CBF6
// #8B191D
// #23262E

export default function Blog() {
  const [search, setSearch] = useState('')
  const [blogPosts, setBlogPosts] = useState([
    {
      title: 'The Start',
      readingTime: 'less than 1 minute',
      type: 'Retrospective',
      date: '05/04/2023',
      tags: [{ name: 'Misc', background: '#23262E' }],
      intro: `For a long time I've wanted to write a blog about technologies I'm interested in.
            The purpose of this blog is just to document my personal journey learning cool tech,
            if only to cement my own understanding and potentially help people with similar interests...`,
      navigate: 'the-start'
    },
    {
      title: 'JavaScript Arrays',
      readingTime: 'approx 10 minutes',
      type: 'Discovery',
      date: '12/04/2023',
      tags: [{ name: 'JavaScript', background: '#F4BF36', icon: JSIcon }],
      intro: `Do you ever find yourself forgetting what helper methods would be best to manipulate your data? 
        In this post, I would like to go through the different helper functions and the use cases for manipulating your data.
        But before we get into that... 
      `,
      navigate: 'javascript-arrays'
    },
    {
      title: 'JavaScript Objects',
      readingTime: 'approx 5 minutes',
      type: 'Discovery',
      date: '04/05/2023',
      tags: [{ name: 'JavaScript', background: '#F4BF36', icon: JSIcon }],
      intro: `After writing a blog post about arrays, which you can find here. 
      Naturally it feels like the next post needs to be about JavaScript Objects, so in this post I'll 
      aim to try and explain what objects are, why they're needed and how you can use them. Simple enough? Let's get it...
      `,
      navigate: 'javascript-objects'
    }
  ]);

  const defaultArr = [
    {
      title: 'The Start',
      readingTime: 'less than 1 minute',
      type: 'Retrospective',
      date: '05/04/2023',
      tags: [{ name: 'Misc', background: '#23262E' }],
      intro: `For a long time I've wanted to write a blog about technologies I'm interested in.
            The purpose of this blog is just to document my personal journey learning cool tech,
            if only to cement my own understanding and potentially help people with similar interests...`,
      navigate: 'the-start'
    },
    {
      title: 'JavaScript Arrays',
      readingTime: 'approx 10 minutes',
      type: 'Discovery',
      date: '12/04/2023',
      tags: [{ name: 'JavaScript', background: '#F4BF36', icon: JSIcon }],
      intro: `Do you ever find yourself forgetting what helper methods would be best to manipulate your data? 
      In this post, I would like to go through the different helper functions and the use cases for manipulating your data.
      But before we get into that...
    `,
      navigate: 'javascript-arrays'
    },
    {
      title: 'JavaScript Objects',
      readingTime: 'approx 5 minutes',
      type: 'Discovery',
      date: '04/05/2023',
      tags: [{ name: 'JavaScript', background: '#F4BF36', icon: JSIcon }],
      intro: `After writing a blog post about arrays, which you can find here. 
      Naturally it feels like the next post needs to be about JavaScript Objects, so in this post I'll 
      aim to try and explain what objects are, why they're needed and how you can use them. Simple enough? Let's get it...
      `,
      navigate: 'javascript-objects'
    }
  ];

  useEffect(() => {
    if (search !== '') {
      setBlogPosts(blogPosts.filter(x => x.title.toLowerCase().includes(search.toLowerCase()) || x.type.toLowerCase().includes(search.toLowerCase())));
    } else {
      setBlogPosts(defaultArr)
    }
  }, [search]);

  // analytics
  useEffect(() => {
    ReactGA.pageview('/blog');
  }, []);

  return (
    <>
      <SearchBarWrapper>
        <StyledSearchIcon />
        <StyledSearchBar placeholder="Search" type="text" onChange={e => setSearch(e.target.value)} value={search} />
        <StyledCloseButton onClick={() => setSearch('')}> <StyledCloseIcon /></StyledCloseButton>
      </SearchBarWrapper>
      <Container>
        {blogPosts.map((p, i) => {
          return <BlogPost key={i} index={i} title={p.title} readingTime={p.readingTime} type={p.type} date={p.date} tags={p.tags} intro={p.intro} navigate={p.navigate} />
        }).reverse()}
      </Container>
    </>
  );
}