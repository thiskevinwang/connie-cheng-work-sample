import * as React from "react"
import { partials, leftPage, pageTabLow } from "../shared/styles"

export default function Page3() {
  return (
    <div style={{ ...partials, ...leftPage }}>
      <div className="pageTab--high" style={{ ...pageTabLow }}>
        <div className="pageTab-date">180731</div>
        <div className="pageTab-number">CHENG, page 3</div>
      </div>
    </div>
  )
}
