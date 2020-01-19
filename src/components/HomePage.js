import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <div className="ui container">
                <h1 className="ui header">Projects</h1>
                <div className="ui horizontal divider">
                    Season
                </div>
                <div className="ui raised very padded text container segment">
                    <div className="item">
                        <Link to="/seasons">Season</Link>
                    </div>
                </div>
                <div className="ui raised very padded text container segment">
                    <div className="item">
                        <Link to="/pics">Pics</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;