import React, { useEffect } from 'react';
import $ from 'jquery'; // lazy slide toggle copy for responsive menu
import SocialLinks from './SocialLinks';
import UniLink from './UniLink'
import NavList from './NavList';
import ROUTES from '../../constants/routes';

const Header = () => {

    useEffect(() => {
        $("#open-menu").click(function() {
            $(this).toggleClass("on");
            $("#navigation").slideToggle();
        });        
    }, [])

    return (
        <header className="site-header"> 
            <div className="container">
                <nav className="navbar navbar-expand navbar-dark fordsktop">
                    <div className="hdr-menu lefthead">
                        <a className="nav-link" href={ROUTES.HOME}><img src="images/text-logo.png"/></a>
                    </div>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarToggle" />
                    <div className="logo-holder d-flex justify-content-center align-items-center">
                        <a className="navbar-brand logo" href={ROUTES.HOME}><img src="images/logo.png"/></a>
                    </div>
                    <div className="hdr-menu">
                        <SocialLinks ulClasses="nav social justify-content-end" />
                        <NavList ulClasses="nav" />
                    </div>        
                </nav>
            </div>
            {/* Responsive */}
            <div className="container">
                <div className="formobile">
                    <div className="social">
                        <SocialLinks ulClasses="nav justify-content-center" />
                    </div>
                    <div className="hdr-menu d-flex align-items-center">
                        <div className="lefthead">
                            <a className="nav-link" href={ROUTES.HOME}><img src="images/text-logo.png"/></a>
                        </div>
                        <div className="logo-holder">
                            <a className="navbar-brand logo" href={ROUTES.HOME}><img src="images/logo.png"/></a>
                        </div> 
                        <div className="toggle">
                            <a href="javascript:void(0)" className="open-menu" id="open-menu"><span></span><span></span></a>
                        </div>
                    </div>
                    <div className="hdr-menu" id="navigation">
                        <NavList ulClasses="nav" />
                        <div className="buy-btn formobile">
                            <UniLink />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
