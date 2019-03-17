import * as React from "react"
import {
  partials,
  rightPage,
  pageTabHigh,
  MARGIN,
  TEXTSTYLE,
} from "../shared/styles"
import { MODEL } from "../images/Page8-model"

export default function Page8() {
  return (
    <div style={{ ...partials, ...rightPage }}>
      <div
        className="pageTab--high"
        style={{ ...pageTabHigh, marginRight: -10 }}
      >
        <div className="pageTab-date">180731</div>
        <div className="pageTab-number">CHENG, page 8</div>
      </div>

      <div
        className="row"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: MARGIN + 20,
        }}
      >
        <div className="image" style={{ width: `80%` }}>
          {MODEL}
        </div>
      </div>

      <div
        className="row"
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: MARGIN,
        }}
      >
        <div className="text" style={{ width: `40%` }}>
          {TEXT}
        </div>
      </div>
    </div>
  )
}

const TEXT = (
  <div style={TEXTSTYLE}>
    66 Withers
    <br />
    Brooklyn, New York
    <br />
    Residential
    <br />
    <br />
    Project Team: <br />
    Ray H. Dovell, Matthew Mueller, Vikrant Dalvi, Emily Wine, Taryne Cook
    <br />
    <br />
    Photo (above) credits to Mike Meglia & Platt Byard Dovell White Architects
    <br />
    <br />
    ····································································
    <br />
    <br />
    While I was not part of the design team for 66 Withers, I was tasked with
    producing a scaled model for internal archival purposes. The model consists
    of chipboard, basswood, and acrylic. All pieces of the model were hand-cut.
  </div>
)
