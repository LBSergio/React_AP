import React from 'react';
import { AppContext } from '@context/AppContext';
import { useNavigate } from 'react-router-dom';
import '@Scomponents/Payment.css';

const Payment = () => {
    const { state } = React.useContext(AppContext);
    const { cart } = state;
    const history = useNavigate();

    const handlePay = () => {
        history('/checkout/success');
    }


    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    return(
        <div className='Payment'>
            <div className='Payment-content'>
                <h3>
                    {cart.map((item, index) => (
                        <div className='Payment-item' key={index}>
                            <div className='Payment-element'>
                                <h4>
                                    {item.title}
                                </h4>
                                <span>
                                    ${item.price}
                                </span>
                            </div>
                        </div>  
                    ))}
                </h3>
                <button type='button' className='Payment-button' onClick={handlePay}>
                    Pay with Paypal
                </button>
                <span>
                    {handleSumTotal()}
                </span>
            </div>
            <div/>
        </div>
    );
}

export { Payment };