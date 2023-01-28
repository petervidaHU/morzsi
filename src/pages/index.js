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
  Hero,
} from "../components"
import { GlobalStyle } from "../style/globalStyles"
import { baseElements } from "../style/baseElements"

const Teszt = baseElements.MySection;
const IndexPage = () => (
  <>
    <GlobalStyle theme="primary" />
      <Header />
    <main>
      <Hero />
      <MainTopic />
      <section id="section-gallery">
        <div>pic galery</div>
      </section>
      <MapComponent />
      <PricingTable />
      <Teszt wide/>
      <Teeth />
    </main>
      <Footer />
  </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
