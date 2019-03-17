import * as React from "react"
import { partials, rightPage, pageTabLow } from "../shared/styles"

export default function Page4() {
  return (
    <div style={{ ...partials, ...rightPage }}>
      <div
        className="pageTab--high"
        style={{ ...pageTabLow, marginRight: -10 }}
      >
        <div className="pageTab-date">180731</div>
        <div className="pageTab-number">CHENG, page 4</div>
      </div>
    </div>
  )
}
