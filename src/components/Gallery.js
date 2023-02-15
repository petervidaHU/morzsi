import React from "react"
import { baseElements } from "../style/baseElements"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { mediaMorzsi, t } from "../style/globalStyles"

const Section = baseElements.MySection

export const Gallery = () => {
  
  return (
    <Section id="section-gallery">
      <GalleryWrapper>
      <StaticImage src="../images/kutyakozmetika_debrecen_1.webp" alt="kutyakozmetika_debrecen_1" />
      <StaticImage src="../images/kutyakozmetika_debrecen_2.webp" alt="kutyakozmetika_debrecen_2" />
      <StaticImage src="../images/kutyakozmetika_debrecen_3.webp" alt="kutyakozmetika_debrecen_3" />
      <StaticImage src="../images/kutyakozmetika_debrecen_4.webp" alt="kutyakozmetika_debrecen_4" />
      <StaticImage src="../images/kutyakozmetika_debrecen_5.webp" alt="kutyakozmetika_debrecen_5" />
      <StaticImage src="../images/kutyakozmetika_debrecen_6.webp" alt="kutyakozmetika_debrecen_6" />
      </GalleryWrapper>
    </Section>
  )
}

const GalleryWrapper = styled.div`
margin: 0 auto;
max-width: 80%;
display: grid;

${mediaMorzsi.lessThan("medium")`
   max-width: 100%;
   width: 100%;
  `}
`