import React, { Component } from 'react'
import Page from './page'

export default class Chip extends Component {
  render() {
    const {
      textValue,
      id,
      handleClick
    } = this.props;
  
    return (
        <Page
          textValue={textValue}
          id={id}
          handleClick={handleClick}  
        />
    )
  }
}
