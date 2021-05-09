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

export const DownloadCVButton = styled(motion.button)`
  width: 20rem;
  height: 5rem;
  margin-top: 3rem;
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
  height: 5rem;
  margin-top: 3rem;
  margin-right: 3rem;
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

export const ContactMeSendButton = styled(motion.button)`
  height: 50px;
  width: 40%;
  min-width: 180px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.accent};
  border-radius: 2px;
  color: ${({ theme }) => theme.primary};
  display: inline-block;
  text-align: center;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 44px;
  margin: 30px 14px;
  border: 2px solid ${({ theme }) => theme.accent};
  :hover {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.accent};
  }
`;

export const CommentSendButton = styled(motion.button)`
  height: 50px;
  width: 40%;
  min-width: 180px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.accent};
  border-radius: 2px;
  color: ${({ theme }) => theme.primary};
  display: inline-block;
  text-align: center;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 44px;
  margin: 30px 14px;
  border: 2px solid ${({ theme }) => theme.accent};
  :hover {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.accent};
  }
`;
