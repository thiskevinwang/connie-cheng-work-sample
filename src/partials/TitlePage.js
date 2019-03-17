import * as React from "react"
import { partials, rightPage } from "../shared/styles"

export default function TitlePage() {
  return (
    <div style={{ ...partials, ...rightPage }}>
      <div
        style={{
          position: "absolute",
          paddingRight: 60,
          paddingTop: 160,
          right: 0,
          top: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", fontSize: 24 }}>CONNIE CHENG</div>
          <div style={{ display: "flex" }}>work sample</div>
        </div>
      </div>
    </div>
  )
}
