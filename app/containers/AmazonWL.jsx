import React from 'react'
import AmazonWishList from 'amazon-wish-list'

var awl = new AmazonWishList();

class AmazonWL extends React.Component {
  constructor(){
    super()
    awl.getById('').then((list)=>{
      console.log(list)
    })
    this.state = {}
  }
}
