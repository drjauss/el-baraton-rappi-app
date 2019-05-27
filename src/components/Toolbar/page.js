import React from 'react'
import Search from '../Search'

const Page = (props) => {
    const {
        productSortCriteria,
        searchByProductName,
        searchTerms,
        clearSearch
      } = props;
      
    //(productSortCriteria !== 0) &&
    return (
        (productSortCriteria !== 0) &&
        <div>
            <div className="col s12 l9 padtop">
                <Search 
                    searchTerms={searchTerms} 
                    handleChange={searchByProductName} 
                    handleClick={clearSearch} />  
            </div>
        </div>
    )
}

export default Page
