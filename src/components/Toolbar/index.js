import React, { Component } from 'react'
import Page from './page'

export default class Toolbar extends Component {
  render() {
    const {
      cookies,
      productSortCriteria,
      searchByProductName,
      searchTerms,
      clearSearch
    } = this.props;
    return (
        <Page 
        cookies={cookies} 
        productSortCriteria={productSortCriteria}
        searchTerms={searchTerms}
        clearSearch={clearSearch}
        searchByProductName={searchByProductName}
        />
    )
  }
}
