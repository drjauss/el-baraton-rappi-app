import React, { Component } from 'react'
import Page from './page'

export default class FilterButton extends Component {
  render() {
    const {
      handleClick,
      sortArrow,
      dataTooltip,
      icon
    } = this.props;

    return (
        <Page 
          handleClick={handleClick}
          sortArrow={sortArrow}
          dataTooltip={dataTooltip}
          icon={icon}
        />
    )
  }
}
