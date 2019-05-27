import React, { Component } from 'react'
import Page from './page'

export default class Search extends Component {

  render() {
    const {
      searchTerms,
      handleClick,
      handleChange,
    } = this.props;
    return (
      <div>
            <Page 
              searchTerms={searchTerms}
              handleClick={handleClick}
              handleChange={handleChange}
            />
      </div>
    )
  }
}
