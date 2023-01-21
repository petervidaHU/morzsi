import { createGlobalStyle } from "styled-components"

const colorPurple = "hsl(300, 66%, 12%)"
const colorLightPurple = "hsl(263, 12%, 53%)"
const colorLight = "hsl(177, 25%, 63%)"
const colorPale = "hsl(137, 25%, 72%)"
const colorButter = "hsl(44, 58%, 90%)"

export const themeDefault = {
  color: {
    dark1: colorPurple,
    light1: colorPale,
    light2: colorLightPurple,
    light3: colorButter,
  },
  backgroundColor: {
    primary: "white",
    secondary: "brown",
  },
  fontFamily: {
    primary: "Nunito",
    secondary: "Roboto",
  },
  padding: ["0.5rem", "1rem", "2rem", "3rem", "4rem", "5rem", "6rem", "7rem"],
  margin: ["1rem", "2rem", "3rem", "4rem", "5rem", "6rem", "7rem"],
  fontSizes: [".7rem", "1rem", "1.2rem", "1.6rem", "2rem", "4rem", "8rem"],
}

export const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${({ theme }) =>
      theme === "primary" ? themeDefault.color.primary : themeDefault.color.secondary};
  }

  section {
    padding: ${themeDefault.padding[1]} ${themeDefault.padding[2]};
  }
  h1 {
    font-size: ${themeDefault.fontSizes[6]};
  }
  h2 {
    font-size: ${themeDefault.fontSizes[5]};
  }
  h3 {
    font-size: ${themeDefault.fontSizes[4]};
  }
  h4 {
    font-size: ${themeDefault.fontSizes[3]};
  }
`
