import * as React from "react"
import styled from "styled-components"
import { constData } from "../data/data"
import { baseElements } from "../style/baseElements"
import { t, defaults, mediaMorzsi } from "../style/globalStyles"
import Logo from "./svg/logo"

const Section = baseElements.MySection
const footerBck = t.color.dark1
const footerColor = t.color.light2
const titleFamily = t.fontFamily.heading1
const titleColor = "white"
const logoDarkColor = t.color.med1
const impressumColor = t.color.med1

export function Footer() {
  return (
    <Section borderUp noPaddingBlock wide as="footer" id="footer">
      <FooterContainer>
        <FooterMain>
          <ContactDiv>
            <span>{constData.phoneReadable}</span>
            <span>{constData.address}</span>
          </ContactDiv>
          <TitleDiv>
            <Logo scaling="2" fillDark={logoDarkColor} />
            <div>
              Morzsi szépül
              <br />
              Kutyakozmetika
            </div>
          </TitleDiv>
        </FooterMain>
        <BottomLine>outisz / 2023</BottomLine>
      </FooterContainer>
    </Section>
  )
}

const FooterContainer = styled.div`
  background-color: ${footerBck};
  color: ${footerColor};
  padding-inline: ${defaults.sectionPadding};

  ${mediaMorzsi.lessThan("subLarge")`
  padding-inline: ${t.padding[2]};
  `}
`

const FooterMain = styled.div`
  padding-block-start: 6rem;
  padding-block-end: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-items: center;

  span:not(:last-child)::after {
    content: "|";
    margin-inline: 1rem;
  }

  ${mediaMorzsi.lessThan("small")`
  flex-direction: column-reverse;
  
  div:first-child {
    margin-block-start: 2rem;
  }
  
  span {
    text-align: center;
  }
  `}
`
const ContactDiv = styled.div`
  height: 100%;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  margin-inline-end: 2rem;

  ${mediaMorzsi.lessThan("large")`
    display: flex;
    flex-direction: column;
    
    span:not(:last-child)::after {
      content: '';
    }
    `}

  ${mediaMorzsi.lessThan("large")`
    font-size: 1rem;
    `}

   ${mediaMorzsi.lessThan("small")`
     margin-inline-end: 0;
    `}
`

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  font-family: ${titleFamily};
  font-size: 2rem;
  color: ${titleColor};
  line-height: 1;

  svg {
    margin-inline-end: 2.5rem;
  }
`

const BottomLine = styled.div`
  font-size: 0.75rem;
  color: ${impressumColor};
  text-align: center;
  padding-block-end: 1rem;
`
