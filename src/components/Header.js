import React, { useEffect } from 'react';
import $ from 'jquery'; // lazy slide toggle copy for responsive menu

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
                    <a className="nav-link" href="#"><img src="images/text-logo.png"/></a>
                </div>
                <div className="collapse navbar-collapse justify-content-between" id="navbarToggle" />
                <div className="logo-holder d-flex justify-content-center align-items-center">
                    <a className="navbar-brand logo" href="index.html"><img src="images/logo.png"/></a>
                </div>
                <div className="hdr-menu">
                    <ul className="nav social justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link" href="https://discord.gg/gQwvNnx"><img src="images/social1.png"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://etherscan.io/token/0x9a7a4c141a3bcce4a31e42c1192ac6add35069b4"><img src="images/social2.png"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src="images/social3.png"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://t.me/xmmtoken"><img src="images/social4.png"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://twitter.com/MomentumXMM"><img src="images/social5.png"/></a>
                        </li>
                    </ul>        
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="pooling.html">Pooling</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about-momentum.html">About Momentum</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">White Paper</a>
                        </li>    
                    </ul>
                </div>        
                </nav>
            </div>
            <div className="container">
                <div className="formobile">
                    <div className="social">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link" href="https://discord.gg/gQwvNnx"><img src="images/social1.png"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://etherscan.io/token/0x9a7a4c141a3bcce4a31e42c1192ac6add35069b4"><img src="images/social2.png"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><img src="images/social3.png"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://t.me/xmmtoken"><img src="images/social4.png"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://twitter.com/MomentumXMM"><img src="images/social5.png"/></a>
                            </li>
                        </ul>
                    </div>
                    <div className="hdr-menu d-flex align-items-center">
                        <div className="lefthead">
                            <a className="nav-link" href="#"><img src="images/text-logo.png"/></a>
                        </div>
                        <div className="logo-holder">
                            <a className="navbar-brand logo" href="index.html"><img src="images/logo.png"/></a>
                        </div> 
                        <div className="toggle">
                            <a href="javascript:void(0)" className="open-menu" id="open-menu"><span></span><span></span></a>
                        </div>
                    </div>
                    <div className="hdr-menu" id="navigation">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="pooling.html">Pooling</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="about-momentum.html">About Momentum</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">White Paper</a>
                            </li>    
                        </ul>
                        <div className="buy-btn formobile">
                            <a href="#" className="btn">Buy on Uniswap</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
