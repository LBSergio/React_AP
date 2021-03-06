import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Layout } from '@components/Layout.jsx';
import { Home } from '@containers/Home.jsx';
import { Checkout } from '@containers/Checkout';
import { Payment } from '@containers/Payment';
import { Success } from '@containers/Success';
import { Information } from '@containers/Information.jsx';
import { NotFound } from '@containers/NotFound';
import { AppContext } from '@context/AppContext';
import { useInitialState } from '@hooks/useInitialState';
import '@Scomponents/App.css';

const App = () => {
    const initialState = useInitialState();

    return(
        <AppContext.Provider value={ initialState }>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path='/'  element={ <Home/> }/>
                        <Route exact path='/checkout'  element={ <Checkout/> }/>
                        <Route exact path='/checkout/information'  element={ <Information/> }/>
                        <Route exact path='/checkout/payment'  element={ <Payment/> }/>
                        <Route exact path='/checkout/success'  element={ <Success/> }/>
                        <Route path='*' element={ <NotFound/> }/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export { App };