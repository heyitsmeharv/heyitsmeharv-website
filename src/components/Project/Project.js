import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

// icons
import { Github } from "@styled-icons/boxicons-logos/Github";
import { ExternalLink } from "@styled-icons/evaicons-solid/ExternalLink";

const createBox = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

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
  /* height: 100%; */
  position: relative;
  text-align: center;
 
  @media only screen and (min-width: 585px) {
    animation: ${createBox} .25s;
    transition: 0.25s;
    -webkit-transition: 0.25s;
  }
`;

const Image = styled.img`
  width: 100%;
  ${props => props.hovered && css`
    opacity: 0.8;
  `}
`;

const LinkContainer = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -100%);
`;

const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.text};
`;

const Project = ({ name, link, image, github, hide }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Container hovered={hovered} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
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
            {!hide &&
              <StyledAnchor
                target="_blank"
                href={link}
              >
                <StyledExternalLink onMouseEnter={() => setHovered(true)} />
              </StyledAnchor>
            }
          </Flex>
        </LinkContainer>
      }
    </Container>
  );
}

export default Project;