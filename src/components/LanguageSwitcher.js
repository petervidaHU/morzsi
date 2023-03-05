import React from 'react';
import { useIntl, changeLocale } from 'gatsby-plugin-react-intl';

export const LanguageSwitcher = () => {
  const intl = useIntl();

  const handleLanguageChange = (language) => {
    console.log('intel:',intl)
    changeLocale(language);
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange('en')}>
        English
      </button>
      <button onClick={() => handleLanguageChange('hu')}>
        hungarian
      </button>
    </div>
  );
};
