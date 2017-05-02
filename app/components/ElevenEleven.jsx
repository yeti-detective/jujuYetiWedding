// Oauth client ID
// 1049830250828-cnauj8cbo3764tesb0k7763gleakgg7r.apps.googleusercontent.com
//
// client secret
// -tr_UdI9Qmf_YXIU_M4al00N

// <img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif" />
import React from 'react'

var elevenStyle = {
  width: "40%",
  background: "rgba(200, 62, 200, 0.8)",
  borderRadius: 20,
  margin: "auto"
}

var aStyle = {
  textDecoration: "none"
}

var numStyle = {
  fontFamily: "'Dancing Script', cursive",
  fontSize: "5em",
  color: "#4F0EA6",
  marginBottom: 10
}

var pStyle = {
  fontFamily: "'Dancing Script', cursive",
  color: "#4F0EA6",
  fontSize: "1.5em"
}

class ElevenEleven extends React.Component {
  render(){
    return(
      <div style={elevenStyle}>
        <a style={aStyle} target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=bHE3Y25hdjBvM29wMjRvM2wzdmEwazBpczQgeWV0aS5kZXRlY3RpdmVAbQ&amp;tmsrc=yeti.detective%40gmail.com">
          <h2 style={numStyle}>11/11/17</h2>
        </a>
        <p style={pStyle}>You are cordially invited to join us as we join each other in holy matrimony, just as Gaga intended.</p>
        <p style={pStyle}>11/11 (make a wish, we did) in fabulous Ashville, North Carolina.</p>
      </div>
    )
  }
}

export default ElevenEleven
