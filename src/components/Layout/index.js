import React, {Component} from 'react';
import { withCookies } from 'react-cookie';
import Page from './page';

import productList from '../../data/products.json';
import categoriesList from '../../data/categories.json';

class Layout extends Component {
       // Constructor method
       constructor(props){
        super(props);

        //Price values
        const productPriceValues = productList.products.map((product)=>{
            return product.price.slice(1).replace(',','');
        });
        const minPrice = Math.min.apply( null, productPriceValues);
        const maxPrice = Math.max.apply( null, productPriceValues);

        //Quantity  Values
        const productQuantityValues = productList.products.map((product) => {
            return product.quantity;
        });
        const minQuantity = Math.min.apply( null, productQuantityValues);
        const maxQuantity = Math.max.apply( null, productQuantityValues);

        this.state = {
            // Sort Criteria that defines the ID of the selected category or 0 to display all
            "productSortCriteria":0,
            // List of products loaded from json file
            "productList":productList.products,
            // List of categories loaded from json file
            "categoriesList":categoriesList.categories,
            // Availability Display which stores the visibility of products by that field
            "displayAvailability":{
                "available":true,
                "unavailable":true
            },
            // -1, 0, 1: Whether is Descending, None or Ascending respectively
            // Sort by Price Descending, Ascending or none
            sortPriceOrder:0,
            // Sort by Availability Descending, Ascending or none
            sortAvailabilityOrder:0,
            // Sort by Quantity Descending, Ascending or none
            sortQuantityOrder:0,
            // Search Terms written by User in the input field
            searchTerms:"",
            // Minimum Price Value Obtained from the Product List
            minValue:minPrice,
            // Current Min Value Filter
            currentMinValue:minPrice,
            // Maximum Price Value Obtained from the Product List
            maxValue:maxPrice,
            // Current Max Value Filter
            currentMaxValue:maxPrice,
            // Product Minimum Quantity
            minQuantity,
            // Current Product Minimum Quantity
            currentMinQuantity: minQuantity,
            // Product Maximum Quantity
            maxQuantity,
            // Current Product Maximum Quantity
            currentMaxQuantity: maxQuantity
        };
        // Binded Methods
        this.sortProductsByAvailability = this.sortProductsByAvailability.bind(this);
        this.sortListByAvailability = this.sortListByAvailability.bind(this);
        this.sortProductsByCategory = this.sortProductsByCategory.bind(this);
        this.updateCurrentMinQuantity = this.updateCurrentMinQuantity.bind(this);
        this.updateCurrentMaxQuantity = this.updateCurrentMaxQuantity.bind(this);
        this.updateCurrentMinValue = this.updateCurrentMinValue.bind(this);
        this.updateCurrentMaxValue = this.updateCurrentMaxValue.bind(this);
        this.searchByProductName = this.searchByProductName.bind(this);
        this.sortListByQuantity = this.sortListByQuantity.bind(this);
        this.sortListByPrice = this.sortListByPrice.bind(this);
        this.resetSorting = this.resetSorting.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
    } //constructor method end

    // Sorts products by category receiving a Category ID as paremeter
    sortProductsByCategory(productSortCriteria){
        this.clearSearch();
        this.setState({productSortCriteria});
    } // sortProductsByCategory method end

    // Sorts products by availability receiving an object via parameter with the state changes
    // of the two different categories
    sortProductsByAvailability(displayAvailability){
        this.setState({displayAvailability})
    } //sortProductsByAvailability method end

    // Sorts Product List by its price attribute in descending or ascending order
    sortListByPrice(){
        let productList = this.state.productList;
        productList.sort((a,b)=> {
            this.setState({
                sortQuantityOrder:0,
                sortAvailabilityOrder:0
            });
            if(this.state.sortPriceOrder === 1){
                this.setState({sortPriceOrder:-1});
                return parseInt(a.price.slice(1).replace(',',''),10) - parseInt(b.price.slice(1).replace(',',''),10);
            }
            else{
                this.setState({sortPriceOrder:1});
                return parseInt(b.price.slice(1).replace(',',''),10) - parseInt(a.price.slice(1).replace(',',''),10);
            }
        })
    } // sortListByPrice method end

