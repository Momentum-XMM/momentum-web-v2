import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/bootstrap.min.css';
import './styles/custom.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: [
            'Russo One: 400',
            'Open Sans: 400, 600'
        ]
    }
})
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
