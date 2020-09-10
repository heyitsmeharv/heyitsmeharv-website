import React from "react";
import styled, { css } from "styled-components";
import { size } from "../../resources/styles/breakpoints";

// components
import { SocialMediaButton } from "../SocialMediaButtons/SocialMediaButtons";

// icons
import {
  StyledFacebookCircle,
  StyledLinkedinSquare,
  StyledTwitter,
  StyledGithub,
} from "../../resources/styles/icons";

// animations
import SlideInBottom from "../../animations/SlideInBottom";

// images
import ProfileImg from "../../resources/images/profile-portrait.jpg";

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  animation: ${SlideInBottom} 0.5s forwards;
  @media screen and (min-width: ${size.mobileSS}) {
    width: 80%;
  }
  @media screen and (min-width: ${size.mobileS}) {
    width: 80%;
  }
  @media screen and (min-width: ${size.mobileM}) {
    width: 72%;
  }
  @media screen and (min-width: ${size.mobileL}) {
    width: 60%;
  }
  @media screen and (min-width: ${size.tablet}) {
    width: 52%;
  }
  @media screen and (min-width: ${size.laptop}) {
    width: 40%;
  }
  @media screen and (min-width: ${size.laptopL}) {
    width: 40%;
  }
  @media screen and (min-width: ${size.desktop}) {
    width: 32%;
  }
  @media screen and (min-width: ${size.desktopL}) {
    width: 20%;
  }
`;

const socialMediaButtons = [
  {
    icon: <StyledFacebookCircle />,
    link: "https://www.facebook.com/adam.harvey.73/",
    animation: "Facebook",
  },
  {
    icon: <StyledLinkedinSquare />,
    link: "https://www.linkedin.com/in/heyitsmeharv/",
    animation: "LinkedIn",
  },
  {
    icon: <StyledTwitter />,
    link: "https://twitter.com/heyitsmeharv",
    animation: "Twitter",
  },
  {
    icon: <StyledGithub />,
    link: "https://github.com/heyitsmeharv",
    animation: "Github",
  },
];

const Profile = () => {
  return (
    <ProfileWrapper>
      {socialMediaButtons.map((button, key) => {
        return (
          <SocialMediaButton
            animation={button.animation}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            key={key}>
            <a target='_blank' href={button.link}>
              {button.icon}
            </a>
          </SocialMediaButton>
        );
      })}
      <ProfileImage src={ProfileImg} />
    </ProfileWrapper>
  );
};

export default Profile;
