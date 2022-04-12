import React from 'react';
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
                        Delete element
                    </button>
                </div>
            </div>
            <div className='Checkout-sidebar'>
                <h3>
                    Total price: $
                </h3>
                <button type='button'>
                    Continue with the order
                </button>
            </div>
        </div>
    );
}

export { Checkout };