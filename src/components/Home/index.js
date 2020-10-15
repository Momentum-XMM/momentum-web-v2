import React from 'react';
// import styled from 'styled-components';
import UniLink from '../common/UniLink';

const Home = () => {
    return (
        <div className="row align-items-center">
            <div className="col-lg-12">
                <div className="buy-btn fordsktop text-right">
                    <UniLink />
                </div>
                <div className="transfer-cntnt text-center">
                    {/* <p className="t-sky mb-0">Momentum protects its store of value by applying a variable momentum burn fee on transactions. Get paid dividends by holding this value and supporting the value risk of a transaction.</p> 
                    <p className="text-white mb-0"><b>Together we #gainmonentum</b></p> */}
                </div>
                <div className="transfer-amountbox t-white">
                    {/* <input type="number" max="50" min="-50" value="0" className="form-control" placeholder="input your transfer amount" id="transperc"/>
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
                    </div>     */}
                </div>
            </div>
        </div>
    );
}

export default Home;
