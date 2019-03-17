import * as React from "react"
import { partials, rightPage, pageTabHigh } from "../shared/styles"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { PERSPECTIVE } from "../images/Page2-perspective"
import { PINCH } from "../images/Page2-pinch"

const MARGIN = 30

export default function Page2() {
  return (
    <div style={{ ...partials, ...rightPage }}>
      <div
        className="pageTab--high"
        style={{ ...pageTabHigh, marginRight: -10 }}
      >
        <div className="pageTab-date">180731</div>
        <div className="pageTab-number">CHENG, page 2</div>
      </div>

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
          marginBottom: MARGIN,
          paddingTop: 100,
        }}
      >
        <div className="text" style={{ width: `30%`, marginRight: MARGIN }}>
          {TEXT}
        </div>
        <div className="image" style={{ width: `70%`, marginRight: MARGIN }}>
          {PERSPECTIVE}
        </div>
      </div>

      <div className="row" style={{ margin: 0 }}>
        <div className="image" style={{}}>
          {PINCH}
        </div>
      </div>
    </div>
  )
}

const TEXT = (
  <div style={{ fontSize: 9.7, lineHeight: 1 }}>
    The Pinch <br />
    Yunnan Province, China
    <br />
    Community Library
    <br />
    <br />
    Designers:
    <br />
    Olivier Ottevaere and John Lin
    <br />
    Project Team:
    <br />
    Crystal Kwan, Ashley Hinchcliffe, Connie Cheng, Johnny Cullinan, Jacky
    Huang, Joyce Ip, Yvonne Xu Meng
    <br />
    <br />
    Photo (below) credits to Olivier Ottevaere and John Lin & The University of
    Hong Kong Faculty of Architecture
    <br />
    <br />
    •••••••••••••••••••••••••••••••••••••••
    <br />
    <br />I worked closely with one of the designers on developing the shelving
    layout for the Pinch. This involved countless iterations and testing in
    Rhinoceros and a foam study model. The final design is an undulating system
    of V's, each anchoring from a structural truss and suspending three rows of
    shelving.
  </div>
)
