import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';

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

`;

function App() {
  return (
    <Container className="App">
      <Header />
      <main>
        <section className="main-wrapper">    
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="buy-btn fordsktop text-right">
                            <a href="#" className="btn">Buy on Uniswap</a>
                        </div>
                        {/* <div className="transfer-cntnt text-center">
                            <p className="t-sky mb-0">Momentum protects its store of value by applying a variable momentum burn fee on transactions. Get paid dividends by holding this value and supporting the value risk of a transaction.</p> 
                            <p className="text-white mb-0"><b>Together we #gainmonentum</b></p>
                        </div> */}
                        <div className="transfer-amountbox t-white">
                            <input type="number" max="50" min="-50" value="0" className="form-control" placeholder="input your transfer amount" id="transperc"/>
                            <div className="amount-percentage-box">
                                <div className="amount-percentage-midle">
                                  <div className="percentage-height" style={{ height: '50%' }}></div> 
                                </div>
                                <div className="amount-percentage-circle animate__animated" style={{ bottom: '34%' }}>
                                    <div className="amount-percentage-circle-inr">
                                        <h3>0% <span>VMB</span> </h3> 
                                    </div>
                                    <div className="puller-box"></div>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap btn-holder justify-content-center">
                                <div className="btnbox"><span>650000 XMM - 5.66% Burned</span></div>
                                <div className="btnbox"><span>Total tokens : 72,639,219.00</span></div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <ul className="nav social justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src="images/social1.png"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src="images/social2.png"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src="images/social3.png"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src="images/social4.png"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src="images/social5.png"/></a>
                        </li>
                    </ul>
                    <div className="ftr-menu">
                        <ul className="nav justify-content-center">
                            <li><a href="#">Pools/stake</a></li>
                            <li><a href="#">About Momentum</a></li>
                            <li><a href="#">About VMB : Variable momentum burn</a></li>
                            <li><a href="#">White paper</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </section>
      </main>
    </Container>
  );
}

export default App;
