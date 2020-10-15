import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './components/Home';
import Pools from './components/Pools';
import About from './components/About';
import Footer from './components/common/Footer';
import ROUTES from './constants/routes';

const Container = styled.div`
    & {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    main {
        flex: 1;
        display: grid;
    }

    .page-container {
        padding-bottom: 80px;
    }
`;

const App = () => {
    return (
        <Container>
            <Header />
            <main>
                <section className="main-wrapper">
                    <div className="container page-container">
                        <Switch>
                            <Route path={ROUTES.POOLS}>
                                <Pools />
                            </Route>
                            <Route path={ROUTES.ABOUT}>
                                <About />
                            </Route>
                            <Route path={ROUTES.HOME}>
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                    <Footer />
                </section>
            </main>
        </Container>
    );
}

export default App;
