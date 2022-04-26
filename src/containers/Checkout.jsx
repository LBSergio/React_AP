import React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '@context/AppContext';
import '@Scomponents/Checkout.css';

const Checkout = () => {
    const { state, removeFromCart } = React.useContext( AppContext );
    const { cart } = state;

    const handleRemove = (product, index) => () => {
        removeFromCart(product, index);
    }

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    return(
        <div className='Checkout'>
            <div className='Checkout-content'>
                {cart.length > 0 
                    ? <h3>
                        Order list
                    </h3>
                    : 
                    <h3>
                        Without orders
                    </h3>
                }
                { cart.map((item, index) => (
                    <div className='Checkout-item'>
                    <div className='Checkout-element'>
                        <h4>
                            {item.title}
                        </h4>
                        <span>
                            ${item.price}
                        </span>
                    </div>
                    <button type='button' onClick={handleRemove(item, index)}>
                        <i className='fas fa-trash-alt'/>
                    </button>
                </div>
                ))}                
            </div>
            { cart.length > 0 && (
                <div className='Checkout-sidebar'>
                <h3>
                    Total price: {handleSumTotal()}$
                </h3>
                <Link to='/checkout/information'>
                    <button type='button'>
                        Continue
                    </button>
                </Link>                
            </div>
            )}            
        </div>
    );
}

export { Checkout };