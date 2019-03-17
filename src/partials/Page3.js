import * as React from "react"
import { partials, leftPage, pageTabLow } from "../shared/styles"
import { COLLAGE } from "../images/Page3-collage"
import { RESIDENCE } from "../images/Page3-residence"

const MARGIN = 30

export default function Page3() {
  return (
    <div style={{ ...partials, ...leftPage }}>
      <div className="pageTab--high" style={{ ...pageTabLow }}>
        <div className="pageTab-date">180731</div>
        <div className="pageTab-number">CHENG, page 3</div>
      </div>

      <div className="row" style={{ marginTop: MARGIN }}>
        <div className="image" style={{}}>
          {COLLAGE}
        </div>
      </div>

      <div
        className="row"
        style={{
          display: "flex",
          flexDirection: "row",
          top: 0,
          left: 0,
          marginLeft: MARGIN,
          marginRight: MARGIN,
          marginTop: MARGIN,
        }}
      >
        <div className="image" style={{ width: `60%` }}>
          {RESIDENCE}
        </div>
        <div className="text" style={{ width: `40%`, marginLeft: MARGIN }}>
          {TEXT}
        </div>
      </div>
    </div>
  )
}

const TEXT = (
  <div style={{ fontSize: 9.7, lineHeight: 1 }}>
    CDE Residence Hall <br />
    Williams College, Massachusetts
    <br />
    Education, Residential
    <br />
    <br />
    Project Team:
    <br />
    Samuel G. White, Anne H. Smith, Serena Loconczy, Rena Mande, Thomas, Faust,
    Taryn Cook, Connie Cheng, Paul Appleby, Alex Alaimo
    <br />
    <br />
    Original rendering (left) credits to Scott Baumberger & Platt Byard Dovell
    White Architects.
    <br />
    <br />
    •••••••••••••••••••••••••••••••••••••••
    <br />
    <br />
    The Center for Development Economics (CDE) at Williams College offers a one
    year master degree program to international students from low and middle
    income countries. PBDW was asked to design a new residence hall for the CDE,
    thus allowing for the distinction of living and learning spaces that the
    organization currently lacks.
    <br />
    <br />
    continued >>
  </div>
)
