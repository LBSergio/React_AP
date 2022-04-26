import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '@context/AppContext';
import '@Scomponents/Information.css';

const Information = () => {
    const { state, addToBuyer } = React.useContext( AppContext );
    const { cart } = state;
    const form = React.useRef(null);
    const history = useNavigate();

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        // const buyer = {
        //     'name': formData.get('name'),
        //     'email': formData.get('email'),
        //     'address': formData.get('address'),
        //     'apto': formData.get('apto'),
        //     'city': formData.get('city'),
        //     'country': formData.get('country'),
        //     'state': formData.get('state'),
        //     'cp': formData.get('cp'),
        //     'phone': formData.get('phone'),
        // }
        const buyer = Object.fromEntries(formData);
        addToBuyer(buyer);
        history('/checkout/payment');
    }

    return(
        <div className='Information'>
            <div className='Information-content'>
                <div className='Information-head'>
                    <h2>
                        Information of contact
                    </h2>
                </div>
                <div className='Information-form'>
                    <form ref={form}>
                        <input type='text' placeholder='Full name' name='name'/>
                        <input type='text' placeholder='Email' name='email'/>
                        <input type='text' placeholder='Address' name='address'/>
                        <input type='text' placeholder='Apto' name='apto'/>
                        <input type='text' placeholder='City' name='city'/>
                        <input type='text' placeholder='Country' name='country'/>
                        <input type='text' placeholder='State' name='state'/>
                        <input type='text' placeholder='CP' name='cp'/>
                        <input type='text' placeholder='Phone' name='phone'/>
                    </form>
                </div>
                <div className='Information-buttons'>
                    <div className='Information-back'>
                        <Link to='/checkout'>
                            Back
                        </Link>
                    </div>
                    <div className='Information-next'>
                        <button type='button' onClick={handleSubmit}> 
                            Pay
                        </button>
                    </div>
                </div> 
            </div>
            <div className='Information-sidebar'>
                <h3>
                    Order
                </h3>                
                {cart.map((item, index) =>(                                                          
                    <div className='Information-item' key={index}>
                        <div className='Information-element'>
                            <h4>
                                {item.title}
                            </h4>
                            <span>
                                ${item.price}
                            </span>
                        </div>
                    </div>                            
                ))}
            </div>
        </div>
    );
}

export { Information };