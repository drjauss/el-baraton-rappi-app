import React, {Component} from 'react';
import Page from './page';

export default class Main extends Component{

    addProductToCart(amount,{productId, productAvailable, productPrice, productName, productQuantity}){
        
        if(!productAvailable){
            this.alertToUser("Lo sentimos. El producto no se encuentra disponible en estos momentos.");
            return;
        }

        if(amount > productQuantity){
            this.alertToUser("La cantidad solicitada es superior a la disponible. Por favor ingresa una cifra menor.");
            return
        }

        let product = {
            productId,
            productPrice,
            productName,
            amount,
            productAvailable,
            productQuantity
        };

        let cookies = this.props.cookies;

        return cookies.get('cartProducts') // check cookie existence
        ? cookies.get('cartProducts').length > 0 // cookie exists, now check it's populated
            ? (cookies.get('cartProducts').find( item => item.productId === productId)) // check if cookie contains the product inside
                ? ((cookies.get('cartProducts').find( item => item.productId === productId)).amount + amount) < productQuantity // product contained, checking quantity availability
                    ? this.increaseProductAmount(product,amount)
                    : this.alertToUser("Ups! no podemos superar el limite de productos disponibles:"+amount+"  "+productQuantity)
                : cookies.set('cartProducts', cookies.get('cartProducts').concat(product),{path:'/'})
            : cookies.set('cartProducts',[].concat(product),{path:'/'}) // cookie exists, but it's empty. Lets store it
        : cookies.set('cartProducts',[].concat(product),{path:'/'}); // We set the cookie and store the product available
    }

    alertToUser(content){
        alert(content);
    }

    increaseProductAmount(product,amount){
        const {cookies} = this.props;
        const newQuantity = cookies.get('cartProducts').find(item => item.productId === product.productId).amount + amount;
        cookies.set('cartProducts', (
            cookies.get('cartProducts').map((p)=>{
                if(p.productId === product.productId){
                    if(newQuantity > 0){
                        p.amount = newQuantity;
                    }
                    else{
                        this.alertToUser("No se puede disminuir mas la cantidad. Te recomendamos eliminar el producto.")
                    }
                }
                return p;
            })),
        {path:'/'})
    }

    removeProductFromCart(productId){
        const {cookies} = this.props;

        const newcookie = cookies.get('cartProducts').filter( (product) => {
            if(product.productId === productId){
                return false;
            }
            return true;
        });

        cookies.remove('cartProducts',{path:'/'});
        cookies.set('cartProducts', newcookie,{path:'/'});
    }

    processPayment(){
        const {cookies} = this.props;

        cookies.remove('cartProducts',{path:'/'});
    }

    render(){

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
        
            productSublevelId,
            productAvailable,
            productQuantity,
            productPrice,
            productName,
            productId,

        } = this.props;

        return(
            <Page 
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

                productSublevelId={productSublevelId}
                productAvailable={productAvailable}
                productQuantity={productQuantity}
                productPrice={productPrice}
                productName={productName}
                productId={productId}

                addProductToCart={this.addProductToCart.bind(this)}
                removeProductFromCart={this.removeProductFromCart.bind(this)}
                processPayment={this.processPayment.bind(this)}
            />
        )
    }
}