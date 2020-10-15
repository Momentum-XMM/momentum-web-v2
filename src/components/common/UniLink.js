import React from 'react';
import styled from 'styled-components';

const link = 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x9a7a4c141a3bcce4a31e42c1192ac6add35069b4';

const StyledLink = styled.a`
    &.link-button {
        padding: 15px 20px!important;
    }

    .uniswap-logo {
        height: 34.7px;
        width: 30px;
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
        </StyledLink>
    );
}

export default UniLink;