    // Sorts the Product List by its availability attribute in descending or ascending order
    sortListByAvailability(){
        let productList = this.state.productList;
        productList.sort((a,b)=>{
            this.setState({
                sortPriceOrder:0,
                sortQuantityOrder:0
            });
            if(this.state.sortAvailabilityOrder === 1){
                this.setState({sortAvailabilityOrder:-1});
                return a.available - b.available;
            }
            else{
                this.setState({sortAvailabilityOrder:1});
                return b.available - a.available;
            }
        })
    } // sortListByAvailability method end
     
    // Sorts Product List by its quantity attribute in descending or ascending order
    sortListByQuantity(){
        let productList = this.state.productList;
        productList.sort((a,b)=> {
            this.setState({
                sortPriceOrder:0,
                sortAvailabilityOrder:0
            });
            if(this.state.sortQuantityOrder === 1){
            this.setState({sortQuantityOrder:-1});
            return  a.quantity - b.quantity;
            }
            else{
            this.setState({sortQuantityOrder:1});
            return b.quantity - a.quantity;
            }
        })
    } // sortListByQuantity method end   

    // Sets the search term state using the value typed by user
    searchByProductName(e){
        e.preventDefault();
        this.setState({
            searchTerms: e.target.value
        });
    } // searchByProductName method end

    // Resets Product List sorting
    resetSorting(){
        this.setState({
            sortQuantityOrder:0,
            sortAvailabilityOrder:0,
            sortPriceOrder:0
        });
    }// resetSorting method end

    // Clears the search input and filters associated by setting the searchTerms state to default
    clearSearch(){
        this.setState({
            searchTerms:""
        });
    } // clearSearch method end

    updateCurrentMinValue(e){
        const value = parseInt(e.target.value,10);
        if(value < this.state.currentMaxValue){
            this.setState({
                currentMinValue: value
            })
        }
    }

    updateCurrentMaxValue(e){
        const value = parseInt(e.target.value,10);
        if(value > this.state.currentMinValue){
            this.setState({
                currentMaxValue: value
            })
        }
    }

    updateCurrentMaxQuantity(e){
        const value = parseInt(e.target.value,10);
        if(value > this.state.currentMinQuantity){
            this.setState({
                currentMaxQuantity:value
            })
        }
    }

    updateCurrentMinQuantity(e){
        const value = parseInt(e.target.value,10);
        if(value < this.state.currentMaxQuantity){
            this.setState({
                currentMinQuantity: value
            })
        }
    }

    render() {
        const {
            cookies
        } = this.props;

        return (
            <Page 
                cookies={cookies}

                categoriesList={this.state.categoriesList}
                currentMinQuantity={this.state.currentMinQuantity}      // rename to currentQuantityMin
                currentMaxQuantity={this.state.currentMaxQuantity}      // rename to currentQuantityMax
                currentMinValue={this.state.currentMinValue}            // rename to currentValueMax
                currentMaxValue={this.state.currentMaxValue}            // rename to currenntValueMin
                displayAvailability={this.state.displayAvailability}
                priceRange={this.state.priceRange}
                productList={this.state.productList}
                searchTerms={this.state.searchTerms}
                productSortCriteria={this.state.productSortCriteria}
                sortAvailabilityOrder={this.state.sortAvailabilityOrder} // rename to sortOrder
                sortPriceOrder={this.state.sortPriceOrder}               // rename to sortOrder
                sortQuantityOrder={this.state.sortQuantityOrder}         // rename to sortOrder
                minValue={this.state.minValue}
                maxValue={this.state.maxValue}
                minQuantity={this.state.minQuantity}
                maxQuantity={this.state.maxQuantity}

                clearSearch={this.clearSearch}
                resetSorting={this.resetSorting}
                searchByProductName={this.searchByProductName}
                sortListByAvailability={this.sortListByAvailability}
                sortListByPrice={this.sortListByPrice}
                sortListByQuantity={this.sortListByQuantity}
                sortProductsByAvailability={this.sortProductsByAvailability}
                sortProductsByCategory={this.sortProductsByCategory}
                sortProductsByPriceRange={this.sortProductsByPriceRange}
                updateCurrentMinQuantity={this.updateCurrentMinQuantity}
                updateCurrentMaxQuantity={this.updateCurrentMaxQuantity}
                updateCurrentMaxValue={this.updateCurrentMaxValue}
                updateCurrentMinValue={this.updateCurrentMinValue}
            />)
    }
}
export default withCookies(Layout);