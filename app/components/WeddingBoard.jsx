import React from 'React'

function WeddingBoard(props){
  return(
    <a href={props.displayProps.href}
      data-pin-do={props.displayProps.dataPinDo}
      data-pin-board-width={props.displayProps.dataPinBoardWidth}
      data-pin-scale-height={props.displayProps.dataPinScaleHeight}
      data-pin-scale-width={props.displayProps.dataPinScaleWidth}></a>
  )
}

export default WeddingBoard
