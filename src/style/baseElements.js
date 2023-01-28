import styled from "styled-components"
import { t } from "./globalStyles"

export const baseElements = {
  MySection: styled.section`
    padding-block: ${({ noPaddingBlock }) =>
      noPaddingBlock ? "0" : t.padding[3]};
    padding-inline: ${({ wide }) => (wide ? "0" : t.padding[6])};
    clip-path: ${({ borderDown, borderUpDown }) =>
      borderUpDown ? t.borderUpDown : borderDown ? t.borderDown : ""};
  `,
}
