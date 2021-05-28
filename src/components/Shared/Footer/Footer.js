import { faFacebook, faInstagram, faSnapchat, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-clean">
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="/#">Ebook</a></li>
                            <li><a href="/#">Audio Book</a></li>
                            <li><a href="/#">Broadcast</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="/#">Company</a></li>
                            <li><a href="/#">Team</a></li>
                            <li><a href="/#">Legacy</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 col-md-3 item">
                        <h3>Top Category</h3>
                        <ul>
                            <li><a href="/#">History</a></li>
                            <li><a href="/#">Self Motivation</a></li>
                            <li><a href="/#">Romantic</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 item social">
                        <a href="/#"><FontAwesomeIcon icon={faFacebook}/> </a>
                        <a href="/#"><FontAwesomeIcon icon={faTwitter}/> </a>
                        <a href="/#"><FontAwesomeIcon icon={faSnapchat}/> </a>
                        <a href="/#"><FontAwesomeIcon icon={faInstagram}/> </a>
                        <p className="copyright">CBook Room © 2021</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    );
};

export default Footer;