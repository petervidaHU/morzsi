import * as React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import styled from "styled-components"
import useScrollY from "../style/hooks/useScrollY"

export const Header = () => {
  const { isTop, isAscending } = useScrollY()
  return (
    <NavStyled ascending={isAscending} top={isTop}>
      <ContainerDiv>
        <div>
        LOGO 
        <AnchorLink to="/#section-top">Top</AnchorLink>
        <AnchorLink to="/#section-gallery">Képgaléria</AnchorLink>
        <AnchorLink to="/#section-map">Térkép</AnchorLink>
        <AnchorLink to="/#section-prices">árak</AnchorLink>
        <AnchorLink to="/#section-teeth">Fogtisztítás </AnchorLink>
        </div>
        <div>
        +3630 4281370 | Debrecen, Feketerét u 23
        </div>
      </ContainerDiv>
    </NavStyled>
  )
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
  transition: opacity, .5s;
  &:hover {
    opacity: 1;
  }
`
const ContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: white;
    padding-right: 2em;
  }
 
`
