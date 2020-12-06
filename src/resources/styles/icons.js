import styled from "styled-components";

import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Lightbulb } from "@styled-icons/fa-solid/Lightbulb";

import { ExternalLinkOutline } from "@styled-icons/evaicons-outline/ExternalLinkOutline"

import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Sass } from "@styled-icons/boxicons-logos/Sass";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Aws } from "@styled-icons/fa-brands/Aws";
import { Graphql } from "@styled-icons/simple-icons/Graphql";
import { Mysql } from "@styled-icons/simple-icons/Mysql"
import { StyledComponents } from '@styled-icons/simple-icons/StyledComponents'



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
  color: grey;
  /* background: black; */
  border-radius: 50%;
`;

export const StyledLightBulbOn = styled(Lightbulb)`
  position: absolute;
  height: 24px;
  width: 24px;
  color: ${({ lightTheme }) => (lightTheme ? "white" : "yellow")};
  transition: all 0.5s linear;
  transform: ${({ lightTheme }) =>
    lightTheme ? "translateY(3px)" : "translateY(100px)"};
`;

export const StyledLightBulbOff = styled(Lightbulb)`
  position: absolute;
  height: 24px;
  width: 24px;
  color: ${({ lightTheme }) => (lightTheme ? "white" : "yellow")};
  transition: all 0.5s linear;
  transform: ${({ lightTheme }) =>
    lightTheme ? "translateY(-100px)" : "translateY(3px)"};
`;

export const StyledJavascript = styled(Javascript)`
  width: 40px;
  padding: 5px;
  color: grey;
  border-radius: 50%;
`;

export const StyledMongodb= styled(Mongodb)`
  width: 40px;
  padding: 5px;
  color: grey;
  border-radius: 50%;
`;


export const StyledExternalLinkOutline = styled(ExternalLinkOutline)`
  width: 40px;
  padding: 5px;
  color: grey;
  border-radius: 50%;
`;
