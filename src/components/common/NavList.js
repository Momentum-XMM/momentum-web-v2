import React from 'react';
import WhitePaper from '../../pdfs/MomentumWhitepaper.pdf';
import ROUTES from '../../constants/routes';

const items = [
    {
        link: ROUTES.POOLS,
        text: 'Pools'
    },
    {
        link: ROUTES.ABOUT,
        text: 'About'
    },
    {
        link: WhitePaper,
        text: 'White Paper',
        external: true
    }
]

const NavList = ({ ulClasses }) => {
    return (
        <ul className={ulClasses}>
            {items.map(item => (
                <li className="nav-item">
                    <a
                        className="nav-link"
                        href={item.link}
                        target={item.external && "_blank"}
                        rel={item.external && "noopener noreferrer"}
                    >
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default NavList;
