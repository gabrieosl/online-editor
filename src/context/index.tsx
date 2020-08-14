import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import detector from 'i18next-browser-languagedetector';

import ThemeProvider from './theme';
import common_pt from '../translations/pt/common.json';
import common_en from '../translations/en/common.json';
import common_fr from '../translations/fr/common.json';

i18next.use(detector).init({
  interpolation: { escapeValue: false },
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: {
      common: common_en,
    },
    pt: {
      common: common_pt,
    },
    fr: {
      common: common_fr,
    },
  },
});

const ContextIndex: React.FC = ({ children }) => {
  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider>{children}</ThemeProvider>
    </I18nextProvider>
  );
};

export default ContextIndex;
