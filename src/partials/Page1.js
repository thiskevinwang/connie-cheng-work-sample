import * as React from "react"
import { partials, leftPage, pageTabHigh } from "../shared/styles"

export default function Page1() {
  return (
    <div style={{ ...partials, ...leftPage }}>
      <div className="pageTab--high" style={pageTabHigh}>
        <div className="pageTab-date">180731</div>
        <div className="pageTab-number">CHENG, page 1</div>
      </div>
    </div>
  )
}

/*
The Sweep
Yunnan Province, China
Viewing Platform

Designers:
Olivier Ottevaere and John Lin
Project Team:
Crystal Kwan, Gabriel Chan, Connie Cheng, Ruby Huang, The University of Hong Kong

Photo (left) credits to Olivier Ottevaere and John Lin & The University of Hong Kong Faculty of Architecture

For this design-build project, I assisted the designers and project manager with construction documents and on site construction and management. Working together we were able to effectively coordinate a group of 60 students and have construction completed in a week.

Below is a scaled MDF model I constructed showing the structural trusses of the platform.
*/
