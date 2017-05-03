import React from 'react'
import WeddingBoard from '../components/WeddingBoard.jsx'

class PinterestBoard extends React.Component {
  constructor(){
    super()
    this.state = {
      href:"https://www.pinterest.com/badnewsbaby/warpaintwedding/",
      dataPinDo: "embedBoard",
      dataPinBoardWidth: "400",
      dataPinScaleHeight: "320",
      dataPinScaleWidth: "100"
    }
  }

  render(){
    return(
      <WeddingBoard displayProps={this.state} />
    )
  }
}

export default PinterestBoard
