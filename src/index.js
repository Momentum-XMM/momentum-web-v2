import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/bootstrap.min.css';
// import './styles/fontawesome-all.min.css';
// import './styles/owl.carousel.min.css';
import './styles/owl.theme.default.min.css';
import './styles/jquery.fancybox.min.css';
import './styles/animate.min.css';
import './styles/custom.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
