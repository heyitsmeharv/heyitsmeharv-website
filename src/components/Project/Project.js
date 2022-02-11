import React, { useState } from "react";
import styled, { css } from "styled-components";

// icons
import { Github } from "@styled-icons/boxicons-logos/Github";
import { ExternalLink } from "@styled-icons/evaicons-solid/ExternalLink";

const StyledGithub = styled(Github)`
  width: 50%;
  height: 50%;
  margin: 0 10%;
`;

const StyledExternalLink = styled(ExternalLink)`
  width: 50%;
  height: 50%;
  margin: 0 10%;
`;

const Flex = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
`;

const Image = styled.img`
  max-width: 80%;

  ${props => props.hovered && css`
    opacity: 0.4;
  `}
`;

const LinkContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.text};
`;

const Project = ({ name, link, image, github }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Container>
      <Image hovered={hovered} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} src={image} />
      {hovered &&
        <LinkContainer onMouseEnter={() => setHovered(true)}>
          <Flex>
            <StyledAnchor
              target="_blank"
              href={github}
            >
              <StyledGithub onMouseEnter={() => setHovered(true)} />
            </StyledAnchor>
            <StyledAnchor
              target="_blank"
              href={link}
            >
              <StyledExternalLink onMouseEnter={() => setHovered(true)} />
            </StyledAnchor>
          </Flex>
        </LinkContainer>
      }
    </Container>
  );
}

export default Project;