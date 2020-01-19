import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './authentication/GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Node React Exaple Projects
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Projects
                </Link>
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;