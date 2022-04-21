import React from 'react';
import { Product } from './Product';
import { AppContext } from '@context/AppContext';
import '@Scomponents/Products.css';

const Products = () => {
  const { state, addToCart } = React.useContext( AppContext );
  const { products } = state;

  const handleAddToCart = product => () => {
    addToCart(product);
  }

  return (
    <div className='Products'>
        <div className='Products-items'>
            {products.map(product => (
                <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
            ))}
        </div>
    </div>
  )
}

export { Products };