import React from 'react';
import styled from 'styled-components';
import { themeRed } from '../../constants/colors';

const links = [
    {
        link: "https://discord.gg/gQwvNnx",
        image: "images/discord-red.png"
    },
    {
        link: "https://etherscan.io/token/0x9a7a4c141a3bcce4a31e42c1192ac6add35069b4",
        image: "images/etherscan-red.png"
    },
    {
        link: "https://github.com/Momentum-XMM",
        image: "images/github-red.png"
    },
    {
        link: "https://t.me/xmmtoken",
        image: "images/telegram-red.png"
    },
    {
        link: "https://twitter.com/MomentumXMM",
        image: "images/twitter-red.png"
    }
];

const StyledList = styled.ul`
    img {
        color: ${themeRed};
    }
`;

const SocialLinks = ({ ulClasses }) => {
    return (
        <StyledList className={ulClasses}>
            {links.map(link => (
                <li className="nav-item">
                    <a className="nav-link" href={link.link} target="_blank" rel="noopener noreferrer">
                        <img src={link.image} />
                    </a>
                </li>    
            ))}
        </StyledList>
    );
}

export default SocialLinks;
