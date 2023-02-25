import * as React from "react"
import styled from "styled-components"
import { constData } from "../data/data"
import { getDarkerColor } from "../helpers"
import { baseElements } from "../style/baseElements"
import { mediaMorzsi, t } from "../style/globalStyles"

const Section = baseElements.MySection
const tableBackground = t.color.light2
const trPadding = t.padding[0]
const pricingAforText = `A komplett kutyakozmetikai kezelés tartalmazza a teljes fazonozást, fürdetést, szárítást, az egészségügyi nyírásokat, tisztításokat, amennyiben szükségesek.
Az ár változhat, ha az állat szőre és állapota az átlagostól jelentősen rosszabb. 
Az ártáblázatban nem szereplő fajtákkal kapcsolatban hívjon bátran!`
const pricingAfterText = `Áraink bruttó árak és magyar forintban értendőek.
Oltással nem rendelkező állatokat nem fogadok.
Agresszív, illetve nehezen kezelhető állatokat illetve gazdikat nem fogadok. `

export function PricingTable() {
  const breedJSX = constData.breedsPrice.map(breedData => (
    <tr key={breedData[0] + breedData[1]}>
      <td>{breedData[0]}:</td>
      <td>{breedData[1]}</td>
    </tr>
  ))
  const dataJSX = constData.miscPrice.map(data => (
    <tr key={data[0]}>
      <td>{data[0]}:</td>
      <td>{data[1]}</td>
    </tr>
  ))
  return (
    <Section id="section-prices">
      <h2>Árlista</h2>
      <p>{pricingAforText}</p>
      <p>{pricingAfterText}</p>
      <Table>
        <tbody>
          {breedJSX}
          {dataJSX}
        </tbody>
      </Table>
    </Section>
  )
}

console.log("get darjer:")

const Table = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
  width: 50%;

  ${mediaMorzsi.lessThan("subHuge")`
    width: 60%;
    `}
    
  ${mediaMorzsi.lessThan("large")`
    width: 70%;
  `}

  ${mediaMorzsi.lessThan("subLarge")`
    width: 95%;
  `}

  ${mediaMorzsi.lessThan("medium")`
    width: 100%;
  `}

  td {
    padding: ${trPadding} ${trPadding};
  }

  td:nth-child(2) {
    margin: 0 0 0 auto;
    float: right;
  }

  tr:nth-child(even) {
    background-color: ${getDarkerColor(tableBackground, 1)};
  }
`
