import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const NavButton = styled(motion.button)`
  font-size: 2em;
  width: 8em;
  background: none;
  outline: none !important;
  border: none;
  :hover {
    cursor: pointer;
  }

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      pointer-events: none;
    `}
`;

export const StyledButton = styled(motion.button)`
  background: none;
  outline: none !important;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

export const SeeMoreButton = styled(motion.button)`
  width: 20rem;
  height: 4rem;
  margin-top: 3rem;
  text-align: center;
  line-height: 36px;
  display: inline-block;
  line-height: 44px;
  color: white;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  border: 2px solid;
  border-color: ${({ theme }) => theme.background};
  border-radius: 2px;
  background: none;
  outline: none;
  color: ${({ theme }) => theme.seeMoreButtonText};
  :hover {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
  }
  :focus {
    text-decoration: underline;
  }
`;

export const ContactMeButton = styled(motion.button)`
  width: 20rem;
  height: 4rem;
  margin-left: 9rem;
  margin-top: 3rem;
  margin-right: 3rem;
  text-align: center;
  line-height: 36px;
  display: inline-block;
  line-height: 44px;
  color: white;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.contactMeButtonBackground};
  color: ${({ theme }) => theme.contactMeButtonText};
  :focus {
    text-decoration: underline;
  }
`;
