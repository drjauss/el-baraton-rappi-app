import React, {Component} from 'react';
import Page from './page';

export default class Sidebar extends Component {
    
    state = {
        boxVisibility : true
    }

    toggleVisibility(){
        this.setState(prevState => ({
            boxVisibility: !prevState.boxVisibility
        }));
    }

    render(){
        const {
            //filter buttons
            resetSorting,
            sortListByPrice,
            sortPriceOrder,
            sortListByAvailability,
            sortAvailabilityOrder,
            sortListByQuantity,
            sortQuantityOrder,

            //category
            categoriesList,
            sortProductsByCategory,

            //filterBox
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
       return(
            <Page 
                toggleVisibility={this.toggleVisibility.bind(this)}
                boxVisibility={this.state.boxVisibility}

                resetSorting={resetSorting}
                sortListByPrice={sortListByPrice}
                sortPriceOrder={sortPriceOrder}
                sortListByAvailability={sortListByAvailability}
                sortAvailabilityOrder={sortAvailabilityOrder}
                sortListByQuantity={sortListByQuantity}
                sortQuantityOrder={sortQuantityOrder}

                categoriesList={categoriesList}
                sortProductsByCategory={sortProductsByCategory}
            
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
       ) 
    }
}