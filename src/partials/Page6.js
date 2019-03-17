import * as React from "react"
import { partials, rightPage, pageTabHigh } from "../shared/styles"

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
    </div>
  )
}
