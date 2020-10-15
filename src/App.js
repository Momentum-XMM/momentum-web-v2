import React from 'react';
// import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ROUTES from './constants/routes';

function App() {
    return (
        <Switch>
            <Route path={ROUTES.POOLS}>
                {/* <Devices /> */}
            </Route>
            <Route path={ROUTES.ABOUT}>
                {/* <Grows /> */}
            </Route>
            <Route path={ROUTES.HOME}>
                <Home />
            </Route>
        </Switch>
    );
}

export default App;
