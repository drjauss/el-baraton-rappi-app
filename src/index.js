import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import Layout from './components/Layout';

const App = (
    <CookiesProvider>
    <Layout />
    </CookiesProvider>
);

ReactDOM.render(App,document.getElementById('app'));