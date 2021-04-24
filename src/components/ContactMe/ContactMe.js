import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  padding: 2rem 0;
  background: ${({ theme }) => theme.background};
`;

const Input = styled.input`
`;

const ContactMe = () => {
  return (
    <Container>
      <Input></Input>
    </Container>
  )
}

export default ContactMe;