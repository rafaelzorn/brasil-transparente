import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import AppBar from './components/AppBar';
import Drawer from './components/Drawer';

import store from './store';

import Routes from './routes';

import { Root, Main } from './styles/components';
import './styles/global';

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Root>
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
