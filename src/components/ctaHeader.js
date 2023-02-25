import React from "react"
import PhoneIcon from "./phoneIcon"
import MarkerIcon from "./markerIcon"
import styled from "styled-components"
import { mediaMorzsi } from "../style/globalStyles"

const iconSize = ".8rem"

export const CtaHeader = ({isOpen}) => {
  return (
    <CtaDiv isOpen={isOpen}>
      <span>
        <PhoneIcon size={iconSize}/>
        <a href="tel:+36304281370">+3630-428-1370</a>
      </span>
      <span>
        <MarkerIcon size={iconSize}/>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://maps.google.com/?q=morzsi szepul kutyakozmetika debrecen"
        >
          Debrecen, Feketerét u 23.
        </a>
      </span>
    </CtaDiv>
  )
}

const CtaDiv = styled.div`
  max-height: 4rem;
  font-size: inherit;

  span:not(:last-of-type) {
      margin-block-end: .5rem;
  }

  a {
    margin-inline-start: .5rem;
  }

  ${mediaMorzsi.between("small", "subMedium")`
    display: flex;
    justify-content: space-between;
  `}

${mediaMorzsi.lessThan("small")`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`}

  ${mediaMorzsi.lessThan("small")`
  ${({ isOpen }) =>
    isOpen &&
    `
    display: none;
    `}
    `}
`
