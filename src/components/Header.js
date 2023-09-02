import React, { useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled from "styled-components"
import useScrollY from "../style/hooks/useScrollY"
import { mediaMorzsi } from "../style/globalStyles"
import { HamburgerMenu } from "./HamburgerMenu"
import { CtaHeader } from "./ctaHeader"
import Logo from "./svg/logo"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { FormattedMessage, useIntl, changeLocale } from 'gatsby-plugin-react-intl';
import PhoneIcon from "./phoneIcon"
import { constData } from "../data/data"

const iconSize = "1.2rem"

export const Header = () => {
  const intl = useIntl();
  const [menuOpen, setMenuOpen] = useState(false)
  const { isTop, isAscending } = useScrollY()

  const handleLanguageChange = (language) => {
    changeLocale(language);
  };

  const menuHandler = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <NavStyled ascending={isAscending} top={isTop}>

      <HamburgerMenu handler={menuHandler} menuOpen={menuOpen} />

      <StandaloneLanguageSwitcher isOpen={menuOpen}>
        <LanguageSwitcher c={handleLanguageChange}/>
      </StandaloneLanguageSwitcher>

      <ContainerDiv>

        <MenuDiv isOpen={menuOpen}>
          <Logo scaling="1" />
          <StandalonePhone isOpen={menuOpen}>
            <span>
              <PhoneIcon size={iconSize} />
              <a href={`tel:${constData.phoneNumber[intl.locale]}`}>
                <FormattedMessage id="phone" />
              </a>
            </span>
          </StandalonePhone>
          <div onClick={menuHandler}>
            <AnchorLink to={`/${intl.locale}/#section-top`}>
              <FormattedMessage id="menu.top" />
            </AnchorLink>
          </div>
          <div onClick={menuHandler}>
            <AnchorLink to={`/${intl.locale}/#section-gallery`}>
              <FormattedMessage id="menu.gallery" />
            </AnchorLink>
          </div>
          <div onClick={menuHandler}>
            <AnchorLink to={`/${intl.locale}/#section-map`}>
              <FormattedMessage id="menu.map" />
            </AnchorLink>
          </div>
          <div onClick={menuHandler}>
            <AnchorLink to={`/${intl.locale}/#section-prices`}>
              <FormattedMessage id="menu.prices" />
            </AnchorLink>
          </div>
        </MenuDiv>

        <SecondaryMenu >
          <CtaHeader />
          <LanguageSwitcher c={handleLanguageChange}/>
        </SecondaryMenu>

      </ContainerDiv>
    </NavStyled >
  )
}

const StandaloneLanguageSwitcher = styled.div`
  display: none;
  ${mediaMorzsi.lessThan("small")`
  ${({ isOpen }) => isOpen &&
      `
    display: inline-block;
    margin-block-end: 1rem;
    `}
  `}
  `

const StandalonePhone = styled.div`
  display: none;
  ${mediaMorzsi.lessThan("small")`
    display: block;
    margin-block-end: 1rem;
  `}
`

const SecondaryMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  ${mediaMorzsi.lessThan("small")`
    display: none;
  `}
`
const NavStyled = styled.nav`
  ${({ top, ascending }) => `
  background-color: ${top ? "brown" : "brown"};
  opacity: ${ascending ? 1 : 0.2};
  `};
  padding: 10px 20px;
  position: sticky;
  top: 0px;
  z-index: 10;
  transition: opacity, 0.5s;
  min-height: 1.8rem;
  &:hover {
    opacity: 1;
  }
`
const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.4s ease;
  font-size: 1rem;
  letter-spacing: .1rem;

  ${mediaMorzsi.lessThan("large")`
    font-size: .86rem;
  `}

  ${mediaMorzsi.between("small", "subLarge")`
    align-itemns: stretch;
    flex-direction: column;
    gap: 1rem;
  `}

    ${mediaMorzsi.lessThan("subMedium")`
       letter-spacing: .05rem;
    `}

    span {
      display: inline-block;
    }

  a {
    text-decoration: none;
    color: white;
    padding-right: 2em;
  }
`
const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  transition: height 1s ease;
  justify-content: space-around;

  svg {
    margin-inline-end: 2rem;
  }

  ${mediaMorzsi.lessThan("small")`
    svg {
      margin-inline-end: 0rem;
      `
  }

  ${mediaMorzsi.lessThan("small")`
  ${({ isOpen }) => !isOpen &&
      `
      height: 0;
      position: absolute;
      top: -1000px;

    `}

  ${({ isOpen }) =>
      isOpen &&
      `
      width: 100%;
      height: 45vh;
      flex-direction: column;
      text-align: center;
      font-size: 2em;
      margin-top: -2rem;

      a {
        padding-right: 0px;
      }
    `}
  `}
`
