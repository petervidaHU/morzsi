import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import MainTopic from "../components/mainTopic"
import { Header } from "../components/Header"
import { GoogleMap } from "../components/GoogleMap"
import { PricingTable } from "../components/PricingTable"
import { Teeth } from "../components/Teeth"
import { Footer } from "../components/Footer"

const IndexPage = () => (
  /*  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    </div>
  
   
  </Layout> */
  <main>
    <Header />
    <section id="hero">
      <div></div>
    </section>
    <MainTopic />
    <section id="galery">
      <div>pic galery</div>
    </section>
    <GoogleMap />
    <PricingTable />
    <Teeth />
    <Footer />
  </main>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
