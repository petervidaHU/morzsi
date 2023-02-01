import React from "react"
import styled from "styled-components"
import { t } from "../style/globalStyles"
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
          Morzsi Szépül
          <br />
          kutyakozmetika
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
`

const PicDiv = styled.div`
  height: 60vh;
 // width: 100%;
  max-width: 40vw;
  min-width: 40vw;
  // background-image: url(${bord});
  background-repeat: no-repeat;
  background-position: left bottom;
  background-repeat: no-repeat;
  background-position-x: 10vw;
  background-size: 70%;
  padding-left: 5vw;`

const TitleDiv = styled.div`
  width: 100%;
  max-width: 60vw;
  //padding-inline-end: 5vw;
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
