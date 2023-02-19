import React from "react"
import styled from "styled-components"
import { mediaMorzsi, t } from "../style/globalStyles"
import bord from "../images/pet-grooming-debrecen-hero-1.webp"
import { baseElements } from "../style/baseElements"
import { StaticImage } from "gatsby-plugin-image"

const heroBackgroundColor = t.color.light3
const titleFamily = t.fontFamily.heading1
const titleColor = t.color.dark1
const borderFancy = t.borderFancy
const Section = baseElements.MySection

export const Hero = () => {
  return (
    <>
      <HeroSection wide borderDown>
        <PicDiv>
          <StaticImage
            src="../images/pet-grooming-debrecen-hero-1.webp"
            alt="picture of a groomed dog"
            placeholder="blurred"
            height="600"
          />
        </PicDiv>
        <TitleDiv>
          <div>Morzsi Szépül</div>
          <div>kutyakozmetika</div>
        </TitleDiv>
      </HeroSection>
    </>
  )
}

const HeroSection = styled(Section)`
  align-items: center;
  background-color: ${heroBackgroundColor};
  display: flex;
  justify-content: space-between;
  line-height: 0;
  min-height: 60vh;
  max-height: 60vh;
  overflow: hidden;

  ${mediaMorzsi.lessThan("large")`
   min-height: 50vh;
   max-height: 50vh;
   `}

  ${mediaMorzsi.lessThan("subLarge")`
   min-height: 30vh;
   max-height: 30vh;
   `}

  ${mediaMorzsi.lessThan("medium")`
   min-height: 25vw;
   max-height: 25vw;
  `}

  ${mediaMorzsi.lessThan("subMedium")`
   min-height: 28vw;
   max-height: 28vw;
  `}

  ${mediaMorzsi.lessThan("small")`
    display: flex;
    justify-content: flex-end;
    flex-direction: column-reverse;
    max-height: 100%;
    height: 65vh;
    padding-block: 1rem;
  `}
`

const PicDiv = styled.div`
  height: 60vh;
  // max-width: 40vw;
  min-width: 40vw;

  ${mediaMorzsi.lessThan("large")`
   min-width: 45vw;
   `}

  ${mediaMorzsi.lessThan("subLarge")`
   min-width: 30vw;
   height: 45vh;
  `}

  ${mediaMorzsi.lessThan("subMedium")`
   height: 45vw;
  `}

  background-repeat: no-repeat;
  background-position: left bottom;
  background-repeat: no-repeat;
  background-position-x: 10vw;
  background-size: 70%;
  padding-left: 5vw;
`

const TitleDiv = styled.div`
  width: 100%;
  max-width: 60vw;
  padding-block-end: 5vw;
  font-family: ${titleFamily};
  font-size: 5rem;
  color: ${titleColor};
  line-height: 1.1;
  min-height: 10vh;
  /* display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly; */

  ${mediaMorzsi.lessThan("large")`
   font-size: 3.5rem;
   padding-inline-end: 1rem;
  `}

  ${mediaMorzsi.lessThan("subLarge")`
   font-size: 3rem;
   padding-inline-end: 2rem;
  `}

  ${mediaMorzsi.lessThan("medium")`
   font-size: 2.5rem;
   padding-inline-end: 2rem;
  `}

  ${mediaMorzsi.lessThan("subMedium")`
   font-size: 6vw;
   padding-inline-end: 2rem;
  `}

  ${mediaMorzsi.lessThan("small")`
    font-size: 3rem;
    min-width: 90vw;
    padding: 0;
    text-align: center;
  `}
`
