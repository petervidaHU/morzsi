import { createGlobalStyle } from "styled-components"

const colorValues = {
    primary: "black",
    secondary: "brown",
    danger: "red",
}

export const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${({theme}) => (theme === "primary" ? colorValues.primary : colorValues.secondary)};
  }
`