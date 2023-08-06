import * as React from "react"
import styled from "styled-components"
import { constData } from "../data/data"
import { getDarkerColor } from "../helpers"
import { baseElements } from "../style/baseElements"
import { mediaMorzsi, t } from "../style/globalStyles"
import { FormattedMessage, useIntl } from "gatsby-plugin-react-intl"

const Section = baseElements.MySection
const tableBackground = t.color.light2
const trPadding = t.padding[0]

export function PricingTable() {
  const intl = useIntl()
  const breedJSX = constData.breedsPrice.map(breedData => (
    <tr key={breedData[0] + breedData[1]}>
      <td>{intl.formatMessage({ id: breedData[0] })}:</td>
      <td>
        <FormattedMessage
          id={"miscPrices.currency"}
          values={{ price: breedData[1] }}
        />
      </td>
    </tr>
  ))
  const dataJSX = constData.miscPrice.map(data => (
    <tr key={data[0]}>
      <td>{intl.formatMessage({ id: data[0] })}</td>
      <td>
        {" "}
        <FormattedMessage
          id={"miscPrices.currency"}
          values={{ price: data[1] }}
        />
      </td>
    </tr>
  ))
  const dataPerMinuteJSX = constData.miscMinutesPrice.map(data => (
    <tr key={data[0]}>
      <td>{intl.formatMessage({ id: data[0] })}</td>
      <td>
        {" "}
        <FormattedMessage
          id={"miscPrices.minutes"}
          values={{ price: data[1], hourPrice: data[2] }}
        />
      </td>
    </tr>
  ))
  const dataPerHourJSX = constData.miscHourPrice.map(data => (
    <tr key={data[0]}>
      <td>{intl.formatMessage({ id: data[0] })}</td>
      <td>
        {" "}
        <FormattedMessage
          id={"miscPrices.hour"}
          values={{ price: data[1] }}
        />
      </td>
    </tr>
  ))
  return (
    <Section id="section-prices">
      <h2>
        <FormattedMessage id="main.sectiontitle.prices" />
      </h2>
      <p>
        <FormattedMessage id="main.prices.inittext" />
      </p>
      <FormattedMessage id="main.prices.aboutprices" />
      <p></p>
      <Table>
        <tbody>
          {breedJSX}
          {dataJSX}
          {dataPerMinuteJSX}
          {dataPerHourJSX}
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
