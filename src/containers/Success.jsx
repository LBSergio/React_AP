import React from 'react';
import '@Scomponents/Success.css';

const Success = () => {
    return(
        <div className='Success'>
            <div className='Success-content'>
                <h2>
                    Thanks for shopping at our shop.
                </h2>
                <span>
                   Your order will arrive in the next few days. 
                </span>
                <div className='Success-map'>
                    Google maps
                </div>
            </div>
        </div>
    );
}

export { Success };