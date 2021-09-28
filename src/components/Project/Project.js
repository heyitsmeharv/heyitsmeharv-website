import React from "react";
import styled from "styled-components";

// icons
import { StyledGithub, StyledExternalLinkOutline } from "../../resources/styles/icons";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  max-width: 80%;
`;

const Project = ({ name, link, image, github }) => {
  return (
    <Container>
      <Image src={image} />
    </Container>
  );
}

export default Project;