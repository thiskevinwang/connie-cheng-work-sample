import * as React from "react"
import {
  partials,
  rightPage,
  pageTabHigh,
  MARGIN,
  TEXTSTYLE,
} from "../shared/styles"
import {
  Page6_scooter,
  Page6_hammock,
  Page6_ball,
  Page6_floorplan,
} from "../images"

export default function Page6() {
  return (
    <div style={{ ...partials, ...rightPage }}>
      <div
        className="pageTab--high"
        style={{ ...pageTabHigh, marginRight: -10 }}
      >
        <div className="pageTab-date">180731</div>
        <div className="pageTab-number">CHENG, page 6</div>
      </div>

      <div
        className="row"
        style={{
          display: "flex",
          // position: "absolute",
          flexDirection: "row",
          justifyContent: "center",
          top: 0,
          left: 0,
          margin: MARGIN,
          // paddingTop: 70,
        }}
      >
        <div
          className="image"
          style={{ width: `22%`, height: `15%`, marginRight: MARGIN }}
        >
          {Page6_scooter}
        </div>
        <div className="image" style={{ width: `22%`, height: `25%` }}>
          {Page6_hammock}
        </div>
      </div>

      <div
        className="row"
        style={{
          display: "flex",
          // position: "absolute",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div className="image" style={{ width: `75%`, height: `25%` }}>
          {Page6_floorplan}
        </div>
      </div>

      <div
        className="row"
        style={{
          display: "flex",
          alignItems: "center",
          // position: "absolute",
          flexDirection: "row",
          top: 0,
          left: 0,
          margin: MARGIN,
        }}
      >
        <div className="text" style={{ width: `30%`, marginRight: MARGIN }}>
          {TEXT}
        </div>
        <div className="image" style={{ width: `22%` }}>
          {Page6_ball}
        </div>
      </div>
    </div>
  )
}

const TEXT = (
  <div style={TEXTSTYLE}>
    One desire expressed by the school was a larger space devoted to physical
    therapy/occupational therapy(PTOT). I helped design the layout of the
    penthouse floor, which includes an open floor flex area, a sensory room, an
    office workspace with visual connection to a daily living lab, and a
    designated area for swings.
  </div>
)
