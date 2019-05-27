import React, { Component } from 'react'
import Page from './page'

export default class Category extends Component {
  
  constructor(){
    super();
    this.state = ({
      listOpen : false,
    });
  }

  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  render() {
    const {
      categoryList,
      parentVisible,
      sortProductsByCategory,
      nestingLevel
    } = this.props;

    return (
      <span>
        <Page
          sortProductsByCategory={sortProductsByCategory}
          parentVisible={parentVisible}
          nestingLevel={nestingLevel}
          categoryList={categoryList}
          listOpen={this.state.listOpen}
          toggleList={this.toggleList.bind(this)}
        />
      </span>
    )
  }
}
