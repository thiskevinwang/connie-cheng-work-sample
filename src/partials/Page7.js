import * as React from "react"
import { partials, leftPage, pageTabHigh } from "../shared/styles"

export default function Page7() {
  return (
    <div style={{ ...partials, ...leftPage }}>
      {" "}
      <div className="pageTab--high" style={{ ...pageTabHigh }}>
        <div className="pageTab-date">180731</div>
        <div className="pageTab-number">CHENG, page 7</div>
      </div>
    </div>
  )
}
