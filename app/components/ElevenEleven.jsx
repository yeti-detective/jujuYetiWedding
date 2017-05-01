import React from 'react'

var elevenStyle = {
  height: "60%",
  width: "60%",
  background: "rgba(200, 62, 200, 0.8)",
  borderRadius: 20,
  margin: "auto"
}

var numStyle = {
  fontFamily: "'Dancing Script', cursive",
  fontSize: "7em"
}

class ElevenEleven extends React.Component {
  render(){
    return(
      <div style={elevenStyle}>
        <h2 style={numStyle}>11</h2>
      </div>
    )
  }
}

export default ElevenEleven
