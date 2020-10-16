import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UniLink from '../common/UniLink';
import ROUTES from '../../constants/routes';
import Web3 from 'web3';
import contract from '../../abis/Momentum.json';
import { INFURA } from '../../keys';

const web3 = new Web3(new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${INFURA}`));
const momentumContract = new web3.eth.Contract(contract.abi, '0x9a7a4c141a3bcce4a31e42c1192ac6add35069b4');

const DECIMALS = 10000000000;

const Container = styled.div`
    .title-text {
        font-size: 21px;
    }

    .amount-percentage-box {
        display: flex;
        justify-content: center;
    }

    .topbox {
        span::after {
            height: 0px;
        }
    }

    @media (max-width: 767px) {
        .topbox {
            margin-bottom: 0px;
        }
    }

    .transfer-amountbox .btnbox span {
        color: white;
        text-transform: unset;
        font-weight: 500;
    }

    .status-box {
        .title-text {
            padding-bottom: 10px;
        }

        .short {
            padding-bottom: 5px;
        }
    }
`;

const percentBurnt = currentSupply => {
    const TOTAL_SUPPLY = 77000000;
    const amountBurnt = TOTAL_SUPPLY - currentSupply;
    return ((amountBurnt / TOTAL_SUPPLY) * 100).toFixed(2);
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const Home = () => {

    const [momentum, setMomentum] = useState({});

    useEffect(() => {
        const getMomentum = async () => {
            const { 0: SM, 1: LM, 2: TS } = await momentumContract.methods.getMomentumAndSupply().call();
            setMomentum({ long: LM, short: SM, totalSupply: TS });
        }
        getMomentum();
    }, []);

    return (
        <Container className="row align-items-center">
            <div className="col-lg-12">
                <div className="buy-btn fordsktop text-right">
                    <UniLink />
                </div>
                <div className="transfer-cntnt text-center">
                    <p className="t-sky title-text">
                        Momentum is a dynamic deflationary token
                    </p> 
                    <p className="text-white mb-0">
                        <b>
                            <a href={ROUTES.ABOUT}>
                                More Info
                            </a>
                        </b>
                    </p>
                </div>
                <div className="transfer-amountbox t-white">
                    <div className="amount-percentage-box">
                        <div className="btnbox topbox">
                            <span>
                                <div className="status-box">
                                    <div className="title-text">
                                        Momentum Status
                                    </div>
                                    <div className="short">
                                        Short: {momentum.short && formatNumber((momentum.short / DECIMALS).toFixed(0))}
                                    </div>
                                    <div className="long">
                                        Long: {momentum.long && formatNumber((momentum.long / DECIMALS).toFixed(0))}
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap btn-holder justify-content-center">
                        <div className="btnbox">
                            <span>
                                🔥 {momentum.totalSupply && percentBurnt(momentum.totalSupply / DECIMALS)}% Burned 🔥
                            </span>
                        </div>
                        <div className="btnbox">
                            <span>
                                💰 Supply: {momentum.totalSupply && formatNumber((momentum.totalSupply / DECIMALS).toFixed(0))} 💰
                            </span>
                        </div>
                    </div>    
                </div>
            </div>
        </Container>
    );
}

export default Home;
