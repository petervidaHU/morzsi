import React, { useState } from "react"
import styled from "styled-components"
import { mediaMorzsi, t } from "../style/globalStyles"
import { baseElements } from "../style/baseElements"
import { StaticImage } from "gatsby-plugin-image"
import Logo from "./svg/logo"
import { FormattedMessage } from 'gatsby-plugin-react-intl';

const titleFamily = t.fontFamily.heading1
const titleColor = t.color.dark1
const { MySection } = baseElements

export const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(3);
  
  window.addEventListener("resize", () => {
    const newScreenWidth = window.innerWidth;
    if (newScreenWidth < 960 && newScreenWidth !== 2) {
      setScreenWidth(2);
    }
    if (newScreenWidth > 960 && newScreenWidth !== 3) {
      setScreenWidth(3);
    }
  
  });
  
  return (
    <HeroSection wide>

      <PicDiv>
        <StaticImage
          src="../images/pet-grooming-debrecen-hero-1.webp"
          alt="picture of a groomed dog"
          placeholder="blurred"
          height="600"
        />
      </PicDiv>

      <TitleDiv>
        <Logo scaling={screenWidth} />
        <div>
          <div>
            Morzsi Szépül
          </div>
          <div>
            <FormattedMessage id="main.title" />
          </div>
        </div>
      </TitleDiv>

    </HeroSection>
  )
}

const HeroSection = styled(MySection)`
  margin-top: -2rem;
  align-items: center;
  background-color: white;
  display: flex;
  justify-content: space-between;
  line-height: 0;
  overflow: hidden;

  ${mediaMorzsi.lessThan("subLarge")`
    flex-direction: column;
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
  ${mediaMorzsi.lessThan("subLarge")`
    max-width: 50vw;
    margin-bottom: 2rem;
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
  font-family: ${titleFamily};
  font-size: 5rem;
  color: ${titleColor};
  line-height: 1.1;
  min-height: 10vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start; 

  & div {
    margin-left: 3rem;
  }

  ${mediaMorzsi.lessThan("subHuge")`
   font-size: 4rem;
   padding-inline-end: 1rem;
  `}

  ${mediaMorzsi.lessThan("large")`
   font-size: 3.5rem;
   padding-inline-end: 1rem;
  `}

  ${mediaMorzsi.lessThan("subLarge")`
   font-size: 3rem;
   padding-inline-end: 0rem;
   justify-content: center;

   & div {
    margin-left: 2rem;
   }
  `}

  ${mediaMorzsi.lessThan("medium")`
   font-size: 2.5rem;
   padding-inline-end: 0rem;
  `}

  ${mediaMorzsi.lessThan("subMedium")`
   font-size: 6vw;
   padding-inline-end: 0rem;
  `}

  ${mediaMorzsi.lessThan("small")`
    font-size: 3rem;
    min-width: 90vw;
    padding: 0;
    text-align: center;
  `}
`
