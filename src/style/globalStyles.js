import { createGlobalStyle } from "styled-components"
import { generateMedia } from "styled-media-query";
 
export const mediaMorzsi = generateMedia({
  huge: '1440px',
  subHuge: '1300px',
  large: '1170px',
  subLarge: '960px',
  medium: '768px',
  subMedium: '624px',
  small: '480px',
});


const colorPurple = "hsl(300, 66%, 12%)"
const colorMedGray = "hsla(267, 9%, 43%)"
const colorLight = "hsl(44, 90%, 100%)"
const colorPale = "hsl(137, 25%, 72%)"
const colorButter = "hsl(44, 58%, 90%)"

export const t  = {
  color: {
    dark1: colorPurple,
    light1: colorPale,
    light2: colorLight,
    light3: colorButter,
    med1: colorMedGray,
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
  padding: ["0.5rem", "1rem", "2rem", "3rem", "4rem", "6rem", " 8rem"],
  margin: ["1rem", "2rem", "4rem", "6rem", "8rem", "12rem", "20rem"],
  fontSizes: [".7rem", "1rem", "1.2rem", "1.6rem", "2rem", "4rem", "8rem"],
}

export const defaults = {
  sectionPadding: t.padding[6],
  sectionMargin: t.margin[6],

}

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${t.fontFamily.primary}, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: ${t.color.light2};
    color: ${({ theme }) =>
      theme === "primary" ? t.color.primary : t.color.secondary};
  }
  h1 {
    font-family: ${t.fontFamily.heading1}, Times, serif;
    font-weight: 400;
    font-size: ${t.fontSizes[6]};
  }
  h2 {
    font-family: ${t.fontFamily.heading1}, Times, serif;
    font-weight: 400;
    font-size: ${t.fontSizes[5]};
    
    ${mediaMorzsi.lessThan('medium')`
      font-size: ${t.fontSizes[4]};
      `}
  }
  h3 {
    font-weight: 400;
    font-family: ${t.fontFamily.heading1}, Times, serif;
    font-size: ${t.fontSizes[4]};
  }
  h4 {
    font-weight: 400;
    font-family: ${t.fontFamily.heading1}, Times, serif;
    font-size: ${t.fontSizes[3]};
  }
  p {
    font-family: ${t.fontFamily.primary}, Times, serif;
  }
`
