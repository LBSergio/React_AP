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

    return {
        addToCart,
        removeFromCart,
        state,
    };
}

export { useInitialState };