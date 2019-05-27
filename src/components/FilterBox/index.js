import React, { Component } from 'react'
import Page from './page'

export default class FilterBox extends Component {
  render() {

    const {
      minValue,
      maxValue,
      minQuantity,
      maxQuantity,
      currentMinValue,
      currentMaxValue,
      currentMinQuantity,
      currentMaxQuantity,
      displayAvailability,
      updateCurrentMaxValue,
      updateCurrentMinValue,
      updateCurrentMaxQuantity,
      updateCurrentMinQuantity,
      sortProductsByAvailability
    } = this.props;

    return (
      <div>
        <Page 
          minValue={minValue}
          maxValue={maxValue}
          minQuantity={minQuantity}
          maxQuantity={maxQuantity}
          currentMinValue={currentMinValue}
          currentMaxValue={currentMaxValue}
          currentMinQuantity={currentMinQuantity}
          currentMaxQuantity={currentMaxQuantity}
          displayAvailability={displayAvailability}
          updateCurrentMaxValue={updateCurrentMaxValue}
          updateCurrentMinValue={updateCurrentMinValue}
          updateCurrentMaxQuantity={updateCurrentMaxQuantity}
          updateCurrentMinQuantity={updateCurrentMinQuantity}
          sortProductsByAvailability={sortProductsByAvailability}
        />
      </div>
    )
  }
}
