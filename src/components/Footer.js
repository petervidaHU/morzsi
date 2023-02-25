import * as React from "react";
import styled from "styled-components";
import { baseElements } from "../style/baseElements"
import { t } from "../style/globalStyles";

const Section = baseElements.MySection
const footerBck = t.color.dark1;
const footerColor = t.color.light2;

export function Footer() {
  return (
    <Section borderUp noPaddingBlock wide as="footer" id="footer">
      <FooterWrapper >this is the footer</FooterWrapper>
    </Section>
  );
}

const FooterWrapper = styled.div`
background-color: ${footerBck};
min-height: 300px;
color: ${footerColor};
padding-block-start: 6rem;
`;