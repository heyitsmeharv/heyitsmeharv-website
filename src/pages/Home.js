import React from "react";
import styled from "styled-components";

// components
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import AboutMeSection from "../components/AboutMeSection/AboutMeSection";


const Margin = styled.div`
  margin: 0 5rem;
`;

const Home = () => {
  return (
    <>
      <Header />
      <Margin>
        <Introduction />
      </Margin>
      <AboutMeSection />
    </>
  );
};

export default Home;
