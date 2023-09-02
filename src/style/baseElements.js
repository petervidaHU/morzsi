import styled from "styled-components"
import { t, mediaMorzsi, defaults } from "./globalStyles"

export const baseElements = {
  MySection: styled.section`
    padding-block: ${({ noPaddingBlock }) =>
      noPaddingBlock ? "0" : t.padding[3]};
    margin-inline: ${({ wide }) => (wide ? "0" : defaults.sectionMargin)};
    
    ${mediaMorzsi.lessThan("huge")`
      margin-inline: ${({ wide }) => (wide ? "0" : t.margin[4])};
    `}
    ${mediaMorzsi.lessThan("subHuge")`
      margin-inline: ${({ wide }) => (wide ? "0" : t.margin[3])};
    `}
    ${mediaMorzsi.lessThan("large")`
      margin-inline: ${({ wide }) => (wide ? "0" : t.margin[2])};
    `}
    ${mediaMorzsi.lessThan("medium")`
      margin-inline: ${({ wide }) => (wide ? "0" : t.margin[2])};
    `}
     `,

  BasicDiv: styled.div`
    font-size: ${t.fontSizes[2]};
    line-height: 1.5;
  `,
}
