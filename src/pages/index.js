import React, { useState } from "react"
import { Link } from "gatsby"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import { isMobile } from "react-device-detect"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import BlankPage from "../partials/BlankPage"
import TitlePage from "../partials/TitlePage"
import Page1 from "../partials/Page1"
import Page2 from "../partials/Page2"
import Page3 from "../partials/Page3"
import Page4 from "../partials/Page4"
import Page5 from "../partials/Page5"
import Page6 from "../partials/Page6"
import Page7 from "../partials/Page7"
import Page8 from "../partials/Page8"

const IndexPage = () => {
  let [page, setPage] = useState(0)

  let parallax
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <Parallax
        pages={isMobile ? 12 : 6}
        scrolling={true}
        horizontal
        ref={ref => (parallax = ref)}
      >
        <ParallaxLayer offset={0} speed={0} factor={isMobile ? 1 : 0.5}>
          <BlankPage />
        </ParallaxLayer>

        <ParallaxLayer
          offset={isMobile ? 1 : 0.5}
          speed={1}
          factor={isMobile ? 1 : 0.5}
        >
          <TitlePage />
        </ParallaxLayer>

        <ParallaxLayer
          offset={isMobile ? 2 : 1}
          speed={0.5}
          factor={isMobile ? 1 : 0.5}
        >
          <Page1 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={isMobile ? 3 : 1.5}
          speed={1}
          factor={isMobile ? 1 : 0.5}
        >
          <Page2 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={isMobile ? 4 : 2}
          speed={0.5}
          factor={isMobile ? 1 : 0.5}
        >
          <Page3 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={isMobile ? 5 : 2.5}
          speed={1}
          factor={isMobile ? 1 : 0.5}
        >
          <Page4 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={isMobile ? 6 : 3}
          speed={0.5}
          factor={isMobile ? 1 : 0.5}
        >
          <Page5 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={isMobile ? 7 : 3.5}
          speed={1}
          factor={isMobile ? 1 : 0.5}
        >
          <Page6 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={isMobile ? 8 : 4}
          speed={0.5}
          factor={isMobile ? 1 : 0.5}
        >
          <Page7 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={isMobile ? 9 : 4.5}
          speed={1}
          factor={isMobile ? 1 : 0.5}
        >
          <Page8 />
        </ParallaxLayer>

        <ParallaxLayer
          offset={isMobile ? 10 : 5}
          speed={0.5}
          factor={isMobile ? 1 : 0.5}
        >
          <BlankPage />
          <span onClick={() => parallax.scrollTo(3.2)}>scroll to 3.2</span>
        </ParallaxLayer>

        <ParallaxLayer
          offset={isMobile ? 11 : 5.5}
          speed={1}
          factor={isMobile ? 1 : 0.5}
        >
          <BlankPage />
          <span onClick={() => parallax.scrollTo(0)}>scroll to 0</span>
        </ParallaxLayer>
      </Parallax>
    </Layout>
  )
}

export default IndexPage
