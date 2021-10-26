import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { logout } from '../../actions/auth';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="container">
            <div className="footer__container">
                <div className="footer__container__left">
                    <div className="footer__container__left__logo">
                        <Link to="/">
                            <img src="/bright_bg_logo.png" className="footer-logo" alt="logo" />
                        </Link>
                    </div>
                    {/* <div className="footer__container__left__links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div> */}
                </div>
                <div className="footer__container__right">
                    <div className="footer__container__right__social">
                        <Link to="/">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="/">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="/">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="/">
                            <i className="fab fa-youtube"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <p>
                    Copyright &copy; {new Date().getFullYear()} All rights
                </p>
            </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {  })(Footer);