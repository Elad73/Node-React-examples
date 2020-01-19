import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './authentication/GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Home
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Projects
                </Link> 
                <div className="item">
                    <GoogleAuth /> 
                </div>
                <div className="item">Version</div>
                <div className="item">Lang</div>
                <a href="https://github.com/Elad73/Node-React-examples" target="_blank" rel="noopener noreferrer" className="item">
                    GitHub
                    <i className="external alternate icon"></i>
                </a>
            </div>
        </div>
    );
};

export default Header;
