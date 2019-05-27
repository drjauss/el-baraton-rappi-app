import React from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Main from '../Main';

import './style.css';

const Page = (props) => {
    const {
        cookies
    } = props;
    
    return (
        <div>
            <Header cookies={cookies} />
            <div className="row">
                <Sidebar
                    sortProductsByAvailability={props.sortProductsByAvailability}
                    sortProductsByPriceRange={props.sortProductsByPriceRange}
                    updateCurrentMinQuantity={props.updateCurrentMinQuantity}
                    sortAvailabilityOrder={props.sortAvailabilityOrder}
                    updateCurrentMaxQuantity={props.updateCurrentMaxQuantity}
                    sortProductsByCategory={props.sortProductsByCategory}
                    displayAvailability={props.displayAvailability}
                    sortListByAvailability={props.sortListByAvailability}
                    updateCurrentMaxValue={props.updateCurrentMaxValue}
                    updateCurrentMinValue={props.updateCurrentMinValue}
                    currentMinQuantity={props.currentMinQuantity}
                    currentMaxQuantity={props.currentMaxQuantity}
                    sortQuantityOrder={props.sortQuantityOrder}
                    sortListByQuantity={props.sortListByQuantity}
                    currentMaxValue={props.currentMaxValue}
                    currentMinValue={props.currentMinValue}
                    categoriesList={props.categoriesList}
                    sortPriceOrder={props.sortPriceOrder}
                    sortListByPrice={props.sortListByPrice}
                    productList={props.productList}
                    maxQuantity={props.maxQuantity}
                    minQuantity={props.minQuantity}
                    resetSorting={props.resetSorting}
                    minValue={props.minValue}
                    maxValue={props.maxValue}
                />
                <Main 
                    cookies={cookies} 
                    sortProductsByAvailability={props.sortProductsByAvailability}
                    sortProductsByCategory={props.sortProductsByCategory}
                    displayAvailability={props.displayAvailability}
                    productSortCriteria={props.productSortCriteria}
                    searchByProductName={props.searchByProductName}
                    currentMinQuantity={props.currentMinQuantity}
                    currentMaxQuantity={props.currentMaxQuantity}
                    currentMaxValue={props.currentMaxValue}
                    currentMinValue={props.currentMinValue}
                    productList={props.productList}
                    searchTerms={props.searchTerms}
                    priceRange={props.priceRange}
                    clearSearch={props.clearSearch}
                />
            </div>
        </div>
    )
};

export default Page;
