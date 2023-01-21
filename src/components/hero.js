import React, { useState } from "react"
import styled from "styled-components"
import { themeDefault } from "../style/globalStyles"
import vav from "./../images/waves.svg"

const heroBackgroundColor = themeDefault.color.light3

const MySVG = ({ fillColor }) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >
    <path
      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
      class="shape-fill"
      fill="#FFFFFF"
      fill-opacity="1"
    ></path>
  </svg>
)

const svgString = ReactDOMServer.renderToString(<MySVG fillColor="#FFFFFF" />)

export const Hero = () => {
  return (
    <>
      <HeroSection svg={svgString}>Morzsi Szépül kutyakozmetika</HeroSection>
    </>
  )
}

const HeroSection = styled.section`
  min-height: 40vh;
  padding: 0;
  background-color: ${heroBackgroundColor};
  width: 100%;
  overflow: hidden;
  line-height: 0;
  // clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10vh), 0 100%);
  // background-image: url(${MySVG});
  clip-path: url(data:image/svg+xml,${(props) => props.svg});
`
