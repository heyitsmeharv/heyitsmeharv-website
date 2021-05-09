import styled from 'styled-components';

export const Input = styled.input`
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

export const TextArea = styled.textarea`
  font-family: sans-serif;
  width: 53%;
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

export const CommentInput = styled.input`
  width: 50%;
  font-size: 18px;
  padding: 10px;
  border: none;
  color: ${({ theme }) => theme.accent};
  border-radius: 3px;
  ::placeholder {
    opacity: 0.5;
  }
`;

export const CommentTextArea = styled.textarea`
  border: none;
  resize: none;
  font-family: sans-serif;
  color: ${({ theme }) => theme.accent};
  transition: transform 0.4s ease;;
  font-size: 18px;
  padding: 10px;
  width: 100%;
  outline: none;
  padding: 0;
  min-height: 60px;
  transform: translateY(-32px);
  line-height: 1;
  ::placeholder {
    opacity: 0.5;
  }
`;