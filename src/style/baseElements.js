 import styled from "styled-components"
import { getSectionClipingPath } from "../helpers"
import { t, mediaMorzsi, defaults } from "./globalStyles"

export const baseElements = {
  MySection: styled.section`
    padding-block: ${({ noPaddingBlock }) =>
      noPaddingBlock ? "0" : t.padding[3]};
    padding-inline: ${({ wide }) => (wide ? "0" : defaults.sectionPadding)};
    clip-path: ${({ borderDown, borderUp }) => getSectionClipingPath(
      borderDown,
      borderUp)};

    ${mediaMorzsi.lessThan("medium")`
      padding-inline: ${({ wide }) => (wide ? "0" : t.padding[2])};
    `}
  `,
}
