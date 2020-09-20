import React from "react";

// components
import { SocialMediaButton } from "../SocialMediaButtons/SocialMediaButtons";

// icons
import {
  StyledFacebookCircle,
  StyledLinkedinSquare,
  StyledTwitter,
  StyledGithub,
} from "../../resources/styles/icons";

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

const SocialMedia = () => {
  return (
    <>
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
    </>
  );
};

export default SocialMedia;
