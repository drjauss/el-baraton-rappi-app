import React from 'react';

import Cart from '../Cart';
import Toolbar from '../Toolbar';
import Chip from '../Chip';
import Product from '../Product';

const Page = (props) => {
    
    const {
        cookies,
        sortProductsByAvailability,
        sortProductsByCategory,
        displayAvailability,
        productSortCriteria,
        searchByProductName,
        currentMinQuantity,
        currentMaxQuantity,
        currentMaxValue,
        currentMinValue,
        productList,
        searchTerms,
        priceRange,
        clearSearch,

        isSideVisible,
        addProductToCart,
        removeProductFromCart,
        processPayment
    
    } = props;
    return (
        <div className={"col s12 padtop "+ isSideVisible?"l9" : "l12" }>
            <Cart processPayment={processPayment} removeProductFromCart={removeProductFromCart} addProductToCart={addProductToCart} cookies={cookies} />      
            <Toolbar 
                cookies={cookies} 
                sortProductsByAvailability={sortProductsByAvailability}
                sortProductsByCategory={sortProductsByCategory}
                displayAvailability={displayAvailability}
                productSortCriteria={productSortCriteria}
                searchByProductName={searchByProductName}
                currentMinQuantity={currentMinQuantity}
                currentMaxQuantity={currentMaxQuantity}
                currentMaxValue={currentMaxValue}
                currentMinValue={currentMinValue}
                productList={productList}
                searchTerms={searchTerms}
                priceRange={priceRange}
                clearSearch={clearSearch}
            />
            {
                (productSortCriteria !== 0) &&
                <div className="col s12 m12 l9 padtop">
                    <Chip 
                        textValue="ID de Categor&iacute;a:" 
                        id={productSortCriteria} 
                        handleClick={sortProductsByCategory} />
                </div>
            }
            <div className="row padtop">
                {productList.map((product,index) => {
                    return  (
                                (productSortCriteria === 0) 
                                || (product.sublevel_id === productSortCriteria)
                            ) &&
                            (
                                product.available
                                ? displayAvailability.available 
                                : displayAvailability.unavailable
                            ) &&
                            ((product.name.toLowerCase().indexOf(searchTerms.toLowerCase())) !== -1) &&
                            (
                                ((parseInt(product.price.slice(1).replace(',',''),10)) >= currentMinValue) &&
                                ((parseInt(product.price.slice(1).replace(',',''),10)) <= currentMaxValue) 
                            ) &&
                            (
                                (product.quantity >= currentMinQuantity) &&
                                (product.quantity <= currentMaxQuantity)
                            ) &&
                            <Product
                                productSublevelId={product.sublevel_id}
                                productAvailable={product.available}
                                productQuantity={product.quantity}
                                searchTerms={searchTerms}
                                productPrice={product.price}
                                productName={product.name}
                                productId={product.id}
                                cookies={cookies}
                                key={index}

                                addProductToCart={addProductToCart}
                            />
                })}
            </div>
        </div>
    )
}

export default Page;