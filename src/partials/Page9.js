import * as React from "react"
import { isMobile } from "react-device-detect"

import {
  partials,
  leftPage,
  pageTabLow,
  MARGIN,
  TEXTSTYLE,
} from "../shared/styles"
import { Page9_kitchen1 } from "../images"

export default function Page9() {
  return (
    <div
      style={{
        ...partials,
        ...leftPage,
        alignItems: "flex-end",
      }}
    >
      <div className="image" style={{ display: "block", width: 630 }}>
        {Page9_kitchen1}
      </div>

      <div
        className="row"
        style={{
          display: "flex",
          // position: "absolute",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginLeft: MARGIN,
          marginRight: MARGIN,
          marginBottom: MARGIN,
          paddingTop: 20,
        }}
      >
        <div className="text" style={{ width: isMobile ? `80%` : `30%` }}>
          {TEXT}
        </div>
      </div>
    </div>
  )
}

const TEXT = (
  <div style={TEXTSTYLE}>
    Forest Hills Collection House
    <br />
    Queens, New York
    <br />
    Residential
    <br />
    <br />
    Project Team:
    <br />
    Cheng-Yang Lee, Connie Cheng
    <br />
    ····································································
    <br />
    The Forest Hills Collection House is a modern 1-family house, currently
    under construction.
    <br />
    <br />
    I am helping to develop the interior elevations, visualizing them through
    Revit. I also worked with the project architect to coordinate the building's
    HVAC layout, and assisted with the procurement of exterior finishes.
    <br />
  </div>
)
