import * as React from "react"
import { partials, leftPage, pageTabHigh } from "../shared/styles"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import Image from "../components/image"
import { SWEEP } from "../images/Page1-sweep"
import { MDF } from "../images/Page1-mdf"

const MARGIN = 30

export default function Page1() {
  return (
    <div style={{ ...partials, ...leftPage }}>
      <div className="pageTab--high" style={pageTabHigh}>
        <div className="pageTab-date">180731</div>
        <div className="pageTab-number">CHENG, page 1</div>
      </div>

      {/* <div className="image" style={{ position: "relative", maxWidth: `50%` }}>
        <Image src={"Page1-mdf.jpg"} />
      </div> */}
      <div
        className="row"
        style={{
          display: "flex",
          // position: "absolute",
          flexDirection: "row",
          top: 0,
          left: 0,
          marginLeft: MARGIN,
          marginRight: MARGIN,
          paddingTop: 100,
        }}
      >
        <div className="image" style={{ width: `70%` }}>
          {SWEEP}
        </div>
        <div className="text" style={{ width: `30%`, marginLeft: MARGIN }}>
          {TEXT}
        </div>
      </div>

      <div className="row" style={{ margin: MARGIN }}>
        <div className="image" style={{}}>
          {MDF}
        </div>
      </div>
    </div>
  )
}

const TEXT = (
  <div style={{ fontSize: 9.7, lineHeight: 1 }}>
    The Sweep <br />
    Yunnan Province, China
    <br />
    Viewing Platform
    <br />
    <br />
    Designers:
    <br />
    Olivier Ottevaere and John Lin
    <br />
    Project Team:
    <br />
    Crystal Kwan, Gabriel Chan, Connie Cheng, Ruby Huang, The University of Hong
    Kong
    <br />
    <br />
    Photo (left) credits to Olivier Ottevaere and John Lin & The University of
    Hong Kong Faculty of Architecture
    <br />
    <br />
    •••••••••••••••••••••••••••••••••••••••
    <br />
    <br />
    For this design-build project, I assisted the designers and project manager
    with construction documents and on site construction and management. Working
    together we were able to effectively coordinate a group of 60 students and
    have construction completed in a week.
    <br />
    <br />
    Below is a scaled MDF model I constructed showing the structural trusses of
    the platform.
  </div>
)
