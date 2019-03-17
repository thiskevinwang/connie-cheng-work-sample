import * as React from "react"
import {
  partials,
  leftPage,
  pageTabHigh,
  MARGIN,
  TEXTSTYLE,
} from "../shared/styles"
import { MODEL1 } from "../images/Page7-model1"
import { MODEL2 } from "../images/Page7-model2"

export default function Page7() {
  return (
    <div style={{ ...partials, ...leftPage }}>
      <div className="pageTab--high" style={{ ...pageTabHigh }}>
        <div className="pageTab-date">180731</div>
        <div className="pageTab-number">CHENG, page 7</div>
      </div>

      <div
        className="row"
        style={{
          display: "flex",
          // position: "absolute",
          flexDirection: "row",
          top: 0,
          left: 0,
          margin: MARGIN,
          paddingTop: 70,
        }}
      >
        <div className="image" style={{ width: `50%` }}>
          <div className="row">{MODEL1}</div>
          <div className="row">{MODEL2}</div>
        </div>
        <div className="text" style={{ width: `30%`, marginLeft: MARGIN }}>
          {TEXT}
        </div>
      </div>
    </div>
  )
}

const TEXT = (
  <div style={TEXTSTYLE}>
    Packer Collegiate Institute
    <br />
    Brooklyn, New York
    <br />
    Restoration/Addition
    <br />
    <br />
    Proposal Team: <br />
    Samuel G. White, Serena Loconczy, Erica Gaswirth, Sean King, Connie Cheng
    <br />
    <br />
    ····································································
    <br />
    <br />
    In response to an RFP for the restoration and addition of the Garden House,
    our team came up with a sensitive yet flexible response consisting of three
    varied design trajectories. Our combined efforts and hard work landed us
    with a winning proposal.
    <br />
    <br />
    In addition to assisting with the proposal documents, I was in charge of
    planning, modeling, and producing an accompanying site model. Existing site
    condition are in white. The design schemes are in blue and lock into place.
    <br />
    <br />
    Due to the size limitations of the 3D printer, the site had to be printed as
    three separate pieces, strategically modeled to interlock as a whole. The
    entire model nestles atop a basswood platform.
    <br />
    <br />
    continued >>
  </div>
)
