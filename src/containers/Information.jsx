import React from 'react';
import '@Scomponents/Information.css';

const Information = () => {
    return(
        <div className='Information'>
            <div className='Information-content'>
                <div className='Information-head'>
                    <h2>
                        Information of contact
                    </h2>
                </div>
                <div className='Information-form'>
                    <form action=''>
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
                    <button type='button' className='Information-back'>
                        Back
                    </button>
                    <button type='button' className='Information-next'>
                        Pay
                    </button>
                </div> 
            </div>
            <div className='Information-sidebar'>
                <h3>
                    Order
                </h3>
                <div className='Information-item'>
                    <div className='Information-element'>
                        <h4>

                        </h4>
                        <span>

                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Information };