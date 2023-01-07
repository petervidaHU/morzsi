import React from "react"
import { createGlobalStyle } from "styled-components"

const colorValues = {
    primary: "black",
    secondary: "brown",
    danger: "red",
}

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === "primary" ? colorValues.primary : colorValues.secondary)};
  }
`