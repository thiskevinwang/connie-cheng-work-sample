import * as React from "react"
import {
  partials,
  leftPage,
  pageTabHigh,
  MARGIN,
  TEXTSTYLE,
} from "../shared/styles"
import { REECE } from "../images/Page5-reece"

export default function Page5() {
  return (
    <div style={{ ...partials, ...leftPage }}>
      <div className="pageTab--high" style={pageTabHigh}>
        <div className="pageTab-date">180731</div>
        <div className="pageTab-number">CHENG, page 5</div>
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
        <div className="image" style={{ width: `70%` }}>
          {REECE}
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
    Reece School Addition
    <br />
    New York, New York
    <br />
    Education, BSA Application
    <br />
    <br />
    Project Team: <br />
    Ray H. Dovell, Steven J. Dodds, Connie Cheng
    <br />
    <br />
    ····································································
    <br />
    <br />
    The Reece School is an elementary school for children with special needs
    located on the Upper East side of Manhattan. The existing building was
    designed by PBDW Architects and completed in 2006. More recently, the office
    was asked to help design a 3-story addition and prepare materials for an
    application to NYC's Board of Standards and Appeals.
    <br />
    <br />
    Together with a partner and project manager, I attended meetings with the
    school to review their needs in addition to BSA application procedures. We
    were able to efficiently reconfigure the programmatic spaces of the building
    in order to comply with the discussed criteria and produce the respective
    materials within a timely manner.
    <br />
    <br />
    I was responsible for both the as-of-right design and the proposed design
    drawings and documentation
    <br />
    <br />
    continued >>
  </div>
)
