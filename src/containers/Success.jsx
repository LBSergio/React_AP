import React from 'react';
import { AppContext } from '@context/AppContext';
import { Map } from '@components/Map'; 
import '@Scomponents/Success.css';

const Success = () => {
    const {state} = React.useContext(AppContext);
    const {buyer} = state;

    return(
        <div className='Success'>
            <div className='Success-content'>
                <h2>
                    {`${buyer.name}, Thanks for shopping at our shop.`}
                </h2>
                <span>
                   Your order will arrive in the next few days. 
                </span>
                <div className='Success-map'>
                    <Map/>
                </div>
            </div>
        </div>
    );
}

export { Success };