import React from 'react';

import './style.css';

const Page = (props) => {
    const {
        cookies
    } = props;
    return (
        <div>
            <nav className="red darken-3">
                <div className="nav-wrapper">
                    <a href="#inicio" className="brand-logo center bold">El Barat&oacute;n</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="#cart" className="modal-trigger">
                            <i className="fas fa-shopping-basket"></i>
                            {  cookies.get('cartProducts') 
                            && cookies.get('cartProducts').length !== 0
                            && <span className="badge grey darken-3 white-text bold" data-badge-caption="">
                                    {cookies.get('cartProducts').length}
                            </span>
                            }
                        </a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Page;