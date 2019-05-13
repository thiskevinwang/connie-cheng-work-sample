export const MARGIN = 30
export const TEXTSTYLE = { fontSize: 10, lineHeight: 1.1 }

export const partials = {
  fontFamily: `'GENISO', sans-serif`,
  color: "black",
  fontWeight: "bold",
  display: "flex",
  flexDirection: "column",
  minWidth: 375,
  maxWidth: 720,
  minHeight: 515.625,
  maxHeight: 931.76,
  maxHeight: `calc(100vh - 20px)`,
  height: `calc(100% - 20px)`,
  // background: "#F1F7FC",
  background: "white",
}

export const leftPage = {
  marginTop: 10,
  marginLeft: 10,
  marginBottom: 10,
}

export const rightPage = {
  marginTop: 10,
  marginRight: 10,
  marginBottom: 10,
}

export const pageTabHigh = {
  fontSize: 12,
  lineHeight: 1,
  position: "absolute",
  top: 0,
  right: 0,
  marginTop: 90,
  marginRight: -20, //-10 for `rightPage`
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  transform: `rotate(-90deg)`,
}

export const pageTabLow = {
  fontSize: 12,
  lineHeight: 1,
  position: "absolute",
  right: 0,
  bottom: 0,
  marginRight: -20, //-10 for `rightPage`
  marginBottom: 90,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  transform: `rotate(-90deg)`,
}
