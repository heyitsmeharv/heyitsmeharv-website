import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// components
import BlogPost from "../components/BlogPost/BlogPost";

// icons
import { StyledClose } from '../resources/styles/icons';
import { Search } from '@styled-icons/ionicons-solid/Search'

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

export default function Blog() {
  const [search, setSearch] = useState('')
  const [blogPosts, setBlogPosts] = useState([
    {
      title: 'The Start',
      type: 'Retrospective',
      date: '05/04/2023',
      tags: [{ name: 'My Own Journey', background: '#4367B1' }, { name: 'Tech Blog', background: '#F4BF36' }, { name: 'First Of Many 🤞', background: '#D53745' }],
      intro: `For a long time I've wanted to write a blog about technologies I'm interested in.
            The purpose of this blog is just to document my personal journey learning cool tech,
            if only to cement my own understanding and potentially help people with similar interests...`,
      navigate: 'the-start'
    },
    {
      title: 'JavaScript Arrays',
      type: 'Discovery',
      date: '12/04/2023',
      tags: [{ name: 'JavaScript', background: '#F4BF36' }],
      intro: `Do you ever find yourself forgetting what function would be best to manipulate your data?
      In this post, I would like to go through different use cases for manipulating your data.
      First let's tackle what an array is exactly...`,
      navigate: 'javascript-arrays'
    }
  ]);

  const defaultArr = [
    {
      title: 'The Start',
      type: 'Retrospective',
      date: '05/04/2023',
      tags: [{ name: 'My Own Journey', background: '#4367B1' }, { name: 'Tech Blog', background: '#F4BF36' }, { name: 'First Of Many 🤞', background: '#D53745' }],
      intro: ` For a long time I've wanted to write a blog about technologies I'm interested in.
            The purpose of this blog is just to document my personal journey learning cool tech,
            if only to cement my own understanding and potentially help people with similar interests...`,
      navigate: 'the-start'
    },
    {
      title: 'JavaScript Arrays',
      type: 'Discovery',
      date: '12/04/2023',
      tags: [{ name: 'JavaScript', background: '#F4BF36' }],
      intro: `Do you ever find yourself forgetting what function would be best to manipulate your data?
      In this post, I would like to go through different use cases for manipulating your data.
      First let's tackle what an array is exactly...`,
      navigate: 'javascript-arrays'
    }
  ];

  useEffect(() => {
    if (search !== '') {
      setBlogPosts(blogPosts.filter(x => x.title.toLowerCase().includes(search.toLowerCase()) || x.type.toLowerCase().includes(search.toLowerCase())));
    } else {
      setBlogPosts(defaultArr)
    }
  }, [search]);

  return (
    <>
      <SearchBarWrapper>
        <StyledSearchIcon />
        <StyledSearchBar placeholder="Search" type="text" onChange={e => setSearch(e.target.value)} value={search} />
        <StyledCloseButton onClick={() => setSearch('')}> <StyledCloseIcon /></StyledCloseButton>
      </SearchBarWrapper>
      <Container>
        {blogPosts.map((p, i) => {
          return <BlogPost index={i} title={p.title} type={p.type} date={p.date} tags={p.tags} intro={p.intro} navigate={p.navigate} />
        })}
      </Container>
    </>
  );
}