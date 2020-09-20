import React from "react";
import styled from "styled-components";

// components
import Nav from "./Nav";

const Wrapper = styled.div`
  // display: flex;
  // align-items: center;
  // width: fit-content;
  // height: 50px;
  // margin-left: auto;
`;

const Header = () => {
  return (
    <Wrapper>
      <Nav />
    </Wrapper>
  );
};

export default Header;
