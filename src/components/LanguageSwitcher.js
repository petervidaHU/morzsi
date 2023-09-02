import React from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';
import { StaticImage } from 'gatsby-plugin-image';

export const LanguageSwitcher = ({c}) => {
  const { locale } = useIntl();

  const flagContainer = locale === 'en'
    ? (
      <div onClick={() => c('hu')}>
        <StaticImage
          src="../assets/flaghun.png"
          alt="picture of the english flag for language selection"
          placeholder="blurred"
          height="30"
        />
      </div>
    )
    : (
      <div onClick={() => c('en')}>
        <StaticImage
          src="../assets/flageng.png"
          alt="picture of the hungarian flag for language selection"
          placeholder="blurred"
          height="30"
        />
      </div>
    )

    return (
    <>
      {flagContainer}
    </>
  );
};
