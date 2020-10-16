import React from 'react';
import styled from 'styled-components';
import SocialLinks from './SocialLinks';
import NavList from './NavList';

const StyledFooter = styled.footer`
    & {
        position: absolute;
        bottom: 18px;
        width: 100%;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <div className="container">
                <SocialLinks ulClasses="nav social justify-content-center" />
                {/* <div className="ftr-menu">
                    <NavList ulClasses="nav justify-content-center" />
                </div> */}
            </div>
        </StyledFooter>
    );
}

export default Footer;
