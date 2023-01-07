import * as React from "react"
import styled from "styled-components"
import useScrollY from "../style/hooks/useScrollY"

export function Header() {
  const { isTop, isDown } = useScrollY()
  return (
    <NavStyled isDown={isDown} isTop={isTop}>
      LOGO | Kezdőlap | Képgaléria | Térkép | árak | Fogtisztítás | +3630 428
      1370 | Debrecen, Feketerét u 23
    </NavStyled>
  )
}

const NavStyled = styled.nav`
  ${({ isTop, isDown }) => `
  background-color: ${isTop ? "red" : "blue"};
  opacity: ${isDown ? 1 : 0.3};
  color: cyan;
  padding: 10px 20px;
  position: sticky;
  top: 0px;
  z-index: 10;
  `};
`
