import React from "react";
import styled from "styled-components";

// components
import Introduction from "../components/Introduction/Introduction";
import AboutMeSection from "../components/AboutMeSection/AboutMeSection";
import ContactMe from "../components/ContactMe/ContactMe";


const Margin = styled.div`
  margin: 0 5rem;
`;

const Home = () => {
  return (
    <>
      <Margin>
        <Introduction />
      </Margin>
      <ContactMe />
      <AboutMeSection />
    </>
  );
};

export default Home;
