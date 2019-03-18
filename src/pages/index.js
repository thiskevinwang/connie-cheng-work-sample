import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import { isBrowser, isMobile } from "react-device-detect"

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

const PAGES = isMobile ? [0, 1, 2, 3, 4, 5, 6, 7, 8] : [0, 1, 2, 3, 4]

const IndexPage = () => {
  const [page, setPage] = useState(0)
  let parallax

  const onClickRight = () => {
    const nextPage = PAGES[PAGES.indexOf(page) + 1] || 0
    parallax.scrollTo(nextPage)
    setPage(nextPage)
  }

  const onClickLeft = () => {
    const previousPage =
      PAGES[PAGES.indexOf(page) - 1] === 0
        ? 0
        : PAGES[PAGES.indexOf(page) - 1] || PAGES.length - 1
    parallax.scrollTo(previousPage)
    setPage(previousPage)
  }

  useEffect(() => {
    document.title = `CHENG | ${
      page == 0
        ? "title"
        : page == 5
        ? "end"
        : page + PAGES.indexOf(page) - 1 + " - " + (page + PAGES.indexOf(page))
    }`
    document.onkeydown = e => {
      e.key == "ArrowRight" && onClickRight()
      e.key == "ArrowLeft" && onClickLeft()
    }
  })

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <Parallax
        pages={PAGES.length}
        scrolling={true}
        horizontal
        ref={ref => (parallax = ref)}
      >
        {isBrowser && (
          <ParallaxLayer offset={0} speed={0} factor={isMobile ? 1 : 0.5}>
            <BlankPage />
          </ParallaxLayer>
        )}

        <ParallaxLayer
          offset={isMobile ? 0 : 0.5}
          speed={1}
          factor={isMobile ? 1 : 0.5}
        >
          <TitlePage />
        </ParallaxLayer>

        <ParallaxLayer
          onScroll={e => e.stopPropagation()}
          style={{ overflowY: "scroll" }}
          offset={isMobile ? 1 : 1}
          speed={0.5}
          factor={isMobile ? 1 : 0.5}
        >
          <Page1 />
        </ParallaxLayer>

        <ParallaxLayer
          onScroll={e => e.stopPropagation()}
          style={{ overflowY: "scroll" }}
          offset={isMobile ? 2 : 1.5}
          speed={1}
          factor={isMobile ? 1 : 0.5}
        >
          <Page2 />
        </ParallaxLayer>

        <ParallaxLayer
          onScroll={e => e.stopPropagation()}
          style={{ overflowY: "scroll" }}
          offset={isMobile ? 3 : 2}
          speed={0.5}
          factor={isMobile ? 1 : 0.5}
        >
          <Page3 />
        </ParallaxLayer>

        <ParallaxLayer
          onScroll={e => e.stopPropagation()}
          style={{ overflowY: "scroll" }}
          offset={isMobile ? 4 : 2.5}
          speed={1}
          factor={isMobile ? 1 : 0.5}
        >
          <Page4 />
        </ParallaxLayer>

        <ParallaxLayer
          onScroll={e => e.stopPropagation()}
          style={{ overflowY: "scroll" }}
          offset={isMobile ? 5 : 3}
          speed={0.5}
          factor={isMobile ? 1 : 0.5}
        >
          <Page5 />
        </ParallaxLayer>

        <ParallaxLayer
          onScroll={e => e.stopPropagation()}
          style={{ overflowY: "scroll" }}
          offset={isMobile ? 6 : 3.5}
          speed={1}
          factor={isMobile ? 1 : 0.5}
        >
          <Page6 />
        </ParallaxLayer>

        <ParallaxLayer
          onScroll={e => e.stopPropagation()}
          style={{ overflowY: "scroll" }}
          offset={isMobile ? 7 : 4}
          speed={0.5}
          factor={isMobile ? 1 : 0.5}
        >
          <Page7 />
        </ParallaxLayer>

        <ParallaxLayer
          onScroll={e => e.stopPropagation()}
          style={{ overflowY: "scroll" }}
          offset={isMobile ? 8 : 4.5}
          speed={1}
          factor={isMobile ? 1 : 0.5}
        >
          <Page8 />
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={isMobile ? 10 : 5}
          speed={0.5}
          factor={isMobile ? 1 : 0.5}
        >
          <BlankPage />
        </ParallaxLayer>

        <ParallaxLayer
          offset={isMobile ? 11 : 5.5}
          speed={1}
          factor={isMobile ? 1 : 0.5}
        >
          <BlankPage />
        </ParallaxLayer> */}
      </Parallax>
    </Layout>
  )
}

export default IndexPage
