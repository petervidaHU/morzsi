import { createGlobalStyle } from "styled-components"


const colorPurple = "hsl(300, 66%, 12%)"
const colorLightPurple = "hsl(263, 12%, 53%)"
const colorLight = "hsl(177, 25%, 63%)"
const colorPale = "hsl(137, 25%, 72%)"
const colorButter = "hsl(44, 58%, 90%)"

export const t  = {
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
    heading1: "Orelega One",
    primary: "Nunito",
    secondary: "",
  },
  padding: ["0.5rem", "1rem", "2rem", "3rem", "4rem", "5rem", "6rem", "7rem"],
  margin: ["1rem", "2rem", "3rem", "4rem", "5rem", "6rem", "7rem"],
  fontSizes: [".7rem", "1rem", "1.2rem", "1.6rem", "2rem", "4rem", "8rem"],
}

export const GlobalStyle = createGlobalStyle`

body {
    font-family: ${t.fontFamily.primary}, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${({ theme }) =>
      theme === "primary" ? t.color.primary : t.color.secondary};
  }
  
  section {
    padding: ${t.padding[1]} ${t.padding[2]};
  }
  h1 {
    font-family: ${t.fontFamily.heading1}, Times, serif;
    font-size: ${t.fontSizes[6]};
  }
  h2 {
    font-family: ${t.fontFamily.heading1}, Times, serif;
    font-size: ${t.fontSizes[5]};
  }
  h3 {
    font-family: ${t.fontFamily.heading1}, Times, serif;
    font-size: ${t.fontSizes[4]};
  }
  h4 {
    font-family: ${t.fontFamily.heading1}, Times, serif;
    font-size: ${t.fontSizes[3]};
  }
`
