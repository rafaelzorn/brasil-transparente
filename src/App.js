import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import AppBar from './components/AppBar';
import Drawer from './components/Drawer';
import Routes from './routes';

import store from './store';

import { Root, Main } from './styles/components';
import './styles/global';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Root>
                <ToastContainer />
                <AppBar />
                <Drawer />

                <Main>
                    <div className="toolbar" />

                    <Routes />
                </Main>
            </Root>
        </BrowserRouter>
    </Provider>
);

export default App;
