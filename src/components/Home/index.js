import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Web3 from 'web3';
import UniLink from '../common/UniLink';
import ROUTES from '../../constants/routes';
import contract from '../../abis/Momentum.json';
import { INFURA } from '../../keys';
import { MOMENTUM_DECIMALS_e_10, MOMENTUM_ADDRESS } from '../../constants/contracts';

const web3 = new Web3(new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${INFURA}`));
const momentumContract = new web3.eth.Contract(contract.abi, MOMENTUM_ADDRESS);

const borderColor = 'rgb(255 255 255 / 0.45)';

const Container = styled.div`
    font-family: 'Russo One';
    letter-spacing: 0.03em;
    font-size: 24px;

    .lead-text {
        color: white;
        font-family: 'Open Sans';
        font-size: 21px;
    }

    .info-link {
        font-family: 'Open Sans';
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

    .transfer-amountbox {
        border: 1px solid ${borderColor};

        .btnbox span {
            border: 1px solid ${borderColor};
            color: rgb(255 255 255 / 0.8);
            text-transform: unset;
            font-size: unset;

            &::after {
                background: ${borderColor};
            }
        }

        .btn-holder::after {
            background-color: ${borderColor};
        }
    }

    .status-box {
        .title-text {
            padding-bottom: 10px;
            text-decoration: underline;
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

const formatNumber = num => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
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
                    <p className="t-sky title-text lead-text">
                        Dynamic Deflationary Token
                    </p> 
                    <p className="text-white mb-0">
                        <b>
                            <a href={ROUTES.ABOUT} className="info-link">
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
                                        Status
                                    </div>
                                    <div className="short">
                                        Short: {momentum.short && formatNumber((momentum.short / MOMENTUM_DECIMALS_e_10).toFixed(0))}
                                    </div>
                                    <div className="long">
                                        Long: {momentum.long && formatNumber((momentum.long / MOMENTUM_DECIMALS_e_10).toFixed(0))}
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap btn-holder justify-content-center">
                        <div className="btnbox">
                            <span>
                                🔥 {momentum.totalSupply && percentBurnt(momentum.totalSupply / MOMENTUM_DECIMALS_e_10)}% Burned 🔥
                            </span>
                        </div>
                        <div className="btnbox">
                            <span>
                                ⚡️ Supply: {momentum.totalSupply && formatNumber((momentum.totalSupply / MOMENTUM_DECIMALS_e_10).toFixed(0))} ⚡️
                            </span>
                        </div>
                    </div>    
                </div>
            </div>
        </Container>
    );
}

export default Home;
