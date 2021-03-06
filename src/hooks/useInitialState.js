import React from 'react';
import { initialState } from '../initialState';

const useInitialState = () => {
    const [state, setState] = React.useState(initialState);

    const addToCart = payload => {
        setState({
            ...state,
            cart: [
                ...state.cart,
                 payload
                ],
        });
    }

    const removeFromCart = (payload, indexToRemove) => {
        setState({
            ...state,
            cart: state.cart.filter((_, index) => index !== indexToRemove) 
        })
    }

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    const addNewOrder = payload => {
        setState({
          ...state,
          orders: [...state.orders, payload]
        })
      }

    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        state,
    };
}

export { useInitialState };