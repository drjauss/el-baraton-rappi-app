import React, { Component } from 'react'
import Page from './page'

export default class Product extends Component {

  render() {
    const {
      productId,
      productName,
      productQuantity,
      productPrice,
      productAvailable,
      productSublevelId,

      addProductToCart

  } = this.props;
    return (
        <Page
          productId={productId}
          productName={productName}
          productQuantity={productQuantity}
          productPrice={productPrice}
          productAvailable={productAvailable}
          productSublevelId={productSublevelId}

          addProductToCart={addProductToCart}
        />
    )
  }
}
