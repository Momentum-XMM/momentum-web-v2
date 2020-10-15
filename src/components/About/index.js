import React from 'react';
import styled from 'styled-components';
import UniLink from '../common/UniLink';
import Infograpic from '../../pdfs/MomentumExplained.pdf';
import AuditReport from '../../pdfs/MomentumAuditReport.pdf';
import WhitePaper from '../../pdfs/MomentumWhitepaper.pdf';
import Roadmap from '../../pdfs/roadmap.png'

const Container = styled.div`
    p {
        font-size: 20px;
    }

    a.btn {
        font-size: 16px;
    }
`;

const LinkButton = ({ link, text }) => {
    return (
        <a
            href={link}
            class="btn modal-btn"
            target="_blank"
            rel="noopener noreferrer"
        >
            {text}
        </a>
    );
}

const About = () => {
    return (
        <Container class="row">
            <div class="col-lg-12">
                <div class="buy-btn fordsktop text-right">
                    <UniLink />
                </div>
                <div class="transfer-cntnt about-heading">
                    <h3 class="t-sky mb-0" style={{ fontWeight: 500 }}>About Momentum</h3>
                </div>
            </div>
            <div class="col-md-12">

                <div class="about-box text-white">
                    <div class="about-icon-img"><img src="images/about-icon1.png" /></div>
                    <h5 class="text-uppercase text-white">MOMENTUM EXPLAINED</h5>
                    <p class="t-sky">Momentum is a dynamic deflationary token</p>
                    <p>Two important values are maintained in the token contract: the Short Momentum and the Long Momentum, and token transfers will have an impact on these values</p>
                    <p>Transfers that move the Short Momentum closer to the Long Momentum will have a transfer fee of ~0.75%</p>
                    <p>Transfers that move the Short Momentum further away from the Long Momentum will be charged a destabilization fee between ~0.75% and ~3.5% on average, and in rare cases a little bit more</p>
                    <p>Both momentum values will be available on the home page and through functions in the contract</p>
                    <LinkButton
                        link={Infograpic}
                        text="VIEW OUR VISUAL INFOGRAPHIC"
                    />
                </div>
                
                <div class="about-box text-white">
                    <div class="about-icon-img"><img src="images/about-icon2.png" /></div>
                    <h5 class="text-uppercase text-white">MOMENTUM AUDITED</h5>
                    <p>The contract has been audited by QuillHash and there were no critical issues found</p>
                    <LinkButton
                        link={AuditReport}
                        text="VIEW AUDIT"
                    />
                </div>
                
                <div class="about-box text-white">
                    <div class="about-icon-img"><img src="images/about-icon3.png" /></div>
                    <h5 class="text-uppercase text-white">MOMENTUM CONTRACTS</h5>
                    <p>We believe transparency is key - please find all contracts and proof of locked liquidity on Etherscan.</p>
                    <p>91% of initial total supply provided as liquidity and locked until December 21, 2021</p>
                    <LinkButton
                        link="https://etherscan.io/token/0xb469899812f74ee43bffe2d2022590111da86425#balances"
                        text="VIEW LOCKED LIQUIDITY"
                    />
                    <LinkButton
                        link="https://etherscan.io/address/0xfdba6feecdf75d2be2595a048141da210b324315#tokentxns"
                        text="LOCKING TRANSFER TX"
                    />
                    <LinkButton
                        link="https://etherscan.io/address/0xfdba6feecdf75d2be2595a048141da210b324315#readContract"
                        text="RELEASE TIME"
                    />
                </div>
                <div class="about-box text-white">
                    <div class="about-icon-img"><img src="images/about-icon4.png" /></div>
                    <h5 class="text-uppercase text-white">MOMENTUM WHITEPAPER & ROADMAP</h5>
                    <LinkButton
                        link={WhitePaper}
                        text="MOMENTUM WHITEPAPER"
                    />
                    <LinkButton
                        link={Roadmap}
                        text="MOMENTUM ROADMAP"
                    />
                </div>
            </div>
        </Container>
    );
}

export default About;
