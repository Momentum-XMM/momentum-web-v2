import React from 'react';
import styled from 'styled-components';
// import UniLink from '../common/UniLink';

const StyledPoolCard = styled.div`
    font-family: 'Open Sans';

    .pooling-box {
        padding: 20px;
        border: 1px solid rgba(255,255,255,0.45);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;

        .title {
            font-family: 'Open Sans';
            font-weight: 600;
            letter-spacing: 0.03em;
        }

        .text {
            margin-bottom: 20px;
            font-size: 18px;
            font-weight: 500;
        }

        .subtext {
            margin-bottom: 30px;
            font-size: 14px;
        }

        .btn {
            font-size: 15px;
            font-family: 'Open Sans';
        }

        @media (max-width: 1200px) {
            .btn {
                margin-bottom: 8px;
            }
        }
    }
`;

const PoolCard = ({ title, text, subtext, link1, link1text, link2, link2text }) => {
    return (
        <StyledPoolCard className="col-md-4 col-sm-6 text-white">
            <div className="pooling-box">
                <h5 className="text-white title">
                    {title}
                </h5>
                <p className="text">
                    {text}
                </p>
                {subtext && <p className="subtext">
                    {subtext}
                </p>}
                <div>
                    <a
                        href={link1}
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link1text}
                    </a>
                    {link2 && <a
                        href={link2}
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link2text}
                    </a>}
                </div>
            </div>
        </StyledPoolCard>
    );
}

const Pools = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    {/* <div className="buy-btn fordsktop text-right">
                        <UniLink />
                    </div> */}
                    <div
                        className="transfer-cntnt text-center pooling-header"
                        style={{ padding: '35px 0' }}
                    >
                        <h3 className="t-sky mb-0" style={{ fontWeight: 500, color: 'white' }}>Pools</h3>
                    </div>
                </div>
            </div>
            <div className="row align-items-stretch pooling-wrapper">
                <PoolCard
                    title="🔥 XMM / ETH 🔥"
                    text="Uniswap Pair"
                    // subtext="0x9a7a4c141a3bcce4a31e42c1192ac6add35069b4"
                    link1="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x9a7a4c141a3bcce4a31e42c1192ac6add35069b4"
                    link1text="Buy"
                    link2="https://app.uniswap.org/#/add/0x9a7a4C141a3BCCE4A31e42C1192Ac6Add35069b4/ETH"
                    link2text="Add"
                />
                <PoolCard
                    title="XMMx / ETH"
                    text="XMMx = XMM/ETH Uniswap LP"
                    // subtext="0xb469899812f74ee43bffe2d2022590111da86425"
                    link1="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xb469899812f74ee43bffe2d2022590111da86425"
                    link1text="Buy"
                    // link2="https://app.uniswap.org/#/add/0xb469899812f74ee43bffe2d2022590111da86425/ETH"
                    // link2text="Pool"
                />
                <PoolCard
                    title="DeFiat Rewards Pool"
                    text="Stake XMMx => Earn XMM"
                    subtext={<img src="images/defiat-logo.png" height="40px" />}
                    link1="https://defiat.net/dashboard/partners/0xfe78ebd1fe6ab976c058a795d9683d85c3929aed"
                    link1text="Rewards Pool"
                />
                <PoolCard
                    title="XMMx / ETH / LINK / SNX"
                    text="Balancer Pool"
                    subtext="25/25/25/25 split"
                    link1="https://pools.balancer.exchange/#/pool/0x953500397dbd43bf64321c4f54cd7b3f862c1bd6/"
                    link1text="Balancer"
                    // link2="https://pools.fyi/#/info/0x953500397dbd43bf64321c4f54cd7b3f862c1bd6"
                    // link2text="Pools.FYI"
                />
                <PoolCard
                    title="XMMx / WBTC"
                    text="Balancer Pool"
                    subtext="34/66 split"
                    link1="https://pools.balancer.exchange/#/pool/0xc3d407ce0a06530315c14c9f2374a16cf436461a/"
                    link1text="Balancer"
                    // link2="https://pools.fyi/#/info/0xc3d407ce0a06530315c14c9f2374a16cf436461a"
                    // link2text="Pools.FYI"
                />
            </div>
        </>
    );
}

export default Pools;
