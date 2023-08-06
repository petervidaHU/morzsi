import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled from "styled-components"
import useScrollY from "../style/hooks/useScrollY"
import { mediaMorzsi } from "../style/globalStyles"
import { useState } from "react"
import { HamburgerMenu } from "./HamburgerMenu"
import { CtaHeader } from "./ctaHeader"
import Logo from "./svg/logo"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { FormattedMessage, useIntl } from 'gatsby-plugin-react-intl';

export const Header = () => {
  const intl = useIntl();
  const [menuOpen, setMenuOpen] = useState(false)
  const { isTop, isAscending } = useScrollY()

  const menuHandler = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <NavStyled ascending={isAscending} top={isTop}>
      <ContainerDiv>
        <MenuDiv isOpen={menuOpen}>
          <Logo scaling="1"/>
          <div onClick={menuHandler}>
            <AnchorLink to={`/${intl.locale}/#section-top`}>
              <FormattedMessage id="menu.top"/>
              </AnchorLink>
          </div>
          <div onClick={menuHandler}>
            <AnchorLink to={`/${intl.locale}/#section-gallery`}>
              <FormattedMessage id="menu.gallery"/>
              </AnchorLink>
          </div>
          <div onClick={menuHandler}>
            <AnchorLink to={`/${intl.locale}/#section-map`}>
              <FormattedMessage id="menu.map"/>
              </AnchorLink>
          </div>
          <div onClick={menuHandler}>
            <AnchorLink to={`/${intl.locale}/#section-prices`}>
              <FormattedMessage id="menu.prices"/>
              </AnchorLink>
          </div>
        </MenuDiv>
        <CtaHeader isOpen={menuOpen}/>
        <HamburgerMenu handler={menuHandler} menuOpen={menuOpen} />
      </ContainerDiv>
      <LanguageSwitcher />
    </NavStyled>
  )
}

const NavStyled = styled.nav`
  ${({ top, ascending }) => `
  background-color: ${top ? "brown" : "brown"};
  opacity: ${ascending ? 1 : 0.3};
  `};
  padding: 10px 20px;
  position: sticky;
  top: 0px;
  z-index: 10;
  transition: opacity, 0.5s;
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

  ${mediaMorzsi.lessThan("subLarge")`
    font-size: .86rem;
  `}

  ${mediaMorzsi.between("small", "subMedium")`
    align-itemns: stretch;
    flex-direction: column;
    gap: 1rem;
  `}

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
  ${({ isOpen }) =>
    !isOpen &&
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

      a {
        padding-right: 0px;
      }
    `}
  `}
`
