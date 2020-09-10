import React from "react";
import styled from "styled-components";

// components
import Header from "../components/Header/Header";
import Profile from "../components/Profile/Profile";
// import SocialMediaButtons from "../components/SocialMediaButtons/SocialMediaButtons";

const Container = styled.div``;

const Bio = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8%;
  font-size: 18px;
`;

const Home = () => {
  return (
    <Container>
      <Header />
      <Profile />
      <Bio>Hello, My name is Adam</Bio>
    </Container>
  );
};

export default Home;
