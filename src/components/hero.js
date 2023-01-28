import React from "react"
import styled from "styled-components"
import { t } from "../style/globalStyles"
import bord from "../images/pet-grooming-debrecen-hero-1.webp"

const heroBackgroundColor = t.color.light3
const titleFamily = t.fontFamily.heading1
const titleColor = t.color.dark1

export const Hero = () => {
  return (
    <>
      <HeroSection>
        <PicDiv />
        <TitleDiv>
          Morzsi Szépül
          <br />
          kutyakozmetika
        </TitleDiv>
      </HeroSection>
    </>
  )
}

const HeroSection = styled.section`
  align-items: center;
  background-color: ${heroBackgroundColor};
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10vh), 0 100%);
  display: flex;
  justify-content: space-between;
  line-height: 0;
  min-height: 60vh;
  padding: 0;
  overflow: hidden;
  width: 100%;
`

const PicDiv = styled.div`
  height: 60vh;
  width: 100%;
  max-width: 50vw;
  background-image: url(${bord});
  background-repeat: no-repeat;
  background-position: left bottom;
  background-repeat: no-repeat;
  background-position-x: 10vw;
  background-size: 70%;
`

const TitleDiv = styled.div`
  padding-inline-end: 5vw;
  padding-block-end: 5vw;
  font-family: ${titleFamily};
  font-size: 5rem;
  color: ${titleColor};
  line-height: 1.1;
  display: flex;
  align-items: center;
  min-height: 10vh;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
`
