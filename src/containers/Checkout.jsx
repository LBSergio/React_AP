import React from 'react';
import { Link } from 'react-router-dom';
import '@Scomponents/Checkout.css';

const Checkout = () => {
    return(
        <div className='Checkout'>
            <div className='Checkout-content'>
                <h3>Order list</h3>
                <div className='Checkout-item'>
                    <div className='Checkout-element'>
                        <h4>

                        </h4>
                        <span>

                        </span>
                    </div>
                    <button type='button'>
                        <i className='fas fa-trash-alt'/>
                    </button>
                </div>
            </div>
            <div className='Checkout-sidebar'>
                <h3>
                    Total price: $
                </h3>
                <Link to='/checkout/information'>
                    <button type='button'>
                        Continue
                    </button>
                </Link>                
            </div>
        </div>
    );
}

export { Checkout };