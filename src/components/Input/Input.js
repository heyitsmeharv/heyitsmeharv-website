import styled, { css } from 'styled-components';

// contactMeButtonText: '#fff',
// contactMeButtonBackground: '#000',
// contactMeBackground: '#000',

// contactMeInputBorder: '#fff',
// contactMeInputColor: '#000',

// cvButtonText: '#fff',
// cvButtonBackground: '#000',
// cvBackground: '#000',

// sendEmailButtonText: '#fff',
// sendEmailButtonBackground: '#000',
// sendEmailBackground: '#000',

// commentsBoxBackground: '#fff',
// commentsInputBorder: '#E2E2E2',
// commentsInputColor: '#E2E2E2',

// commentsBackground: '#fff',
// commentsText: '#fff',

export const ContactMeInput = styled.input`
  width: 25%;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border: 2px solid ${({ theme }) => theme.contactMeInputBorder};
  color: ${({ theme }) => theme.contactMeInputColor};
  border-radius: 3px;
  ::placeholder {
    opacity: 0.5;
  }
  ${props => props.error && css`
    border: 2px solid red;
  `}
`;

export const ContactMeTextArea = styled.textarea`
  font-family: sans-serif;
  width: 53%;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border: 2px solid ${({ theme }) => theme.contactMeInputBorder};
  color: ${({ theme }) => theme.contactMeInputColor};
  border-radius: 3px;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const CommentInput = styled.input`
  width: 50%;
  font-size: 18px;
  padding: 10px;
  border: none;
  color: ${({ theme }) => theme.commentsInputColor};
  border-radius: 3px;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const CommentTextArea = styled.textarea`
  border: none;
  resize: none;
  font-family: sans-serif;
  color: ${({ theme }) => theme.commentsInputColor};
  transition: transform 0.4s ease;;
  font-size: 18px;
  padding: 10px;
  width: 100%;
  outline: none;
  min-height: 60px;
  transform: translateY(-32px);
  line-height: 1;
  ::placeholder {
    opacity: 0.5;
  }
`;