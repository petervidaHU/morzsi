import React from 'react'
import styled from "styled-components"
import { mediaMorzsi } from "../style/globalStyles"

export const HamburgerMenu = ({ handler, menuOpen }) => {
  return (
    <HamburgerDiv onClick={handler} isOpen={menuOpen}>
      <div></div>
      <div></div>
      <div></div>
    </HamburgerDiv>
  )
}

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
    background: white;
    margin: 4px 0;
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
