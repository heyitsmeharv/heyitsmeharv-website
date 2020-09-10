import React from "react";
import styled from "styled-components";

// components
import Nav from "./Nav";
// import SocialMediaBar from "./SocialMediaBar";

const Container = styled.div`
  width: 98%;
  margin-bottom: 2%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Nav />
        {/* <SocialMediaBar /> */}
      </Wrapper>
    </Container>
  );
};

export default Header;
