import * as React from "react"
import { isMobile } from "react-device-detect"

import {
  partials,
  rightPage,
  pageTabLow,
  MARGIN,
  TEXTSTYLE,
} from "../shared/styles"
import { Page10_kitchen2 } from "../images"

export default function Page10() {
  return (
    <div style={{ ...partials, ...rightPage }}>
      <div
        className="image"
        style={{
          maxWidth: 630,
        }}
      >
        {Page10_kitchen2}
      </div>

      <div
        className="row"
        style={{
          display: "flex",
          // position: "absolute",
          flexDirection: "row",
          justifyContent: "flex-start",
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
    The kitchen design shown showcases a combination of dark, grey-toned
    materials with subtle textural differences. The idea is to provide a stage
    where the space then becomes animated through the contrasting presence of
    everyday objects.
  </div>
)
