import React, { Component } from 'react'
import Page from './page'

export default class Cart extends Component {
  
  state ={
    isPulseActive : false
  };

  turnOffPulse(){
    this.setState({
      isPulseActive: false
    });  
  }

  render() {
    const {
      cookies,
      addProductToCart,
      removeProductFromCart,
      processPayment
    } = this.props;
    
    return (
        <Page processPayment={processPayment} removeProductFromCart={removeProductFromCart} addProductToCart={addProductToCart} cookies={cookies} turnOffPulse={this.turnOffPulse.bind(this)} isPulseActive={this.state.isPulseActive} />
    )
  }
}
