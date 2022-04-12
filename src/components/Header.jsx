import React from 'react';
import { Link } from 'react-router-dom';
import '@Scomponents/Header.css';

export const Header = () => {
  return (
    <div className='Header'>
        <h1 className='Header-title'>
          <Link to='/'>
            Proyecto Avanzado SLB
          </Link>
        </h1>
        <div className='Header-checkout'>
          <Link to='/checkout'>
            <i className='fas fa-shopping-basket fa-2x'/>
          </Link>
        </div>
    </div>
  )
}