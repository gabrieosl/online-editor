import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';

import { MdLanguage } from 'react-icons/md';
import { Container, SelectButton, DropdownList } from './styles';

interface Language {
  flag: string;
  code: string;
  language: string;
}

const AVAILABLE_LANGUAGES: Language[] = [
  {
    flag: 'us',
    code: 'en',
    language: 'English',
  },
  {
    flag: 'br',
    code: 'pt',
    language: 'Português',
  },
  {
    flag: 'fr',
    code: 'fr',
    language: 'Français',
  },
];

const LanguageButton: React.FC = () => {
  const { i18n } = useTranslation('common');
  const [active, setActive] = useState(false);

  const updateLanguage = useCallback(
    (language: Language) => {
      setActive(false);
      i18n.changeLanguage(language.code);
    },
    [i18n],
  );

  return (
    <Container>
      <SelectButton
        variant="text"
        color="primary"
        height="28px"
        onClick={() => setActive(!active)}
        isActive={active}
      >
        <MdLanguage />
        <h5>
          &nbsp;
          {i18n.language}
        </h5>
      </SelectButton>
      {active && (
        <DropdownList>
          {AVAILABLE_LANGUAGES.map(language => (
            <li>
              <button type="button" onClick={() => updateLanguage(language)}>
                <span>{language.language}</span>
                <ReactCountryFlag countryCode={language.flag} svg />
              </button>
            </li>
          ))}
        </DropdownList>
      )}
    </Container>
  );
};

export default LanguageButton;
