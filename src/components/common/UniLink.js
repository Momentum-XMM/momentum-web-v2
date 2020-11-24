import React from 'react';
import styled from 'styled-components';
import { themeRed } from '../../constants/colors';

const link = 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x9a7a4c141a3bcce4a31e42c1192ac6add35069b4';

const StyledLink = styled.a`
    &.link-button {
        padding: 15px 20px!important;
        ${'' /* border: 1px solid ${themeRed}; */}
        ${'' /* background: linear-gradient(86deg, #4f0e0e 0%, #4c0e0e 84%); */}
    }

    .uniswap-logo {
        height: 34.7px;
        width: 30px;
    }

    .buy-text {
        margin-top: 8px;
    }
`;

const UniLink = () => {
    return (
        <StyledLink
            href={link}
            className="btn link-button"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img className="uniswap-logo" src="images/uniswap-white.png" />
            <div className="buy-text">
                BUY XMM
            </div>
        </StyledLink>
    );
}

export default UniLink;
