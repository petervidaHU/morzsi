import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  Header,
  MapComponent,
  PricingTable,
  Teeth,
  Footer,
  MainTopic,
  Seo,
} from "../components"
import { GlobalStyle } from "../style/globalStyles"

const IndexPage = () => (
  <>
    <GlobalStyle theme="primary" />
    <main>
      <Header />
      <section id="hero">
        <div></div>
      </section>
      <MainTopic />
      <section id="section-gallery">
        <div>pic galery</div>
      </section>
      <MapComponent />
      <PricingTable />
      <Teeth />
      <Footer />
    </main>
  </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
