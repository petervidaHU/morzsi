import React from "react"
import PhoneIcon from "./phoneIcon"
import MarkerIcon from "./markerIcon"
import styled from "styled-components"
import { mediaMorzsi } from "../style/globalStyles"
import { contact } from "../data/data"


const iconSize = ".8rem"

export const CtaHeader = ({isOpen}) => {
  return (
    <CtaDiv isOpen={isOpen}>
      <span>
        <PhoneIcon size={iconSize}/>
        <a href={`tel:${contact.phoneNumber}`}>{contact.phoneReadable}</a>
      </span>
      <span>
        <MarkerIcon size={iconSize}/>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://maps.google.com/?q=morzsi szepul kutyakozmetika debrecen"
        >
          {contact.address}
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
