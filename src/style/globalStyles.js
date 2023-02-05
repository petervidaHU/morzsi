import { createGlobalStyle } from "styled-components"
import { generateMedia } from "styled-media-query";
 
export const mediaMorzsi = generateMedia({
  huge: '1440px',
  subHuge: '1300px',
  large: '1170px',
  subLarge: '960px',
  medium: '768px',
  small: '480px',
});


const colorPurple = "hsl(300, 66%, 12%)"
const colorLightPurple = "hsl(263, 12%, 53%)"
const colorLight = "hsl(44, 90%, 100%)"
const colorPale = "hsl(137, 25%, 72%)"
const colorButter = "hsl(44, 58%, 90%)"

export const t  = {
  color: {
    dark1: colorPurple,
    light1: colorPale,
    light2: colorLight,
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
  padding: ["0.5rem", "1rem", "2rem", "3rem", "4rem", "6rem", "8rem"],
  margin: ["1rem", "2rem", "3rem", "4rem", "5rem", "6rem", "7rem"],
  fontSizes: [".7rem", "1rem", "1.2rem", "1.6rem", "2rem", "4rem", "8rem"],
  borderUpDown: "polygon(0 10vh, 100% 0, 100% calc(100% - 10vh), 0 100%)",
  borderDown: "polygon(0 0, 100% 0, 100% calc(100% - 10vh), 0 100%)",
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
  
  section {
  }
  h1 {
    font-family: ${t.fontFamily.heading1}, Times, serif;
    font-size: ${t.fontSizes[6]};
  }
  h2 {
    font-family: ${t.fontFamily.heading1}, Times, serif;
    font-size: ${t.fontSizes[5]};
    
    ${mediaMorzsi.lessThan('medium')`
      font-size: ${t.fontSizes[4]};
    `}
  }
  h3 {
    font-family: ${t.fontFamily.heading1}, Times, serif;
    font-size: ${t.fontSizes[4]};
  }
  h4 {
    font-family: ${t.fontFamily.heading1}, Times, serif;
    font-size: ${t.fontSizes[3]};
  }

  p {
    font-family: ${t.fontFamily.primary}, Times, serif;
  }
`
