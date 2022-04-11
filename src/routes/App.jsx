import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from '@containers/Home.jsx';
import { Checkout } from '@containers/Checkout';
import { Payment } from '@containers/Payment';
import { Success } from '@containers/Success';
import { Information } from '@containers/Information.jsx';
import { NotFound } from '@containers/NotFound';

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/'  element={ <Home/> }/>
                <Route exact path='/checkout'  element={ <Checkout/> }/>
                <Route exact path='/checkout/information'  element={ <Information/> }/>
                <Route exact path='/checkout/payment'  element={ <Payment/> }/>
                <Route exact path='/checkout/success'  element={ <Success/> }/>
                <Route path='*' element={ <NotFound/> }/>
            </Routes>
        </BrowserRouter>
    );
}

export { App };