import * as React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled from "styled-components"
import useScrollY from "../style/hooks/useScrollY"
import { t, mediaMorzsi } from "../style/globalStyles"
import { useState } from "react"

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isTop, isAscending } = useScrollY()

  const menuHandler = () => {
    setMenuOpen(!menuOpen)
    console.log(menuOpen)
  }

  return (
    <NavStyled ascending={isAscending} top={isTop}>
      <ContainerDiv>
        <MenuDiv isOpen={menuOpen}>
          LOGO
          <div onClick={menuHandler}>
            <AnchorLink to="/#section-top">Top</AnchorLink>
          </div>
          <div onClick={menuHandler}>
            <AnchorLink to="/#section-gallery">Képgaléria</AnchorLink>
          </div>
          <div onClick={menuHandler}>
            <AnchorLink to="/#section-map">Térkép</AnchorLink>
          </div>
          <div onClick={menuHandler}>
            <AnchorLink to="/#section-prices">árak</AnchorLink>
          </div>
        </MenuDiv>
        <HamburgerDiv onClick={menuHandler} isOpen={menuOpen}>
          <div></div>
          <div></div>
          <div></div>
        </HamburgerDiv>
      </ContainerDiv>
    </NavStyled>
  )
}
{
  /* <div>+3630 4281370 | Debrecen, Feketerét u 23</div> */
}

const NavStyled = styled.nav`
  ${({ top, ascending }) => `
  background-color: ${top ? "brown" : "brown"};
  opacity: ${ascending ? 1 : 0.3};
  `};
  padding: 20px 30px;
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
  justify-content: space-between;
  transition: all 0.4s ease;

  a {
    text-decoration: none;
    color: white;
    padding-right: 2em;
  }
`
const MenuDiv = styled.div`
  display: flex;
  transition: height 1s ease;
  justify-content: space-around;
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

const HamburgerDiv = styled.div`
  position: fixed;
  right: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  padding-inline-end: 1rem;

  ${mediaMorzsi.greaterThan("small")`
    display: none;
  `}

  div {
    width: 30px;
    height: 3px;
    background: black;
    margin: 6px 0;
    transition: all 0.4s ease;
  }
  ${({ isOpen }) =>
    isOpen &&
    `
    div:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    div:nth-child(2) {
      opacity: 0;
    }

    div:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  `}
`
