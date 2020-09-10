import styled from "styled-components";

import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Sun } from "@styled-icons/bootstrap/Sun";
import { Moon } from "@styled-icons/boxicons-solid/Moon";

export const StyledFacebookCircle = styled(FacebookCircle)`
  width: 40px;
  padding: 5px;
  color: white;
  background: #4267b2;
  border-radius: 50%;
`;

export const StyledLinkedinSquare = styled(LinkedinSquare)`
  width: 40px;
  padding: 5px;
  color: white;
  background: #0e76a8;
  border-radius: 50%;
`;

export const StyledTwitter = styled(Twitter)`
  width: 40px;
  padding: 5px;
  color: white;
  background: #1da1f2;
  border-radius: 50%;
`;

export const StyledGithub = styled(Github)`
  width: 40px;
  padding: 5px;
  color: white;
  background: black;
  border-radius: 50%;
`;

export const StyledSun = styled(Sun)`
  height: auto;
  width: 2.5rem;
  color: yellow;
  transition: all 0.2s linear;
  transform: ${({ lightTheme }) =>
    lightTheme ? "translateY(0)" : "translateY(100px)"};
`;

export const StyledMoon = styled(Moon)`
  height: auto;
  width: 2.5rem;
  color: white;
  transition: all 0.2s linear;
  transform: ${({ lightTheme }) =>
    lightTheme ? "translateY(-100px)" : "translateY(0)"};
`;
