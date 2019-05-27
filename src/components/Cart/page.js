import React from 'react';

import './style.css';

const Page = ({cookies, turnOffPulse, isPulseActive, addProductToCart, removeProductFromCart, processPayment}) => {

    return (
        <div>
            <div className="fixed-action-btn">
                <a onClick={turnOffPulse} href="#cart" className={"btn-floating btn-large red modal-trigger hoverable " + (isPulseActive? "pulse":"")}>
                    <i className="fas fa-shopping-basket"></i>
                </a>
                {  cookies.get('cartProducts')
                && cookies.get('cartProducts').length !== 0
                && <span 
                    className="badge badge-fab grey darken-3 white-text bold" 
                    data-badge-caption="">
                        {cookies.get('cartProducts').length}
                    </span>
                }
            </div>
            <div id="cart" className="modal modal-fixed-footer">
                <div className="modal-content">
                    <h4 className="bold red-text text-darken-2 center-align">Productos en el carrito</h4>
                    {
                        cookies.get('cartProducts') && (cookies.get('cartProducts').length > 0)
                        ?
                        (<table className="striped centered responsive-table">
                            <thead>
                                <tr>
                                    <th>Nombre del Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Ajustes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                cookies.get('cartProducts') &&
                                cookies.get('cartProducts').map((product,index)=>{
                                return (
                                    <tr key={index}>
                                        <td className="bold">{product.productName}</td>
                                        <td className="Bold">{product.productPrice}</td>
                                        <td>
                                            <div className="row">
                                                <div className="col m8 s12">
                                                    <span className="Cart_lh flow-text bold center-align">
                                                    {product.amount}/{product.productQuantity}
                                                    </span>
                                                </div>
                                                <div className="col m4 s12">
                                                    <span onClick={()=>{addProductToCart(1,product)}} className="yellow darken-2 waves-effect waves-light btn-small">
                                                        <i className="fas fa-plus">
                                                        </i>
                                                    </span>
                                                    <span onClick={()=>{addProductToCart(-1,product)}} className="yellow darken-2 waves-effect waves-light btn-small">
                                                    <i className="fas fa-minus">
                                                    </i>
                                                </span>
                                                </div>
                                            </div>
                                            
                                            
                                        </td>
                                        <td>
                                            <span onClick={()=>{removeProductFromCart(product.productId)}} className="red darken-2 waves-effect waves-light btn-small">
                                                <i className="fas fa-trash-alt">
                                                </i>
                                            </span>
                                        </td>
                                    </tr>
                                )
                                })}
                            </tbody>
                        </table>)
                        : (
                            <div className={"Cart_no-product-msg valign-wrapper center-align"}>
                            
                                <i className="fas fa-sad-tear"></i>
                                <h5 className="grey-text text-darken-3 bold">No tienes ningún artículo en la cesta</h5>

                            </div>
                        )
                    }
                </div>
                <div className="modal-footer ">
                <button className="modal-close waves-effect waves-green btn-flat"><i className="fas fa-times"></i></button>
                {cookies.get('cartProducts') && (cookies.get('cartProducts').length > 0) &&
                (<button onClick={processPayment} className="waves-effect waves-light btn red darken-3"><i className="fas fa-send"></i>Llevarmelo todo</button>)}
                </div>
            </div>
        </div>
    )
}

export default Page;
