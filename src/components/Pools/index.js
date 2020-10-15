import React from 'react';
// import styled from 'styled-components';
import UniLink from '../common/UniLink';

const Home = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="buy-btn fordsktop text-right">
                        <UniLink />
                    </div>
                    <div className="transfer-cntnt text-center pooling-header">
                        <h3 className="t-sky mb-0" style={{ fontWeight: 500 }}>Pools</h3>
                    </div>
                </div>
            </div>
            <div className="row align-items-stretch pooling-wrapper">
                <div className="col-md-4 col-sm-6 text-white">
                    <div className="pooling-box text-center">
                        <h6 className="text-white"><span><img src="images/icon1.png"/></span>XMM / ETH<span><img src="images/icon1.png"/></span></h6>
                        <p>0.75% - 3.5% fee <br/> 0x9a7a4c141a3bcce4a31e42c1192ac6add35069b4</p>
                        <a href="#" className="btn">Buy</a>
                        <a href="#" className="btn">Pool</a>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 text-white">
                    <div className="pooling-box text-center">
                        <h6 className="text-white"><span><img src="images/icon1.png"/></span>XMM<span className="t-sky">x</span> / ETH<span><img src="images/icon1.png"/></span></h6>
                        <p>XMMx = XMM/ETH Uniswap liquidity token 0xb469899812f74ee43bffe2d2022590111da86425</p>
                        <a href="#" className="btn">Buy</a>
                        <a href="#" className="btn">Pool</a>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 text-white">
                    <div className="pooling-box text-center">
                        <h6 className="text-white"><span><img src="images/icon1.png" /></span>XMM<span className="t-sky">x</span> / ETH /LINK/ SNX<span><img src="images/icon1.png" /></span></h6>
                        <p>25/25/25/25 split 0x9a7a4c141a3bcce4a31e42c1192ac6add35069b4</p>
                        <a href="#" className="btn">BALANCER</a>
                        <a href="#" className="btn">POOLS.FYI</a>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 text-white">
                    <div className="pooling-box text-center">
                        <h6 className="text-white"><span><img src="images/icon1.png" /></span>XMM<span className="t-sky">x</span> / ETH /LINK/ SNX<span><img src="images/icon1.png" /></span></h6>
                        <p>25/25/25/25 split 0x9a7a4c141a3bcce4a31e42c1192ac6add35069b4</p>
                        <a href="#" className="btn">BALANCER</a>
                        <a href="#" className="btn">POOLS.FYI</a>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 text-white">
                    <div className="pooling-box text-center">
                        <h6 className="text-white"><span><img src="images/icon1.png" /></span>XMM<span className="t-sky">x</span> / ETH /LINK/ SNX<span><img src="images/icon1.png" /></span></h6>
                        <p>25/25/25/25 split 0x9a7a4c141a3bcce4a31e42c1192ac6add35069b4</p>
                        <a href="#" className="btn">BALANCER</a>
                        <a href="#" className="btn">POOLS.FYI</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
