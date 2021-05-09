import styled from 'styled-components';

export const ContactMeInput = styled.input`
  width: 25%;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border: 2px solid ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.accent};
  border-radius: 3px;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const ContactMeTextArea = styled.textarea`
  font-family: sans-serif;
  width: 50%;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border: 2px solid ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.accent};
  border-radius: 3px;
  ::placeholder {
    opacity: 0.5;
  }
`;