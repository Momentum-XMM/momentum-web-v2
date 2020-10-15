import React from 'react';

const link = 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x9a7a4c141a3bcce4a31e42c1192ac6add35069b4';

const UniLink = () => {
    return (
        <a href={link} className="btn" target="_blank" rel="noopener noreferrer">
            <img className="uniswap-logo" src="images/uniswap-white.png" />
        </a>
    );
}

export default UniLink;
