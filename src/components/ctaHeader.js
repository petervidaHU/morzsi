import React from "react"
import PhoneIcon from "./phoneIcon"
import MarkerIcon from "./markerIcon"
import styled from "styled-components"
import { mediaMorzsi } from "../style/globalStyles"

export const CtaHeader = ({isOpen}) => {
  return (
    <PhoneDiv isOpen={isOpen}>
      <div>
        <PhoneIcon size=".8rem"/>
        <a href="tel:+36304281370">+3630-428-1370</a>
      </div>
      <div>
        <MarkerIcon size=".8rem"/>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://maps.google.com/?q=morzsi szepul kutyakozmetika debrecen"
        >
          Debrecen, Feketerét u 23.
        </a>
      </div>
    </PhoneDiv>
  )
}

const PhoneDiv = styled.div`
  max-height: 4rem;

  div:not(:last-of-type) {
      margin-block-end: .5rem;
  }

  a {
    margin-inline-start: .5rem;
  }

  ${mediaMorzsi.lessThan("small")`
  ${({ isOpen }) =>
    isOpen &&
    `
    display: none;
    `}
    `}
`
