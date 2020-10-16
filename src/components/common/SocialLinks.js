import React from 'react';

const links = [
    {
        link: "https://discord.gg/gQwvNnx",
        image: "images/discord.png"
    },
    {
        link: "https://etherscan.io/token/0x9a7a4c141a3bcce4a31e42c1192ac6add35069b4",
        image: "images/etherscan.png"
    },
    {
        link: "https://github.com/Momentum-XMM",
        image: "images/github.png"
    },
    {
        link: "https://t.me/xmmtoken",
        image: "images/telegram.png"
    },
    {
        link: "https://twitter.com/MomentumXMM",
        image: "images/twitter.png"
    }
]

const SocialLinks = ({ ulClasses }) => {
    return (
        <ul className={ulClasses}>
            {links.map(link => (
                <li className="nav-item">
                    <a className="nav-link" href={link.link} target="_blank" rel="noopener noreferrer">
                        <img src={link.image} />
                    </a>
                </li>    
            ))}
        </ul>
    );
}

export default SocialLinks;
