import React from 'react'

const Page = (props) => {
    const {
        productName,
        productQuantity,
        productPrice,
        productAvailable,
        productSublevelId,

        addProductToCart

    } = props;
    return (
        <div>
            <div className="col s12 m4 l3">
                <div className="card white hoverable">
                    <div className="card-content white-text">
                        <span className="card-title red-text text-darken-4 bold">
                            {productName}
                        </span>
                        <table className="striped">
                            <tbody className="grey-text text-darken-3">
                                <tr>
                                    <td className="bold">Cantidad</td>
                                    <td>
                                        {productQuantity}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="bold">
                                        Precio
                                    </td>
                                    <td>
                                        {productPrice}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="bold">
                                        Disponibilidad
                                    </td>
                                    <td className={productAvailable? "":"red-text text-darken-2"}>
                                        <i className={"fas " + (productAvailable ? "fa-check green-text text-lighten-2": "fa-times red-text text-darken-2")}></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="bold">
                                        Categor&iacute;a
                                    </td>
                                    <td>
                                        {productSublevelId}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button 
                            className={"btn-floating btn-large halfway-fab waves-effect waves-light tooltipped " + (productAvailable ? "green lighten-2" : "red darken-2")} 
                            data-position="bottom"
                            data-tooltip={productAvailable ? "Agregar al carrito" : "Producto no disponible"}>
                                <i
                                    onClick={()=>{addProductToCart(1,props)}}
                                    className={"fas " + (productAvailable? "fa-cart-plus" : "fa-times")}>
                                </i>
                        </button>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Page
