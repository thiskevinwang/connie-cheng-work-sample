import * as React from "react"
import {
  partials,
  leftPage,
  pageTabLow,
  MARGIN,
  TEXTSTYLE,
} from "../shared/styles"
import { Page3_collage, Page3_residence } from "../images"

export default function Page3() {
  return (
    <div style={{ ...partials, ...leftPage }}>
      <div className="pageTab--high" style={{ ...pageTabLow }}>
        <div className="pageTab-date">180731</div>
        <div className="pageTab-number">CHENG, page 3</div>
      </div>

      <div className="row" style={{ marginTop: MARGIN }}>
        <div className="image" style={{}}>
          {Page3_collage}
        </div>
      </div>

      <div
        className="row"
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: MARGIN,
          marginRight: MARGIN,
          marginTop: MARGIN,
        }}
      >
        <div className="image" style={{ width: `60%` }}>
          {Page3_residence}
        </div>
        <div className="text" style={{ width: `40%`, marginLeft: MARGIN }}>
          {TEXT}
        </div>
      </div>
    </div>
  )
}

const TEXT = (
  <div style={TEXTSTYLE}>
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
    ····································································
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
