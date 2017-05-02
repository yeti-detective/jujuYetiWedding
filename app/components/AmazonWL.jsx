import React from 'react'
import AmazonWishList from 'amazon-wish-list'
import request from 'request'

var awl = new AmazonWishList().default('.com');

class AmazonWL extends React.Component {
  constructor(){
    super()
    this.state = {awl: []}
  }

  componentWillMount(){
    awl.getById('1NPSCGZPJV60F').then((list)=>{
      console.log(list)
      this.setState({awl: list})
    })
  }

  render(){
    return (
      <div>awl rendered</div>
    )
  }
}

export default AmazonWL
