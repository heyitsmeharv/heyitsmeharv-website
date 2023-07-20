import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: end;
  @media only screen and (max-width: 375px) {
    padding: 2rem 1rem;
  }
`;

const LanguageButton = styled.button`
  border: none;
  font-size: 3.5rem;
  margin: 0 1rem;
  background: none;
  :hover {
    cursor: pointer;
  }
`;

const Language = ({ language, toggleLanguage }) => {
  const languages = [
    { name: 'english', value: 'EN', flag: '🇬🇧' },
    { name: 'castiano', value: 'ES', flag: '🇪🇸' },
  ]
  return (
    <Wrapper>
      {languages.map(language => {
        return <LanguageButton key={language.name} onClick={() => toggleLanguage(language.value)}>{language.flag}</LanguageButton>
      })}
    </Wrapper>
  );
};

export default Language;
